// Components
import '@components/common/Status/Status.css'

interface IStatus {
  isActive: boolean;
}
const Status = ({ isActive }: IStatus) => (
  <span
    className={`status status-${isActive
      ? 'active'
      : 'not-active'
    }`}>
    {isActive ? 'Active' : 'Not active'}
  </span>
);

export default Status;
