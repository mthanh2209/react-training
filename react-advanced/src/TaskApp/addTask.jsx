import { useState } from "react";
import { useTasksDispatch } from "./taskContext";

export const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();

  const handleChangeInput = (e) => {
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

let nextId = 3;