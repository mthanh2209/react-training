import { useState } from "react"
function initTodo() {
    const todoList = []
    for (let i = 0; i < 5; i++) {
        todoList.push({
            id: i,
            text: 'Item' + (i + 1)
        })
    }
    return todoList
}
export default function Todo() {
    const [todo, setTodo] = useState(initTodo)
    const [text, setText] = useState('')

    return (
        <>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => {
                setText('')
                setTodo([{
                    id: todo.length,
                    text: text
                }, ...todo])
            }}>Add</button>
            <ul>
                {todo.map(item => (
                    <li key={item.id}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </>
    )
}