import { useState } from "react";

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  onAdd: (newTodo: TodoProps) => void;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoProps[]>(initialTodos);
  const [showActive, setShowActive] = useState<boolean>(false);

  const activeTodos = todos.filter((todo) => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowActive(e.target.checked);
  };

  const handleAddTodo = (newTodo: TodoProps) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={handleChange}
        />
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


/**
 * The NewTodo component.
 * @param onAdd - Callback function triggered when a new todo is added.
 */
const NewTodo = ({ onAdd }: TodoListProps) => {
  const [text, setText] = useState<string>("");

  const handleAddTodo = () => {
    setText("");
    onAdd(createTodo(text));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

/**
 * Creates a new Todo item.
 * @param text - The text content of the todo.
 * @param completed - Indicates whether the todo is completed (default is `false`).
 * @returns The newly created Todo item.
 */
const createTodo = (
  text: string,
  completed: boolean = false
): TodoProps => {
  return {
    id: nextId,
    text,
    completed,
  };
};

const initialTodos: TodoProps[] = [
  createTodo("Read React", false),
  createTodo("Sleep", true),
  createTodo("Have breakfast", true),
  createTodo("Have lunch", false),
];
