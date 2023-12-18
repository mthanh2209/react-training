import { useState } from 'react';
import { createPortal } from 'react-dom';

// Components
import Modal from '@components/DataDisplay/Modal';
import Status from '@components/DataDisplay/Status';
import Button from '@components/Inputs/Button';
import ImageUploader from '@components/Inputs/ImageUploader';
import SwitchStatus from '@components/Inputs/SwitchStatus';
import TextArea from '@components/Inputs/TextArea';
import TextField from '@components/Inputs/TextField';
import TextView from '@components/Inputs/Panel/TextView';

// Types
import { IUserProps } from '@types/interface';

interface IProfileEditor<T> {
  activeItemBar: string;
  contentItem?: string;
  itemData: T;
  onSaveUser: (itemData: T) => void;
  onDeleteUser: (id: number) => void;
}
const ProfileEditor = ({
  activeItemBar,
  contentItem = 'General',
  itemData,
  onSaveUser,
  onDeleteUser
}: IProfileEditor<IUserProps>) => {
  const {
    id,
    avatar,
    fullName,
    email,
    isActive,
    registeredDate,
    lastVisitedDate,
    details,
    bgColor
  } = itemData;

  const [currentAvatar, setAvatar] = useState(avatar);
  const [currentFullName, setFullName] = useState(fullName);
  const [currentEmail, setEmail] = useState(email);
  const [currentStatus, setStatus] = useState(isActive);
  const [currentDetails, setDetails] = useState(details);
  const [isOpenModal, setOpenModal] = useState(false);

  const handleFullNameChange = (value: string) => {
    setFullName(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleSwitchChange = () => {
    setStatus(!currentStatus);
  };

  const handleDetailsChange = (value: string) => {
    setDetails(value);
  };

  const handleAvatarChange = (value: string) => {
    setAvatar(value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentDate = new Date().toString();
    const updatedItem = {
      id: id,
      avatar: currentAvatar,
      fullName: currentFullName,
      email: currentEmail,
      isActive: currentStatus,
      registeredDate: registeredDate,
      lastVisitedDate: currentDate,
      details: currentDetails,
      bgColor: bgColor
    };
    onSaveUser(updatedItem);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleDeleteButton = () => {
    setOpenModal(false);
    onDeleteUser(id);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
              form='form-edit-profile'
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
            <div className='form-item form-item-input'>
              <TextField
                label='Full Name'
                className='text'
                value={currentFullName}
                onChange={handleFullNameChange}
              />
            </div>

            <div className='form-item form-item-input'>
              <TextField
                label='Email'
                className='text'
                value={currentEmail}
                onChange={handleEmailChange}
              />
            </div>

            <div className='form-item form-item-avatar'>
              <span className='form-item-title'>Avatar</span>
              <ImageUploader
                initialImage=''
                alt={currentFullName}
                bgColor={bgColor}
                onChange={handleAvatarChange}
              />
            </div>

            <div className='form-item form-item-status'>
              <span className='form-item-title'>Status</span>
              <SwitchStatus isChecked={currentStatus} onChange={handleSwitchChange} />

              <div className='status-wrapper'>
                <Status isActive={currentStatus} />
              </div>
            </div>

            <TextView
              title='Registered'
              date={registeredDate} />

            <TextView
              title='Last visited'
              date={lastVisitedDate} />

            <div className='form-item form-item-details'>
              <span className='form-item-title'>Details</span>
              <TextArea
                onChange={handleDetailsChange}
                value={currentDetails} />
            </div>
          </form>
        </>
      );

    default:
      return null;
  }
};

export default ProfileEditor;
