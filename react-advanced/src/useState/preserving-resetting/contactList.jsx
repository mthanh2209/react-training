import { useState } from "react";

const contacts = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
];

export const ContactList = () => {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];

  if (reverse) {
    displayedContacts.reverse();
  }

  const handleChange = (e) => {
    setReverse(e.target.checked);
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          value={reverse}
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

const Contact = ({ contact }) => {
  const [expanded, setExpanded] = useState(false);

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
