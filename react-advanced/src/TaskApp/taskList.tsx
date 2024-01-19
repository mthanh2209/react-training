import { ChangeEvent, useState } from "react";
import { useTasks, useTasksDispatch } from "@TaskApp/taskContext";

interface TaskProp {
  task: {
    id: number;
    text: string;
    done: boolean;
  }
}

export const TaskList = () => {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

const Task = ({ task }: TaskProp) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent: JSX.Element;

  const handleCloseEditing = () => {
    setIsEditing(false);
  };

  const handleOpenEditing = () => {
    setIsEditing(true);
  };

  const handleChangeTask = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "changed",
      task: {
        ...task,
        text: e.target.value,
      },
    });
  };

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "changed",
      task: {
        ...task,
        done: e.target.checked,
      },
    });
  };

  const handleDeleteTask = () => {
    dispatch({
      type: "deleted",
      id: task.id,
    });
  };

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={handleChangeTask}
        />
        <button onClick={handleCloseEditing}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={handleOpenEditing}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={handleChangeCheckbox}
      />
      {taskContent}
      <button onClick={handleDeleteTask}>Delete</button>
    </label>
  );
};
