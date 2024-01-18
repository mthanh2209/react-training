import { useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);

  const activeTodos = todos.filter((todo) => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;

  const handleChange = (e) => {
    setShowActive(e.target.checked);
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={handleChange} />
        Show only active todos
      </label>
      <NewTodo onAdd={handleAddTodo} />
      <ul>
        {visibleTodos.map((todo) => (
          <li>{todo.completed
            ? <s>{todo.text}</s>
            : todo.text}
          </li>
        ))}
      </ul>
      <footer>{activeTodos.length} todos left</footer>
    </>
  );
};

const NewTodo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    setText("");
    onAdd(createTodo(text));
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input value={text} onChange={handleChange} />
      <button onClick={handleAddTodo}>Add</button>
    </>
  );
};

let nextId = 0;

const createTodo = (text, completed = false) => {
  return {
    id: nextId,
    text,
    completed,
  };
};

const initialTodos = [
  createTodo("Read React", false),
  createTodo("Sleep", true),
  createTodo("Have breakfast", true),
  createTodo("Have lunch", false),
];
