import { useReducer } from "react";
import { AddTask } from "./addTask";
import { TaskList } from "./taskList";
import { TaskContext, TaskDispatchContext } from "./taskContext";

export const TaskApp = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <>
      <TaskContext.Provider value={tasks}>
        <TaskDispatchContext.Provider value={dispatch}>
          <h1>Day off in Kyoto</h1>
          <AddTask />
          <TaskList />
        </TaskDispatchContext.Provider>
      </TaskContext.Provider>
    </>
  );
};

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
