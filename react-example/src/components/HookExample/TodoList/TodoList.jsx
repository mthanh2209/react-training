import { useReducer } from "react";
import { initialTasks } from "../Data";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added':
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }]
        case 'changed':
            return tasks.map(e => {
                if (e.id === action.task.id) { return action.task } else {
                    return e
                }
            })
        case 'deleted':
            return tasks.filter(e => e.id !== action.id)
        default:
            throw Error('Unknown action: ' + action.type)
    }
}

export default function TodoList() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

    function handleAddtask(text) {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text
        })
    }
    function handleUpdatetask(task) {
        dispatch({
            type: 'changed',
            task: task
        })
    }
    function handleDeletetask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId
        })
    }

    return (
        <>
            <h1>Todo List</h1>
            <AddTask onAddTask={handleAddtask} />
            <TaskList
                tasks={tasks}
                onChangeTask={handleUpdatetask}
                onDeleteTask={handleDeletetask} />
        </>
    )
}
let nextId = 3;