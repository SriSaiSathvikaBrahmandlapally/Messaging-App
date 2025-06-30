import React, { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { FaTrash } from "react-icons/fa";

const ChatList = () => {
  const { chats, activeChatId, setActiveChatId, addChat, deleteChat } = useContext(ChatContext);
  const [showForm, setShowForm] = useState(false);
  const [chatName, setChatName] = useState("");
  const [chatPhone, setChatPhone] = useState("");

  const handleAddChat = () => {
    const isTenDigitPhone = /^\d{10}$/.test(chatPhone);
    if (!isTenDigitPhone) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    if (chatName.trim() && chatPhone.trim()) {
      addChat(chatName, chatPhone);
      setChatName("");
      setChatPhone("");
      setShowForm(false);
    }
  };

  return (
    <div className="chat-list">
      <button onClick={() => setShowForm(!showForm)}>+ Add Chat</button>

      {showForm && (
        <div
          className="chat-form-overlay"
          onClick={() => setShowForm(false)}
        >
          <div
            className="chat-form-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              placeholder="Name"
              value={chatName}
              onChange={(e) => setChatName(e.target.value)}
            />
            <input
              placeholder="Mobile No."
              value={chatPhone}
              onChange={(e) => setChatPhone(e.target.value)}
              maxLength={10}
            />
            <button onClick={handleAddChat}>Start</button>
          </div>
        </div>
      )}

      {chats.map(chat => (
        <div
          key={chat.id}
          className={`chat-list-item ${chat.id === activeChatId ? "active" : ""}`}
          onClick={() => setActiveChatId(chat.id)}
        >
          <div className="chat-name">
            <strong>{chat.title}</strong>
            <small>{chat.messages[chat.messages.length - 1]?.content}</small>
          </div>
          <FaTrash className="delete-icon" onClick={(e) => { e.stopPropagation(); deleteChat(chat.id); }} />
        </div>
      ))}
    </div>
  );
};

export default ChatList;