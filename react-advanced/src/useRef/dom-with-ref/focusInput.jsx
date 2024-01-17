import { forwardRef, useRef } from "react";

const SearchButton = ({ onClick }) => (
  <button onClick={onClick}>Search</button>
)

const SearchInput = forwardRef((_, ref) => (
  <input ref={ref} placeholder="Looking for something" />
));

export const SearchPage = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <SearchInput ref={inputRef} />
      <SearchButton onClick={handleClick} />
    </>
  );
};
