// src/components/ChatWindow.js
import React, { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../context/ChatContext";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

const ChatWindow = () => {
  const { chats, activeChatId } = useContext(ChatContext);
  const chat = chats.find((c) => c.id === activeChatId);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat?.messages]);

  if (!chat) return null;

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-header-title">{chat.title}</div>
        <div className="chat-header-sub">{chat.phone}</div>
      </div>

      <div className="messages">
        {chat.messages.map((msg, idx) => (
          <MessageBubble key={idx} {...msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatWindow;