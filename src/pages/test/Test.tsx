import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface IMessages {
  role: "user" | "assistant";
  content: string;
}

const Test: React.FC = () => {
  const [messageList, setMessageList] = useState<IMessages[]>([]);
  const [text, setText] = useState<string>("");

  // Function to add a new message
  const prompt = async () => {
    if (text.trim() !== "") {
      setMessageList((prev) => [...prev, { role: "user", content: text }]);
      setText("");
    }
  };

  // Scroll to the bottom of the chat container
  const scrollToBottom = () => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  // Call scrollToBottom whenever messageList changes
  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div
        id="chat-container"
        style={{ height: "30vh", overflowY: "auto", border: "1px solid #ccc" }}
      >
        <div>
          {messageList.map((message, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: "10px" }}
            >
              <div
                style={{
                  padding: "10px",
                  background: message.role === "user" ? "#007bff" : "#333",
                  borderRadius: "8px",
                  color: "white",
                  maxWidth: "500px",
                  marginLeft: message.role === "user" ? "auto" : "0",
                }}
              >
                {message.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <input
        type="text"
        placeholder="Type a message..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyDown={(e) => e.key === "Enter" && prompt()}
        style={{ width: "80%", padding: "10px", marginRight: "10px" }}
      />
      <button onClick={prompt} style={{ padding: "10px 20px" }}>
        Send
      </button>
    </div>
  );
};

export default Test;
