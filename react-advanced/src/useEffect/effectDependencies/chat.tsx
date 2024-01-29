import { useEffect, useState } from "react";

interface RoomProps {
  options: {
    serverUrl: string;
    roomId: string;
  };
}

interface ConnectionProps {
  serverUrl: string;
  roomId: string;
}

export const ChatRoom = () => {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState("general");
  const [serverUrl, setServerUrl] = useState("http://localhost:1234");

  const options = {
    serverUrl: serverUrl,
    roomId: roomId,
  };

  const handleDark = () => {
    setIsDark(!isDark);
  };

  const handleChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServerUrl(e.target.value);
  };

  const handleChangeRoom = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoomId(e.target.value);
  };

  return (
    <div className={isDark ? "dark" : "light"}>
      <button onClick={handleDark}>Toggle theme</button>
      <label>
        Server URL: <input value={serverUrl} onChange={handleChangeUrl} />
      </label>
      <label>
        Choose the chat room:
        <select value={roomId} onChange={handleChangeRoom}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <Room options={options} />
    </div>
  );
};

const Room = ({ options }: RoomProps) => {
  const { serverUrl, roomId } = options;
  useEffect(() => {
    const connection = createConnection({
      serverUrl: serverUrl,
      roomId: roomId,
    });
    connection.connect();
    return () => connection.disconnect();
  }, [serverUrl, roomId]);

  return <h1>Welcome to the {options.roomId} room!</h1>;
};

const createConnection = ({ serverUrl, roomId }: ConnectionProps) => {
  if (typeof serverUrl !== "string") {
    throw Error("Expected serverUrl to be a string. Received: " + serverUrl);
  }
  if (typeof roomId !== "string") {
    throw Error("Expected serverUrl to be a string. Received: " + roomId);
  }

  return {
    connect() {
      console.log('Connecting to "' + roomId + '" room at' + serverUrl);
    },
    disconnect() {
      console.log('Disconnecting to "' + roomId + '" room at' + serverUrl);
    },
  };
};
