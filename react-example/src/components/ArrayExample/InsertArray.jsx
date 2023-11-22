import { useState } from "react";

const initArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
]

let nextId = 3

export default function InsertList() {
    const [name, setName] = useState('')
    const [artists, setArtists] = useState(initArtists)

    function handleClick() {
        const insertAt = 1;
        const nextArtists = [
            // Items before the insertion point:
            ...artists.slice(0, insertAt),
            // New item:
            {
                id: nextId++,
                name: name
            },
            // Items after the insertion point:
            ...artists.slice(insertAt)
        ]
        setArtists(nextArtists)
        setName('')
    }

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={handleClick}>Insert</button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    )
}