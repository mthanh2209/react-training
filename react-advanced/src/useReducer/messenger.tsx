import { useReducer } from "react";

interface ContactProps {
  id: number;
  name: string;
  email: string;
}

interface ContactListProps {
  contacts: ContactProps[];
  selectedId: number;
  dispatch: React.Dispatch<MessengerAction>;
}

interface ChatProps {
  contact: ContactProps | undefined;
  messages: string;
  dispatch: React.Dispatch<MessengerAction>;
}

interface MessengerState {
  selectedId: number;
  messages: { [key: number]: string };
}

interface ChangeSelectionAction {
  type: "changed_selection";
  contactId: number;
}

interface EditMessageAction {
  type: "edited_message";
  messages: string;
}

interface SendMessageAction {
  type: "sent_message";
}

type MessengerAction = ChangeSelectionAction | EditMessageAction | SendMessageAction;

const contacts: ContactProps[] = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

const initialState: MessengerState = {
  selectedId: 0,
  messages: {
    0: "Hello, Taylor",
    1: "Hello, Alice",
    2: "Hello, Bob",
  },
};

/**
 * The reducer function for handling Messenger actions and updating the state.
 * @param state - The current state.
 * @param action - The action to be performed.
 * @returns The new state after applying the action.
 */
const messengerReducer = (
  state: MessengerState,
  action: MessengerAction
): MessengerState => {
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
      throw Error("Unknown action: " + (action as any).type);
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

/**
 * The ContactList component.
 * @param contacts - The list of contacts.
 * @param selectedId - The ID of the currently selected contact.
 * @param dispatch - The dispatch function for updating the state.
 */
const ContactList = ({
  contacts,
  selectedId,
  dispatch
}: ContactListProps) => {
  const handleChangeSelection = (contactId) => {
    dispatch({
      type: "changed_selection",
      contactId: contactId,
    });
  };

  const handleSelectionClick = (id: number) => {
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

/**
 * The Chat component.
 * @param contact - The currently selected contact.
 * @param messages - The messages for the selected contact.
 * @param dispatch - The dispatch function for updating the state.
 */
const Chat = ({
  contact,
  messages,
  dispatch
}: ChatProps) => {
  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
