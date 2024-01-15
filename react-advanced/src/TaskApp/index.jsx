import { AddTask } from "./addTask";
import { TaskProvider } from "./taskContext";
import { TaskList } from "./taskList";

export const TaskApp = () => {
  return (
    <TaskProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
};
