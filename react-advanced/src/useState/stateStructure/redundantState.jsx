import { useState } from "react";

let nextId = 3;
const initialItems = [
  { id: 0, title: "Warm socks", packed: true },
  { id: 1, title: "Travel journal", packed: false },
  { id: 2, title: "Watercolors", packed: false },
];

export const TravelPlan = () => {
  const [items, setItems] = useState(initialItems);

  const total = items.length;
  const packed = items.filter((item) => item.packed).length;

  const handleAddItem = (title) => {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  };

  const handleChangeItem = (nextItem) => {
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

  const handleDeleteItem = (itemId) => {
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

const AddItem = ({ onAddItem }) => {
  const [title, setTitle] = useState("");

  const handleChangeTitle = (e) => {
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

const PackingList = ({ items, onChangeItem, onDeleteItem }) => {
  const handleChangeItem = (itemId) => (e) => {
    const updatedItem = items.find((item) => item.id === itemId);
    if (updatedItem) {
      updatedItem.packed = e.target.checked;
      onChangeItem(updatedItem);
    }
  };

  const handleDeleteItem = (itemId) => () => {
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
