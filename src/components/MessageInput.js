import React, { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";

const MessageInput = () => {
  const [text, setText] = useState("");
  const { activeChatId, addMessage } = useContext(ChatContext);

  const handleSend = () => {
    if (!text.trim()) return;

    const message = {
      sender: "You",
      content: text,
      timestamp: Date.now()
    };

    addMessage(activeChatId, message);
    setText("");
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;