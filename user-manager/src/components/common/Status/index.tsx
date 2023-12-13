// Components
import '@components/common/Status/Status.css';

interface IStatus {
  isActive?: boolean;
  active?: string;
  notActive?: string;
}

const Status = ({
  isActive,
  active,
  notActive
}: IStatus) => {
  const statusContent = isActive ? active : notActive;
  return (
    <span
      className={`status status-${isActive
      ? 'active' : 'not-active'}`}>
      {statusContent}
    </span>
  );
};

export default Status;
