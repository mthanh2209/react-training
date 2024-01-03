// Components
import Avatar from '@components/DataDisplay/Avatar';
import Status from '@components/DataDisplay/Status';

// Interfaces
import { IColumnProps } from '@interfaces/columns';
import { IUserProps } from '@interfaces/users';

// Helpers
import { highlightKeyword } from '@helpers/highlightKeyword';

/**
 * Generates columns configuration for a user list.
 * @param searchKeyword - The keyword used for highlighting.
 * @returns An array of column configurations for IUserProps.
 */
export const COLUMNS = (searchKeyword: string): IColumnProps<IUserProps>[] => {
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
       * @param _ - Placeholder for column-related data.
       * @param item - The user item containing the full name.
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
       * @param _ - Placeholder for column-related data.
       * @param item - The user item containing the status information.
       * @returns JSX for displaying the user's status.
       */
      render: (_, item) => <Status isActive={item.isActive} />
    },
    {
      key: 'email',
      title: 'Email',
      /**
       * Renders the user's email with highlighted search keyword.
       * @param _ - Placeholder for column-related data.
       * @param item - The user item containing the email.
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
