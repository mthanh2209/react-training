import { useState } from 'react';

const initialLetters = [{
  id: 0,
  subject: 'Ready for adventure?',
  isStarred: true,
}, {
  id: 1,
  subject: 'Time to check in!',
  isStarred: false,
}, {
  id: 2,
  subject: 'Festival Begins in Just SEVEN Days!',
  isStarred: false,
}];

export const MailStar = () => {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedId, setHighlightedId] = useState(null);

  const handleHover = (letterId) => {
    setHighlightedId(letterId);
  }

  const handleStar = (starredId) => {
    setLetters(letters.map(letter => {
      if (letter.id === starredId) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={
              letter.id === highlightedId
            }
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}

const Letter = ({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}) => {
  const handleHover = () => {
    onHover(letter.id);
  }

  const handleToggleStar = () => {
    onToggleStar(letter.id)
  }

  return (
    <li
      className={isHighlighted ? 'highlighted' : ''}
      onFocus={handleHover}
      onPointerMove={handleHover}
    >
      <button onClick={handleToggleStar}>
        {letter.isStarred ? 'Unstar' : 'Star'}
      </button>
      {letter.subject}
    </li>
  )
}
