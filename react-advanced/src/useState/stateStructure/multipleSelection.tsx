import { useState } from "react";

interface Letter {
  id: number;
  subject: string;
  isStarred: boolean;
}

interface LetterProps {
  letter: Letter;
  onToggle: (toggledId: number) => void;
  isSelected: boolean;
}

export const MailClient = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const selectedCount = selectedIds.length;

  const handleToggle = (toggledId: number) => {
    if (selectedIds.includes(toggledId)) {
      setSelectedIds(selectedIds.filter((id) => id !== toggledId));
    } else {
      setSelectedIds([...selectedIds, toggledId]);
    }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <LetterComponent
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.includes(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
};

const LetterComponent = ({
  letter,
  onToggle,
  isSelected
}: LetterProps) => {
  const handleToggle = () => {
    onToggle(letter.id);
  }

  return (
    <li className={isSelected ? "selected" : ""}>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleToggle}
        />
        {letter.subject}
      </label>
    </li>
  );
};

const letters: Letter[] = [
  {
    id: 0,
    subject: "Ready for adventure?",
    isStarred: true,
  },
  {
    id: 1,
    subject: "Time to check in!",
    isStarred: false,
  },
  {
    id: 2,
    subject: "Festival Begins in Just SEVEN Days!",
    isStarred: false,
  },
];
