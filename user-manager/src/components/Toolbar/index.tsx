import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// Components
import '@components/Toolbar/Toolbar.css';
import SearchBar from '@components/common/SearchBar/index';

// Icons
import searchIcon from '@assets/images/search-icon.svg';

interface IToolbar {
  open?: boolean;
  icon?: string;
  content?: string;
}

const Toolbar = ({
  open = false,
  icon = searchIcon,
  content = 'User'
}: IToolbar) => {
  const [openSearchBar, setOpenSearchBar] = useState(open);

  useEffect(() => {
    setOpenSearchBar(open);
  }, [open]);

  return (
    <div className='toolbar-wrapper'>
      <p className='toolbar-content'>{content}</p>
      <img
        className='search-icon'
        src={icon}
        alt='icon'
        onClick={() => setOpenSearchBar(!open)}
      />

      {openSearchBar &&
        createPortal(
          <SearchBar
            onClose={() => setOpenSearchBar(open)}
          />,
          document.querySelector('.toolbar-wrapper') as HTMLElement
        )}
    </div>
  );
};

export default Toolbar;
