import { useReducer } from "react";

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

const initialState = {
  selectedId: 0,
  messages: {
    0: "Hello, Taylor",
    1: "Hello, Alice",
    2: "Hello, Bob",
  },
};

const messengerReducer = (state, action) => {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case "edited_message": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.messages,
        },
      };
    }
    case "sent_message": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: "",
        },
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const Messenger = () => {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const messages = state.messages[state.selectedId];
  const contact = contacts.find((c) => c.id === state.selectedId);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        messages={messages}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
};

const ContactList = ({
  contacts,
  selectedId,
  dispatch
}) => {
  const handleChangeSelection = (contactId) => {
    dispatch({
      type: "changed_selection",
      contactId: contactId,
    });
  };

  const handleSelectionClick = (id) => {
    return () => {
      handleChangeSelection(id);
    };
  };

  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button onClick={handleSelectionClick(contact.id)}>
              {selectedId === contact.id
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

const Chat = ({
  contact,
  messages,
  dispatch 
}) => {
  const handleChangeMessage = (e) => {
    dispatch({
      type: "edited_message",
      messages: e.target.value,
    });
  };

  const handleSentMessage = () => {
    alert(`Sending "${messages}" to ${contact.email}`);
    dispatch({
      type: "sent_message",
    });
  };

  return (
    <section className="chat">
      <textarea
        value={messages}
        placeholder={"Chat to " + contact.name}
        onChange={handleChangeMessage}
      />
      <button onClick={handleSentMessage}>
        Send to {contact.email}
      </button>
    </section>
  );
};
