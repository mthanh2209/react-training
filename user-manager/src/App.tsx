import '@App.css';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// Components
import Drawer from '@components/DataDisplay/Drawer';
import Table from '@components/DataDisplay/Table';
import Toolbar from '@components/DataDisplay/Toolbar';
import InformationSidebar from '@components/DataDisplay/SideBar';
import Panel from '@components/DataDisplay/Panel';
import Toast from '@components/DataDisplay/Toast';
import ProfileEditor from '@components/DataDisplay/Panel/ProfileEditor';
import Avatar from '@components/DataDisplay/Avatar';
import Status from '@components/DataDisplay/Status';

// Interfaces
import { IUserProps as IUser } from '@interfaces/users';
import { IColumnProps } from '@interfaces/columns';

// Services
import {
  addUsers,
  deleteUsers,
  getUsers,
  updateUsers
} from '@service';

// Constants
import { INFO_LIST } from '@constants/infoList';
import { POPPER_OPTION } from '@constants/popperOption';

// Helpers
import { filterUsers } from '@helpers/filterUsers';
import { highlightKeyword } from '@helpers/highlightKeyword';

/**
 * Generates columns configuration for a user list.
 * @param searchKeyword - The keyword used for highlighting.
 * @returns An array of column configurations for IUser.
 */
const COLUMNS = (searchKeyword: string): IColumnProps<IUser>[] => {
  return [
    {
      key: 'avatar',
      title: '',
      /**
       * Renders an avatar component.
       * @param _ - Placeholder for column-related data.
       * @param item - The user item for which the avatar is rendered.
       * @returns JSX for displaying an avatar.
       */
      render: (_, item) => (
        <Avatar
          src={item.avatar}
          alt={item.fullName}
          bgColor={item.bgColor}
          additionalClass='avatar-circle'
        />
      )
    },
    {
      key: 'fullName',
      title: 'Full Name',
      /**
       * Renders the user's full name with highlighted search keyword.
       * @returns JSX for displaying the full name with highlighted keyword.
       */
      render: (_, item) => (
        <span dangerouslySetInnerHTML={{
          __html: highlightKeyword(item.fullName, searchKeyword)
        }} />
      )
    },
    {
      key: 'isActive',
      title: 'Status',
      /**
       * Renders the user's status.
       * @returns JSX for displaying the user's status.
       */
      render: (_, item) => <Status isActive={item.isActive} />
    },
    {
      key: 'email',
      title: 'Email',
      /**
       * Renders the user's email with highlighted search keyword.
       * @returns JSX for displaying the email with highlighted keyword.
       */
      render: (_, item) => (
        <span dangerouslySetInnerHTML={{
          __html: highlightKeyword(item.email, searchKeyword)
        }} />
      )
    }
  ];
};

/**
 * Main application component managing user data and UI interactions.
 */
