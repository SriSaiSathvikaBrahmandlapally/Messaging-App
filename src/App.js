import React, { useContext } from "react";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import { ChatContext } from "./context/ChatContext";

const App = () => {
  const { activeChatId } = useContext(ChatContext);

  return (
    <div className="app-container">
      <ChatList />
      {activeChatId ? (
        <ChatWindow />
      ) : (
        <div className="no-chat">Select a chat to start messaging</div>
      )}
    </div>
  );
};

export default App;