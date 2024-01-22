import { forwardRef, useRef } from "react";

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton = ({ onClick }: SearchButtonProps) => (
  <button onClick={onClick}>Search</button>
)

const SearchInput = forwardRef<HTMLInputElement>((_, ref) => (
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
