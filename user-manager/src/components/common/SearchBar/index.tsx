// Components
import '@components/common/SearchBar/SearchBar.css';
import TextField from '@components/common/TextField';

interface ISearchBarProps {
  icon?: string
  onChange?: (value: string) => void
  onClose?: () => void
}

const SearchBar = ({
  icon,
  onChange,
  onClose
}: ISearchBarProps) => {
  return (
    <div className='search-wrapper'>
      <TextField
        className='search'
        placeholder='Search'
        onChange={onChange}
      />
      <img
        className='close-icon'
        src={icon}
        alt='icon'
        onClick={onClose}
      />
    </div>
  )
}

export default SearchBar;
