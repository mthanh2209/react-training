import { People, Poem, Recipes } from "./Data";
import { getImageUrl } from "./Utils";

function PersonList({ title, people }) {
    return (
        <>
            <h3>{title}</h3>
            <ul>
                {people.map(person =>
                    <li key={person.id}>
                        <img
                            src={getImageUrl(person)}
                            alt={person.name}
                        />
                        <p>
                            <b>{person.name}:</b>
                            {' ' + person.profession + ' '}
                            known for {person.accomplishment}
                        </p>
                    </li>
                )}
            </ul>
        </>
    );
}

export function ScientistsList() {
    const chemists = People.filter(person => person.profession === 'chemist')
    const everyoneElse = People.filter(person => person.profession !== 'chemist')

    return (
        <article>
            <h2>Scientists</h2>
            <PersonList
                title='Chemists'
                people={chemists}
            />
            <PersonList
                title='Everyone Else'
                people={everyoneElse}
            />
        </article>
    )
}

export function RecipeList() {
    return (
        <div>
            <h2>Recipes</h2>
            <ul>
                {Recipes.map(recipe =>
                    <li key={recipe.id}>
                        <h3>{recipe.name}</h3>
                        <ul>
                            {recipe.ingredients.map(ingredient =>
                                <li>
                                    {ingredient}
                                </li>
                            )}
                        </ul>
                    </li>
                )}
            </ul>
        </div>
    );
}

export function PoemList() {
    const poems = Poem[0].lines;
    let output = []

    poems.forEach((line, i) => {
        output.push(
            <hr key={i} />
        )
        output.push(
            <p key={i}>{line}</p>
        )
    });
    output.shift()

    return (
        <article>{output}</article>
    )
}
