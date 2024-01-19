import { useState } from "react";
import { useTasksDispatch } from "./taskContext";

export const AddTask = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useTasksDispatch();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTask = () => {
    setText("");
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  };

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={handleChangeInput}
      />
      <button onClick={handleAddTask}>Add</button>
    </>
  );
};

let nextId: number = 3;
