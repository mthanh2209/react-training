import { useState } from "react";

const initArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' }
]

export default function DeleteList() {
    const [artists, setArtists] = useState(initArtists)

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name}{' '}
                        <button onClick={() => {
                            setArtists(
                                artists.filter(a => a.id !== artist.id)
                            )
                        }}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}