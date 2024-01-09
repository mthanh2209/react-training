import { useState } from "react";

const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export const ContactManager = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);

  const selectedContact = contacts.find((contact) => contact.id === selectedId);

  const handleSave = (updatedData) => {
    const nextContacts = contacts.map((contact) => {
      if (contact.id === updatedData.id) {
        return updatedData;
      } else {
        return contact;
      }
    });
    setContacts(nextContacts);
  };

  const handleSelectedId = (id) => {
    setSelectedId(id);
  };

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={handleSelectedId}
      />

      <EditContact
        key={selectedId}
        initialData={selectedContact}
        onSave={handleSave}
      />
    </div>
  );
};

const ContactList = ({
  contacts,
  selectedId,
  onSelect
}) => {
  const handleClickContact = (id) => {
    return () => {
      onSelect(id);
    };
  };

  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            style={{display: 'inline-block'}}
          >
            <button
              onClick={handleClickContact(contact.id)}
              style={{margin: '10px'}}
            >
              {contact.id === selectedId
                ? <b>{contact.name}</b>
                : contact.name
              }
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

const EditContact = ({ initialData, onSave }) => {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSave = () => {
    const updatedData = {
      id: initialData.id,
      name: name,
      email: email,
    };
    onSave(updatedData);
  };

  return (
    <section>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleChangeEmail}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </section>
  );
};
