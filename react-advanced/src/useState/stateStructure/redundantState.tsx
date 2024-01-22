import { useState } from "react";

interface ItemProps {
  id: number;
  title: string;
  packed: boolean;
}

interface AddItemProps {
  onAddItem: (title: string) => void;
}

interface PackingListProps {
  items: ItemProps[];
  onChangeItem: (nextItem: ItemProps) => void;
  onDeleteItem: (itemId: number) => void;
}

export const TravelPlan = () => {
  const [items, setItems] = useState<ItemProps[]>(initialItems);

  const total = items.length;
  const packed = items.filter((item) => item.packed).length;

  const handleAddItem = (title: string) => {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  };

  const handleChangeItem = (nextItem: ItemProps) => {
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  };

  const handleDeleteItem = (itemId: number) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <b>
        {packed} out of {total} packed!
      </b>
    </>
  );
};

const AddItem = ({ onAddItem }: AddItemProps) => {
  const [title, setTitle] = useState("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAddTitle = () => {
    setTitle("");
    onAddItem(title);
  };

  return (
    <>
      <input
        placeholder="Add item"
        value={title}
        onChange={handleChangeTitle}
      />
      <button onClick={handleAddTitle}>Add</button>
    </>
  );
};

const PackingList = ({
  items,
  onChangeItem,
  onDeleteItem
}: PackingListProps) => {
  const handleChangeItem = (itemId: number) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedItem = items.find((item) => item.id === itemId);
    if (updatedItem) {
      updatedItem.packed = e.target.checked;
      onChangeItem(updatedItem);
    }
  };

  const handleDeleteItem = (itemId: number) => () => {
    onDeleteItem(itemId);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <label style={{ marginRight: "10px" }}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={handleChangeItem(item.id)}
            />{" "}
            {item.title}
          </label>
          <button onClick={handleDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

let nextId = 3;
const initialItems: ItemProps[] = [
  { id: 0, title: "Warm socks", packed: true },
  { id: 1, title: "Travel journal", packed: false },
  { id: 2, title: "Watercolors", packed: false },
];
