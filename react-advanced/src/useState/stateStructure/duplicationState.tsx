import { useState } from 'react';

interface Letter {
  id: number;
  subject: string;
  isStarred: boolean;
}

interface LetterProps {
  letter: Letter;
  isHighlighted: boolean;
  onHover: (letterId: number) => void;
  onToggleStar: (starredId: number) => void;
}

export const MailStar = () => {
  const [letters, setLetters] = useState<Letter[]>(initialLetters);
  const [highlightedId, setHighlightedId] = useState<number | null>(null);

  const handleHover = (letterId: number) => {
    setHighlightedId(letterId);
  }

  const handleStar = (starredId: number) => {
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
          <LetterComponent
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

const LetterComponent = ({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}: LetterProps) => {
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

const initialLetters: Letter[] = [{
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
