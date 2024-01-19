import { useState } from "react";

interface ContactProps {
  id: number;
  name: string;
  email: string;
}

interface EditContactProps {
  initialData: ContactProps;
  onSave: (updatedData: ContactProps) => void;
}

interface ContactListProps {
  contacts: ContactProps[];
  selectedId: number;
  onSelect: (id: number) => void;
}

const initialContacts: ContactProps[] = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export const ContactManager = () => {
  const [contacts, setContacts] = useState<ContactProps[]>(initialContacts);
  const [selectedId, setSelectedId] = useState<number>(0);

  const selectedContact = contacts.find((contact) => contact.id === selectedId);

  const handleSave = (updatedData: ContactProps) => {
    const nextContacts = contacts.map((contact) => {
      if (contact.id === updatedData.id) {
        return updatedData;
      } else {
        return contact;
      }
    });
    setContacts(nextContacts);
  };

  const handleSelectedId = (id: number) => {
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
}: ContactListProps) => {
  const handleClickContact = (id: number) => {
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

const EditContact = ({ initialData, onSave }: EditContactProps) => {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSave = () => {
    const updatedData: ContactProps = {
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
