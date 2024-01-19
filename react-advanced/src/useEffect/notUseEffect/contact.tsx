import { useState } from "react";

interface ContactProps {
  id: number;
  name: string;
  email: string;
}

interface EditContactProps {
  saveContact: ContactProps;
  onSave: (updateData: ContactProps) => void;
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

export const Contact = () => {
  const [contacts, setContacts] = useState<ContactProps[]>(initialContacts);
  const [selectedId, setSelectedId] = useState<number>(0);
  const selectedContact = contacts.find((c) => c.id === selectedId);

  const handleSave = (updateData: ContactProps) => {
    const nextContacts = contacts.map((c) => {
      if (c.id === updateData.id) {
        return updateData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  };

  const handleSelected = (id: number) => {
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

/**
 * The EditContact component.
 * @param props - The EditContactProps.
 */
const EditContact = (props: EditContactProps) => {
  return <EditForm {...props} key={props.saveContact.id} />;
};

/**
 * The EditForm component.
 * @param saveContact - The contact to be edited.
 * @param onSave - Callback function triggered when the contact is saved.
 */
const EditForm = ({
  saveContact,
  onSave
}: EditContactProps) => {
  const [name, setName] = useState(saveContact.name);
  const [email, setEmail] = useState(saveContact.email);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSave = () => {
    const updateData: ContactProps = {
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
          type="text"
          value={email}
          onChange={handleChangeEmail}
        />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleReset}>Reset</button>
    </section>
  );
};

/**
 * The ContactList component.
 * @param contacts - The list of contacts.
 * @param selectedId - The ID of the currently selected contact.
 * @param onSelect - Callback function triggered when a contact is selected.
 */
const ContactList = ({
  contacts,
  selectedId,
  onSelect
}: ContactListProps) => {
  const handleSelected = (id: number) => {
    onSelect(id);
  };

  return (
    <section>
      <ul className="contacts-list">
        {contacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            <button onClick={() => handleSelected(contact.id)}>
              {contact.id === selectedId
                ? <b>{contact.name}</b>
                : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
