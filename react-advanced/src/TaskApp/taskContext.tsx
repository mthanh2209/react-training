import {
  ReactNode,
  createContext,
  useContext,
  useReducer
} from "react";

interface TaskProps {
  id: number;
  text: string;
  done: boolean;
}

type TaskAction =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: TaskProps }
  | { type: "deleted"; id: number };

type Dispatch = (action: TaskAction) => void;

const TaskContext = createContext<TaskProps[]>(null);

const TaskDispatchContext = createContext<Dispatch>(null);

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};

export const useTasks = (): TaskProps[] => {
  return useContext(TaskContext);
};

export const useTasksDispatch = (): Dispatch => {
  return useContext(TaskDispatchContext);
};

const tasksReducer = (tasks: TaskProps[], action: TaskAction): TaskProps[] => {
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
      throw Error("Unknown action: " + (action as any).type);
    }
  }
};

const initialTasks: TaskProps[] = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
