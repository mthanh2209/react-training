// Components
import '@components/common/SwitchStatus/SwitchStatus.css';

interface ISwitchStatus {
  isChecked?: boolean;
  onChange?: () => {};
}

const SwitchStatus = ({
  isChecked = false,
  onChange
}: ISwitchStatus) => (
  <label className='switch-wrapper'>
    <input
      type='checkbox'
      className='switch-toggle'
      checked={isChecked}
      onChange={onChange}
    />
    <span className='switch-slider round'></span>
  </label>
);

export default SwitchStatus;
