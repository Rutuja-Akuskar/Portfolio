import React, { useEffect } from "react";
import { speakSelectedText } from "../utils/textToSpeech";

export default function SelectionTTS() {
  useEffect(() => {
    const handleMouseUp = () => {
      speakSelectedText();
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return null; // invisible component
}
