import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([
    {
      id: "1",
      title: "Sathvika",
      phone: "9346033778",
      messages: [
        {
          sender: "Sathvika",
          content: "Hey, are you there?",
          timestamp: new Date().setHours(9, 15, 0),
        },
        {
          sender: "You",
          content: "Yes yes, whats up ?",
          timestamp: new Date().setHours(9, 17, 0),
        },
        {
          sender: "Sathvika",
          content: "Nothing, just checking in",
          timestamp: new Date().setHours(9, 30, 0),
        },
      ],
    },
    {
      id: "2",
      title: "Anupama",
      phone: "9658744558",
      messages: [
        {
          sender: "You",
          content: "Good Morning Anupama",
          timestamp: new Date().setHours(8, 45, 0),
        },
        {
          sender: "Anupama",
          content: "Good morning! All set for the day?",
          timestamp: new Date().setHours(8, 46, 0),
        },
        {
          sender: "You",
          content: "Yes, yes how about you?",
          timestamp: new Date().setHours(8, 47, 0),
        }
      ],
    }]);
  const [activeChatId, setActiveChatId] = useState(null);

  const addMessage = (chatId, message) => {
    setChats(prev =>
      prev.map(chat =>
        chat.id === chatId
          ? { ...chat, messages: [...chat.messages, message] }
          : chat
      )
    );
  };

  const addChat = (chatName, chatPhone) => {
    const newChat = {
      id: Date.now().toString(),
      title: chatName,
      phone: chatPhone,
      messages: [],
    };
    setChats(prev => [...prev, newChat]);
    setActiveChatId(newChat.id);
  }

  const deleteChat = (chatId) => {
    setChats(prev => prev.filter(chat => chat.id !== chatId));
    if (activeChatId === chatId) setActiveChatId(null);
  };

  return (
    <ChatContext.Provider
      value={{ chats, activeChatId, setActiveChatId, addMessage, addChat, deleteChat }}
    >
      {children}
    </ChatContext.Provider>
  );
};
