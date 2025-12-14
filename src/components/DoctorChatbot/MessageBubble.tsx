import React from "react";

const MessageBubble: React.FC<{ sender: string; text: string }> = ({ sender, text }) => {
  const isBot = sender === "bot";
  return (
    <div className={`my-2 flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`px-3 py-2 rounded-2xl max-w-xs ${
          isBot ? "bg-blue-100 text-black" : "bg-blue-600 text-white"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default MessageBubble;
