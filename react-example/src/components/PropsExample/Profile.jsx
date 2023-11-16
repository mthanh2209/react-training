import { getImageUrl } from "./Utitls.js";

function Profile({ imageId, name, profession, awards, discovered, imageSize }) {
    let thumbnailSize = 's'
    if (imageSize > 90) {
        thumbnailSize = 'b'
    }
    return (
        <section>
            <h2>{name}</h2>
            <img
                src={getImageUrl(imageId, thumbnailSize)}
                alt={name}
                width={imageSize}
                height={imageSize}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
                    <b>Awards: {awards.length} </b>
                    ({awards.join(', ')})
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovered}
                </li>
            </ul>
        </section>
    )
}
export default function Scientists() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile
                imageId="szV5sdG"
                imageSize={40}
                name="Maria Skłodowska-Curie"
                profession="physicist and chemist"
                awards={[
                    'Nobel Prize in Physics',
                    'Nobel Prize in Chemistry',
                    'Davy Medal',
                    'Matteucci Medal',
                ]}
                discovered="polonium (chemical element)"
            />

            <Profile
                imageId="YfeOqp2"
                imageSize={140}
                name="Katsuko Saruhashi"
                profession="geochemist"
                awards={[
                    'Miyake Prize for geochemistry',
                    'Tanaka Prize',
                ]}
                discovered="a method for measuring carbon dioxide in seawater"
            />
        </div>
    );
}
