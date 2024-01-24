import { useEffect, useState } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";
import { ToastPosition, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const serverUrl = "https://localhost:1234";

interface ConnectRoomProps {
  roomId: string;
  theme: string;
}

interface Connection {
  connect: () => void;
  on: (event: string, callback: () => void) => void;
  disconnect: () => void;
}

export const ChatRoom = () => {
  const [roomId, setRoomId] = useState<string>("general");
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoomId(e.target.value);
  };

  const handleDark = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDark(e.target.checked);
  };

  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={handleChange}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <label>
        <input type="checkbox" checked={isDark} onChange={handleDark} />
        Use dark theme
      </label>
      <hr />
      <ConnectRoom roomId={roomId} theme={isDark ? "dark" : "light"} />
    </>
  );
};

const ConnectRoom = ({ roomId, theme }: ConnectRoomProps) => {
  const onConnected = useEffectEvent((connectedRoomId: string) => {
    showNotification("Welcome to " + connectedRoomId, theme);
  });

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on("connected", () => {
      setTimeout(() => {
        onConnected();
      }, 2000);
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
};

const createConnection = (serverUrl: string, roomId: string): Connection => {
  let connectedCallback: (() => void) | undefined;
  let timeout: NodeJS.Timeout;

  const connect = () => {
    timeout = setTimeout(() => {
      if (connectedCallback) {
        connectedCallback();
      }
    }, 100);
  };

  const on = (event: string, callback: () => void) => {
    if (connectedCallback) {
      throw Error("Cannot add the handler twice");
    }
    if (event !== "connected") {
      throw Error('Only "connected" event is supported.');
    }
    connectedCallback = callback;
  };

  const disconnect = () => {
    clearTimeout(timeout);
  };

  return { connect, on, disconnect };
};

const showNotification = (message: string, theme: string) => {
  console.log("Notification:", message, theme);
  toast(message, {
    position: "top-right" as ToastPosition,
    autoClose: 2000,
    closeButton: false,
    hideProgressBar: false,
    style: {
      background: theme === "dark" ? "black" : "white",
      color: theme === "dark" ? "white" : "black",
    },
  });
};
