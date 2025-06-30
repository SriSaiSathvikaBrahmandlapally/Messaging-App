import React from "react";
import { motion } from "framer-motion";

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

const MessageBubble = ({ sender, content, timestamp }) => {
  const isYou = sender.toLowerCase() === "you";
  return (
    <motion.div
      className={`message-bubble ${isYou ? "right" : "left"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="content-with-time">
        <span className="content">{content}</span>
        <span className="timestamp">{formatTime(timestamp)}</span>
      </div>
    </motion.div>
  );
};

export default MessageBubble;