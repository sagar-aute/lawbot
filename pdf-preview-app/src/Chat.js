// Chat.js
import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      // User sends a message
      const userMessage = { text: inputText, sender: 'user' };
      const lawbotResponse = {
        text: getLawbotResponse(inputText),
        sender: 'lawbot',
      };

      setMessages([...messages, userMessage, lawbotResponse]);
      setInputText('');
    }
  };

  const getLawbotResponse = (userInput) => {
    // Simple logic for lawbot response based on user input
    const lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput.includes('legal advice')) {
      return "I'm sorry, I can't provide legal advice. Please consult with a qualified attorney.";
    } else if (lowerCaseInput.includes('lawbot')) {
      return "Yes, I'm Lawbot. How can I assist you today?";
    } else {
      return "I'm Lawbot. I'm here to help with legal information. Ask me anything!";
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <span className={`tag ${message.sender}`}>{message.sender === 'user' ? 'You' : 'Lawbot'}: </span>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
