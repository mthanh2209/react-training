import { useState } from "react";

const initCounters = [0, 0, 0]

export default function CounterList() {
    const [counters, setCounters] = useState(initCounters)

    function handleIncrementClick(index) {
        const nextCounters = counters.map((counter, i) => {
            if (i === index) {
                return counter + 1
            } else {
                return counter
            }
        })
        setCounters(nextCounters)
    }

    return (
        <ul>
            {counters.map((counter, i) => (
                <li key={i}>
                    {counter}{' '}
                    <button onClick={() => { handleIncrementClick(i) }}>+1</button>
                </li>
            ))}
        </ul>
    )
}