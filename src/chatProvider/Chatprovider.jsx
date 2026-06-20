import { useState } from "react";
import { Chatcontext } from "../context/chatContext";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = async (msg) => {
    setMessages((prev) => [
      ...prev,
      { text: msg, type: "question" },
    ]);

    try {
      const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",

        contents: [
          {
            role: "user",
            parts: [{ text: msg + " Reply in 2-3 short lines only." }]
          },
        ],
      });

      const aiText =
        response?.candidates?.[0]?.content?.parts?.[0]?.text;

      setMessages((prev) => [
        ...prev,
        { text: aiText || "No response", type: "answer" },
      ]);
    } catch (error) {
  console.log("GEMINI ERROR:", error);
  setMessages((prev) => [
    ...prev,
    { text: "Error getting response", type: "answer" },
  ]);
}
  };

  return (
    <Chatcontext.Provider value={{ messages, addMessage }}>
      {children}
    </Chatcontext.Provider>
  );
};