import React, { useState } from "react";

const ChatInput: React.FC<{ onSend: (text: string) => void }> = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="flex border-t p-2">
      <input
        type="text"
        className="flex-1 rounded-xl border px-2"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend} className="ml-2 px-4 bg-blue-600 text-white rounded-xl">
        Send
      </button>
    </div>
  );
};

export default ChatInput;
