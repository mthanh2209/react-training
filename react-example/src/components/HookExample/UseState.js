import { useState } from "react"
import { sculptureList } from "./Data"

export function Gallery() {
    const [index, setIndex] = useState(0)

    let hasPrev = index > 0
    let hasNext = index < sculptureList.length - 1

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1)
        }
    }

    function handlePreviousClick() {
        if (hasPrev) {
            setIndex(index - 1)
        }
    }

    let sculpture = sculptureList[index]
    return (
        <>
            <button onClick={handlePreviousClick} disabled={!hasPrev}>Previous Gallery</button>
            <button onClick={handleNextClick} disabled={!hasNext}>Next Gallery</button>
            <h2>{sculpture.name} of {sculpture.artist}</h2>
            <h3><i>({index + 1} of {sculptureList.length})</i></h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>{sculpture.description}</p>
        </>
    )
}

export function Form() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handleReset() {
        setFirstName('');
        setLastName('');
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>Hi, {firstName} {lastName}</h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    );
}

export function FeedbackForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');
    if (isSent) {
        return <h1>Thank you!</h1>;
    } else {
        return (
            <form onSubmit={e => {
                e.preventDefault();
                alert(`Sending: "${message}"`);
                setIsSent(true);
            }}>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <br />
                <button type="submit">Send</button>
            </form>
        );
    }
}