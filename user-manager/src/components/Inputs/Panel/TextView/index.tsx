// Helpers
import { renderDate } from '@helpers';

interface ITextView {
  title?: string;
  date?: string | null;
}
const TextView = ({ title, date }: ITextView) => (
  <div className='form-item'>
    <span className='form-item-title'>{title}</span>
    <p className='form-edit-content'>
      {date == null ? 'Unknown' : renderDate(date)}
    </p>
  </div>
);

export default TextView;
