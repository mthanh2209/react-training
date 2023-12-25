// Components
import Avatar from '@components/DataDisplay/Avatar';
import Status from '@components/DataDisplay/Status';

// Interfaces
import { IColumnProps } from '@interfaces/columns';
import { IUserProps } from '@interfaces/users';

// Helpers
import { highlightKeyword } from '@helpers/highlightKeyword';

export const COLUMNS = (searchKeyword: string): IColumnProps<IUserProps>[] => {
  return [
    {
      key: 'avatar',
      title: '',
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
      render: (_, item) => (
        <span dangerouslySetInnerHTML={{
          __html: highlightKeyword(item.fullName, searchKeyword)
        }} />
      )
    },
    {
      key: 'isActive',
      title: 'Status',
      render: (_, item) => <Status isActive={item.isActive} />
    },
    {
      key: 'email',
      title: 'Email',
      render: (_, item) => (
        <span dangerouslySetInnerHTML={{
          __html: highlightKeyword(item.email, searchKeyword)
        }} />
      )
    }
  ];
};
