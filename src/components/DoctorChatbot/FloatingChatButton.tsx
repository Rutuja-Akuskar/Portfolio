import React from "react";
import { motion } from "framer-motion";

const FloatingChatButton: React.FC<{ openChat: () => void }> = ({
  openChat,
}) => (
  <motion.button
    onClick={openChat}
    className="fixed bottom-5 right-5 w-16 h-16 rounded-full bg-blue-600 text-white shadow-xl flex items-center justify-center text-2xl z-[99999]"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    animate={{ y: [0, -5, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
  >
    💬
  </motion.button>
);

export default FloatingChatButton;
