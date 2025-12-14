export const speakSelectedText = () => {
  const selectedText = window.getSelection().toString().trim();

  if (!selectedText) return; // nothing selected

  window.speechSynthesis.cancel(); // stop previous speech

  const utter = new SpeechSynthesisUtterance(selectedText);
  utter.lang = "en-US";
  utter.rate = 1;
  utter.pitch = 1;
  utter.volume = 1;

  window.speechSynthesis.speak(utter);
};
