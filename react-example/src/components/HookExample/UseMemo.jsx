import { useState } from "react";

const todos = createTodos();

export default function TodoApp() {
    const [tab, setTab] = useState('all')
    const [isDark, setIsDark] = useState(false)

    return (
        <>
            <button onClick={() => setTab('all')}>All</button>
            <button onClick={() => setTab('active')}>Active</button>
            <button onClick={() => setTab('completed')}>Completed</button>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}
                />
                Dark mode
            </label>
            <hr />
            <TodoList
                todos={todos}
                theme={isDark ? 'dark' : 'light'}
                tab={tab}
            />
        </>
    )
}

function TodoList({ todos, theme, tab }) {
    const visibleTodos = FilterTodo(todos, tab)
    return (
        <div className={theme}>
            <List items={visibleTodos} />
        </div>
    )
}

function List({ items }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {item.completed ? <s>{item.text}</s> : item.text}
                </li>
            ))}
        </ul>
    )
}

function FilterTodo(todos, tab) {
    return todos.filter(todo => {
        if (tab === 'all') {
            return true
        } else if (tab === 'active') {
            return !todo.completed
        } else if (tab === 'completed') {
            return todo.completed
        }
    })
}

function createTodos() {
    const todos = []
    for (let i = 0; i < 30; i++) {
        todos.push({
            id: i,
            text: 'Todo ' + (i + 1),
            completed: Math.random() > 0.5
        })
    }
    return todos
}