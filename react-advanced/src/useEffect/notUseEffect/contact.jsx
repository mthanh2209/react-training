import { useState } from "react";

const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export const Contact = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);
  const selectedContact = contacts.find((c) => c.id === selectedId);

  const handleSave = (updateData) => {
    const nextContacts = contacts.map((c) => {
      if (c.id === updateData.id) {
        return updateData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  };

  const handleSelected = (id) => {
    setSelectedId(id);
  };

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={handleSelected}
      />
      <hr />
      <EditContact saveContact={selectedContact} onSave={handleSave} />
    </div>
  );
};

const EditContact = (props) => {
  return <EditForm {...props} key={props.saveContact.id} />;
};

const EditForm = ({ saveContact, onSave }) => {
  const [name, setName] = useState(saveContact.name);
  const [email, setEmail] = useState(saveContact.email);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSave = () => {
    const updateData = {
      id: saveContact.id,
      name: name,
      email: email,
    };
    onSave(updateData);
  };

  const handleReset = () => {
    setName(saveContact.name);
    setEmail(saveContact.email);
  };

  return (
    <section>
      <label>
        Name: <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <label>
        Email: <input type="text" value={email} onChange={handleChangeEmail} />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleReset}>Reset</button>
    </section>
  );
};

const ContactList = ({ contacts, selectedId, onSelect }) => {
  const handleSelected = (id) => {
    onSelect(id);
  };

  return (
    <section>
      <ul className="contacts-list">
        {contacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            <button onClick={() => handleSelected(contact.id)}>
              {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
