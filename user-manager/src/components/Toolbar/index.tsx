import { useState } from 'react';

// Components
import '@components/Toolbar/Toolbar.css';
import SearchBar from '@components/common/SearchBar/index';

// Icons
import searchIcon from '@assets/images/search-icon.svg';

interface IToolbar {
  icon?: string;
  content?: string;
}

const Toolbar = ({
  icon = searchIcon,
  content = 'Users'
}: IToolbar) => {
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const handleOpenSearchBar = () => {
    setOpenSearchBar(true)
  }

  const handleCloseSearchBar = () => {
    setOpenSearchBar(false)
  }

  return (
    <div className='toolbar-wrapper'>
      <p className='toolbar-content'>{content}</p>
      <img
        className='search-icon'
        src={icon}
        alt='icon'
        onClick={handleOpenSearchBar}
      />

      {openSearchBar && (
          <SearchBar
            onClose={handleCloseSearchBar}
          />
        )}
    </div>
  );
};

export default Toolbar;
