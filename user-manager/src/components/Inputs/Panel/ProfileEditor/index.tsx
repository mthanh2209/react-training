import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// Components
import Modal from '@components/DataDisplay/Modal';
import Status from '@components/DataDisplay/Status';
import Button from '@components/Inputs/Button';
import ImageUploader from '@components/Inputs/ImageUploader';
import SwitchStatus from '@components/Inputs/SwitchStatus';
import TextArea from '@components/Inputs/TextArea';
import TextField from '@components/Inputs/TextField';

// Helpers
import { renderDate } from '@helpers';

// Types
import { IUserProps } from '@types/interface';

interface IProfileEditor<T> {
  activeItemBar: string;
  contentItem?: string;
  itemData: T;
  onSaveUser: (itemData: IUserProps) => void;
  onDeleteUser: (id: number) => void;
}
const ProfileEditor = ({
  activeItemBar,
  contentItem = 'General',
  itemData,
  onSaveUser,
  onDeleteUser
}: IProfileEditor<IUserProps>) => {
  const [avatar, setAvatar] = useState(itemData.avatar);
  const [fullName, setFullName] = useState(itemData.fullName);
  const [email, setEmail] = useState(itemData.email);
  const [status, setStatus] = useState(itemData.isActive);
  const [details, setDetails] = useState(itemData.details);
  const [isOpenModal, setOpenModal] = useState(false);

  const handleFullNameChange = (value: string) => {
    setFullName(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleSwitchChange = () => {
    setStatus(!status);
  };

  const handleDetailsChange = (value: string) => {
    setDetails(value);
  };

  const handleAvatarChange = (value: string) => {
    setAvatar(value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const date = new Date();
    const currentDate = date.toString();
    const updatedItem = {
      id: itemData.id,
      avatar: avatar,
      fullName: fullName,
      email: email,
      isActive: status,
      registeredDate: itemData.registeredDate,
      lastVisitedDate: currentDate,
      details: details,
      bgColor: itemData.bgColor
    };
    onSaveUser(updatedItem);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleDeleteButton = () => {
    setOpenModal(false);
    onDeleteUser(itemData.id);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    setFullName(itemData.fullName);
    setEmail(itemData.email);
    setStatus(itemData.isActive);
    setDetails(itemData.details);
    setAvatar(itemData.avatar);
  }, [itemData]);

  switch (activeItemBar) {
    case contentItem:
      return (
        <>
          <div className='confirm-buttons'>
            <Button
              variants='secondary'
              withIcon='none'
              type='button'
              content='Delete'
              onClick={handleOpenModal}
            />
            <Button
              variants='primary'
              withIcon='none'
              type='submit'
              content='Save'
            />
          </div>

          {isOpenModal &&
            createPortal(
              <Modal
                isOpen={isOpenModal}
                type='confirm'
                modalTitle='Delete'
                modalDesc='Are you sure to delete this user?'
                confirmText='Delete'
                denyText='Cancel'
                onClose={handleCloseModal}
                onConfirmText={handleDeleteButton}
              />,
              document.body as HTMLElement
            )}

          <form
            id='form-edit-profile'
            className='form-edit-profile'
            onSubmit={handleFormSubmit}
          >
            <div className='form-item'>
              <span className='form-item-title'>Full Name</span>
              <TextField
                className='text'
                value={fullName}
                onChange={handleFullNameChange}
              />
            </div>

            <div className='form-item'>
              <span className='form-item-title'>Email</span>
              <TextField
                className='text'
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className='form-item form-item-avatar'>
              <span className='form-item-title'>Avatar</span>
              <ImageUploader
                initialImage=''
                alt={fullName}
                bgColor={itemData.bgColor}
                onChange={handleAvatarChange}
              />
            </div>

            <div className='form-item form-item-status'>
              <span className='form-item-title'>Status</span>
              <SwitchStatus isChecked={status} onChange={handleSwitchChange} />

              <div className='status-wrapper'>
                <Status isActive={status} />
              </div>
            </div>

            <div className='form-item'>
              <span className='form-item-title'>Registered</span>
              <p className='form-edit-content'>
                {itemData.registeredDate == null
                  ? 'Unknown'
                  : renderDate(itemData.registeredDate)}
              </p>
            </div>

            <div className='form-item'>
              <span className='form-item-title'>Last visited</span>
              <p className='form-edit-content'>
                {itemData.lastVisitedDate == null
                  ? 'Unknown'
                  : renderDate(itemData.lastVisitedDate)}
              </p>
            </div>

            <div className='form-item form-item-details'>
              <span className='form-item-title'>Details</span>
              <TextArea onChange={handleDetailsChange} value={details} />
            </div>
          </form>
        </>
      );

    default:
      return null;
  }
};

export default ProfileEditor;
