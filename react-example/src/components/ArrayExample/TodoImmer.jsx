import { useState } from "react";
import { useImmer } from "use-immer";

let nextId = 3

const initTodos = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false },
];

export default function TodoTaskImmer() {
    const [todos, updateTodos] = useImmer(initTodos)

    function handleAddTodo(title) {
        updateTodos((draft) => {
            draft.push({
                id: nextId++,
                title: title,
                done: false
            })
        })
    }

    function handleChangeTodo(nextTodo) {
        updateTodos((draft) => {
            const todo = draft.find((todo) => todo.id === nextTodo.id)
            todo.title = nextTodo.title
            todo.done = nextTodo.done
        })
    }

    function handleDeleteTodo(todoId) {
        updateTodos((draft) => {
            const index = draft.findIndex((todo) => todo.id === todoId)
            draft.splice(index, 1)
        })
    }

    return (
        <>
            <h1>Todo List with Immer</h1>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    )
}

function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState('')

    return (
        <>
            <input
                placeholder="Add todo"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button onClick={() => {
                setTitle('')
                onAddTodo(title)
            }}>Add</button>
        </>
    )
}

function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    )
}

function Task({ todo, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false)
    let todoContent
    if (isEditing) {
        todoContent = (
            <>
                <input
                    value={todo.title}
                    onChange={e => {
                        onChange({
                            ...todo,
                            title: e.target.value
                        })
                    }}
                />
                <button onClick={e => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
        todoContent = (
            <>
                {todo.title}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    return (
        <label>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={e => {
                    onChange({
                        ...todo,
                        done: e.target.checked
                    })
                }}
            />
            {todoContent}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </label>
    )
}