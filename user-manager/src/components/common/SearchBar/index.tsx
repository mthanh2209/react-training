import TextField from '@components/common/TextField';
import '@components/common/SearchBar/SearchBar.css';
interface ISearchBarProps {
  icon?: string
}

const SearchBar = ({
  icon
}: ISearchBarProps) => {
  return (
    <div className='search-wrapper'>
      <TextField
        className='search'
        placeholder='Search'
      />
      <img
        className='close-icon'
        src={icon}
        alt='icon'
      />
    </div>
  )
}

export default SearchBar;
