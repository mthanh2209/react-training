interface IActionBar {
  title: string;
  isActive: boolean;
  itemIndex: number;
  onClick: (itemIndex: number) => void;
}
const ActionBar = ({
  title,
  isActive,
  itemIndex,
  onClick
}: IActionBar) => {
  const handleActionBarClick = () => {
    onClick(itemIndex)
  }

  return (
  <button
    className={`item-bar ${isActive ? 'active' : ''}`}
    type='button'
    onClick={handleActionBarClick} >
    {title}
  </button>
  )
}

export default ActionBar;
