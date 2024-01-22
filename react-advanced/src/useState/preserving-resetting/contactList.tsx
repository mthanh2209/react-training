import { useState } from "react";

interface ContactProps {
  id: number;
  name: string;
  email: string;
}

interface ContactComponentProps {
  contact: ContactProps;
}

const contacts:ContactProps[] = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
];

export const ContactList = () => {
  const [reverse, setReverse] = useState<boolean>(false);

  const displayedContacts: ContactProps[] = [...contacts];

  if (reverse) {
    displayedContacts.reverse();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReverse(e.target.checked);
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={handleChange}
        />
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

const Contact = ({ contact }: ContactComponentProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleEmail = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <p>
        <b>{contact.name}</b>
      </p>
      {expanded && (
        <p>
          <i>{contact.email}</i>
        </p>
      )}
      <button onClick={handleEmail}>
        {expanded ? "Hide" : "Show"} email
      </button>
    </>
  );
};