const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedRow, setSelectedRow] = useState<{
    index: number;
    data: IUser | null;
  }>({
    index: 0,
    data: null
  });
  const [userInfoList, setUserInfoList] = useState<any[]>([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showToast, setShowToast] = useState({
    show: false,
    isError: false,
    key: 0
  });

  /**
   * Function to handle displaying or hiding toast messages.
   * @param {boolean} show - Determines whether to display the toast (default: true).
   * @param {boolean} isError - Indicates if the toast is an error message (default: false).
   */
  const handleShowToast = (show = true, isError = false) => {
    setShowToast((prevToast) => ({
      show,
      isError,
      key: prevToast.key + 1
    }));
  };

  /**
   * Retrieves user data from the API.
   */
  const handleGetUsers = async () => {
    const response = await getUsers();
    if (response.data) {
      setUsers(response.data);
    }
  };

  /**
   * Triggers an effect when the selectedRow.data changes to update the userInfoList and fetches user data.
   * If selectedRow.data exists, updates the userInfoList based on the selectedRow.data.
   * Always fetches the latest user data by calling handleGetUsers().
   */
  useEffect(() => {
    if (selectedRow.data) {
      setUserInfoList(INFO_LIST(selectedRow.data));
    }
    handleGetUsers();
  }, [selectedRow.data]);

  /**
   * Adds a new user.
   * @param userName - The name of the user to add.
   */
  const handleAddUsers = async (userName: string) => {
    const response = await addUsers(userName);
    if (response.data) {
      const { data } = await getUsers();

      setUsers(data);
      setSelectedRow({
        index: data.length,
        data: data[data.length - 1]
      });
      setShowSidebar(true);
      handleShowToast(true, false);
    } else {
      handleShowToast(true, true);
    }
  };

  /**
   * Shows the panel for editing user details.
   */
  const handleShowPanel = () => {
    setShowSidebar(false);
  };

  /**
   * Shows the sidebar for display user information.
   */
  const handleClosePanel = () => {
    setShowSidebar(true);
  };

  /**
   * Updates user information based on the changes made and retrieves updated user data.
   * @param {IUser} itemData - Updated user data.
   */
  const handleUpdateUsers = async (itemData: IUser) => {
    const response = await updateUsers(itemData);
    if (response.data) {
      setSelectedRow({
        index: selectedRow.index,
        data: response.data
      });
      handleGetUsers();
      handleShowToast(true, false);
    } else {
      handleShowToast(true, true);
    }
  };

  /**
   * Deletes the selected user and updates the user list.
   */
  const handleDeleteUsers = async () => {
    if (selectedRow.data) {
      const response = await deleteUsers(selectedRow.data.id);
      if (response.data) {
        setSelectedRow({ index: 0, data: null });
        handleGetUsers();
        handleShowToast(true, false);
      } else {
        handleShowToast(true, true);
      }
    }
  };

  /**
   * Handles selecting a row in the table and displaying user information.
   * @param {number} index - Index of the selected row.
   * @param {IUser} dataItem - Data of the selected user.
   */
  const handleSelectedRow = (index: number, dataItem: IUser): void => {
    setSelectedRow({ index, data: dataItem });
    if (showSidebar || showSidebar === null) {
      setShowSidebar(true);
    } else if (!showSidebar) {
      setShowSidebar(false);
    }
  };

  /**
   * Represents the filtered list of users based on the search keyword.
   * @type {IUser[]}
   */
  const filteredUsers: IUser[] = filterUsers(users, searchKeyword);

  /**
   * Represents the columns configuration based on the search keyword.
   * @type {any}
   */
  const columns = COLUMNS(searchKeyword);

  /**
   * Handles searching for users based on a keyword.
   * @param {string} keyword - The keyword used for filtering users.
   */
  const handleSearch = (keyword: string): void => {
    setSearchKeyword(keyword);
  };

  /**
   * Closes the search bar by resetting the search keyword.
   */
  const handleCloseSearchBar = () => {
    setSearchKeyword('');
  };

  /**
   * Handles item click events in the drawer.
   * @param {string} itemKey - The key of the clicked item.
   */
  const handleItemClick = (itemKey: string) => {
    switch (itemKey) {
      case 'users':
        handleGetUsers();
        break;

      default:
        break;
    }
  };

  return (
    <>
      <header className='main-header'>User Manager</header>
      <main className='main-body'>
        <Drawer
          popperOption={POPPER_OPTION}
          onItemClick={handleItemClick}
          onSubmit={handleAddUsers}
        />

        <div className='body-content'>
          <Toolbar
            onClose={handleCloseSearchBar}
            onChange={handleSearch}
          />
          <Table
            rowData={filteredUsers}
            columns={columns}
            selectedRowIndex={selectedRow.index}
            onRowClick={handleSelectedRow}
          />
        </div>

        {showSidebar && selectedRow.data !== null && (
          <InformationSidebar
            title='User information'
            isActive={selectedRow.data.isActive}
            src={selectedRow.data.avatar}
            bgColor={selectedRow.data.bgColor}
            fullName={selectedRow.data.fullName}
            infoList={userInfoList}
            onEditButton={handleShowPanel}
          />
        )}

        {!showSidebar && selectedRow.data !== null && (
          <Panel
            tabs={[
              {
                content: (
                  <ProfileEditor
                    id={selectedRow.data.id}
                    avatar={selectedRow.data.avatar}
                    fullName={selectedRow.data.fullName}
                    email={selectedRow.data.email}
                    isActive={selectedRow.data.isActive}
                    registeredDate={selectedRow.data.registeredDate}
                    lastVisitedDate={selectedRow.data.lastVisitedDate}
                    details={selectedRow.data.details}
                    bgColor={selectedRow.data.bgColor}
                    onSaveUser={handleUpdateUsers}
                    onDeleteUser={handleDeleteUsers}
                  />
                ),
                title: 'General'
              }
            ]}
            onReturnClick={handleClosePanel}
          />
        )}
      </main>

      {showToast.show &&
        createPortal(
          <Toast
            isError={showToast.isError}
            key={showToast.key}
          />,
          document.querySelector('.main-header') as HTMLElement
        )}
    </>
  );
};

export default App;
