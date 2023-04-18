import React, { useState } from 'react';
import './ChatBot.css';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      // Add the user message to the messages array
      setMessages([...messages, { sender: 'user', text: inputValue }]);
      // Call the AI agent to generate a response
      // and add it to the messages array
      // ...
      setInputValue('');
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="ChatBot">
      <div className="ChatBot-header">
        <img src="/assets/images/chatbot-icon.png" alt="ChatBot icon" />
        <h1>RastaGPT</h1>
      </div>
      <div className="ChatBot-messages">
        {/* Render the messages */}
        {messages.map((message, index) => (
          <div key={index} className={`ChatBot-${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Type your message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatBot;
