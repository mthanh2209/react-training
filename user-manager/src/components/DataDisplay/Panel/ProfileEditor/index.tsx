import { useEffect, useState } from 'react';
import validator from 'validator';

// Components
import Modal from '@components/DataDisplay/Modal';
import Status from '@components/DataDisplay/Status';
import Button from '@components/Inputs/Button';
import ImageUploader from '@components/Inputs/ImageUploader';
import SwitchStatus from '@components/Inputs/SwitchStatus';
import TextArea from '@components/Inputs/TextArea';
import TextField from '@components/Inputs/TextField';
import TextView from '@components/DataDisplay/Panel/TextView';

// Interfaces
import { IUserProps } from '@interfaces/users';

// Helpers
import { formatDate } from '@helpers/formatDate';

//Constants
import { VALIDATION_MESSAGE } from '@constants';

interface IProfileEditor {
  id: number;
  avatar: string;
  fullName: string;
  email: string;
  isActive: boolean;
  registeredDate: string | null;
  lastVisitedDate: string | null;
  details: string;
  bgColor: string;
  onSaveUser: (itemData: IUserProps) => void;
  onDeleteUser: (id: number) => void;
  showToast: (show: boolean, isError: boolean) => void;
}

const ProfileEditor = ({
  id,
  avatar,
  fullName,
  email,
  isActive,
  registeredDate,
  lastVisitedDate,
  details,
  bgColor,
  onSaveUser,
  onDeleteUser,
  showToast
}: IProfileEditor) => {
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

    const emailError = isEmailValid(currentEmail);
    const fullNameError = isFullNameValid(currentFullName);

    if (emailError || fullNameError) {
      showToast(true, true);
      return;
    }

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
    onSaveUser(updatedItem as IUserProps);
    showToast(true, false);
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

  useEffect(() => {
    setFullName(fullName);
    setEmail(email);
    setStatus(isActive);
    setDetails(details);
    setAvatar(avatar);
  }, [fullName, email, isActive, details, avatar]);

  const isEmailValid = (value: string): string | undefined => {
    if (!value) {
      return VALIDATION_MESSAGE.EMAIL_REQUIRED;
    } else if (!validator.isEmail(value)) {
      return VALIDATION_MESSAGE.INVALID_EMAIL;
    }
    return undefined;
  };

  const isFullNameValid = (value: string): string | undefined => {
    if (!value.trim()) {
      return VALIDATION_MESSAGE.INVALID_NAME;
    }
    return undefined;
  };

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

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          type='confirm'
          modalTitle='Delete'
          modalDesc='Are you sure to delete this user?'
          confirmText='Delete'
          denyText='Cancel'
          onClose={handleCloseModal}
          onConfirmText={handleDeleteButton}
          onDenyText={handleCloseModal}
        />
      )}

      <form
        id='form-edit-profile'
        className='form-edit-profile'
        onSubmit={handleFormSubmit}
      >
        <div className='form-item form-item-input'>
          <TextField
            isShowLabel={true}
            label='Full Name'
            additionalClass='input-text'
            value={currentFullName}
            onChange={handleFullNameChange}
            validate={isFullNameValid}
          />
        </div>

        <div className='form-item form-item-input'>
          <TextField
            isShowLabel={true}
            label='Email'
            additionalClass='input-text'
            value={currentEmail}
            onChange={handleEmailChange}
            validate={isEmailValid}
          />
        </div>

        <div className='form-item form-item-avatar'>
          <span className='form-item-title'>Avatar</span>
          <ImageUploader
            initialImage={currentAvatar}
            alt={currentFullName}
            bgColor={bgColor}
            onChange={handleAvatarChange}
          />
        </div>

        <div className='form-item form-item-status'>
          <span className='form-item-title'>Status</span>
          <SwitchStatus
            isChecked={currentStatus}
            onChange={handleSwitchChange}
          />

          <div className='status-wrapper'>
            <Status isActive={currentStatus} />
          </div>
        </div>

        <TextView
          label='Registered'
          content={
            registeredDate === null || registeredDate === undefined
              ? 'Unknown'
              : formatDate(registeredDate)
          }
        />

        <TextView
          label='Last visited'
          content={
            lastVisitedDate === null || lastVisitedDate === undefined
              ? 'Unknown'
              : formatDate(lastVisitedDate)
          }
        />

        <div className='form-item form-item-details'>
          <span className='form-item-title'>Details</span>
            <TextArea
              onChange={handleDetailsChange}
              value={currentDetails} />
          </div>
        </form>
      </>
    );
};

export default ProfileEditor;
