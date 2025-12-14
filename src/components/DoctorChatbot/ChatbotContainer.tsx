import React, { useState } from "react";
import DoctorAvatarLottie from "./DoctorAvatarLottie";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";
import { faq } from "./faqData";

// Define language type
type Language = "en" | "hi" | "mr";

// Define message type
interface Message {
  sender: "user" | "bot";
  text: string;
}

const ChatbotContainer: React.FC<{ isOpen: boolean; closeChat: () => void }> = ({
  isOpen,
  closeChat,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [doctorState, setDoctorState] = useState<"idle" | "talking">("idle");
  const [language, setLanguage] = useState<Language>("en");

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = language === "en" ? "en-US" : language === "hi" ? "hi-IN" : "mr-IN";
      utter.onstart = () => setDoctorState("talking");
      utter.onend = () => setDoctorState("idle");
      window.speechSynthesis.speak(utter);
    }
  };

  const handleSend = (text: string) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setDoctorState("idle");

    setTimeout(() => {
      const langFaq = faq[language] as Record<string, string>; // TypeScript-safe
      const key = language === "en" ? text.toLowerCase() : text;

      // ✅ Access dynamically with safe typing
      const reply = langFaq[key] ?? "I am here to help! Please consult the doctor.";

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      speakText(reply);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-5 right-5 w-96 bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden z-50">
      <div className="flex p-2 border-b items-center justify-between">
        <h3 className="font-bold">Aarogya Assistant</h3>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          className="border rounded px-2"
        >
          <option value="en">EN</option>
          <option value="hi">HI</option>
          <option value="mr">MR</option>
        </select>
        <button onClick={closeChat} className="text-gray-500 font-bold">
          ✖
        </button>
      </div>

      <div className="flex">
        <div className="w-40">
          <DoctorAvatarLottie state={doctorState} />
        </div>
        <div className="flex-1 h-96 overflow-y-auto p-2">
          {messages.map((msg, i) => (
            <MessageBubble key={i} sender={msg.sender} text={msg.text} />
          ))}
        </div>
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatbotContainer;
