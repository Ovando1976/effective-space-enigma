import React, { useState } from 'react';

function ChatBot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessage = async () => {
    const newMessages = [...messages];
    newMessages.push({ sender: 'user', text: input });
    setMessages(newMessages);

    const response = await fetch(`https://api.duckduckgo.com/?q=${input}&format=json`);
    const data = await response.json();
    const searchResult = data.AbstractText;

    const botMessages = [...messages];
    botMessages.push({ sender: 'bot', text: searchResult });
    setMessages(botMessages);
  }

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index} className={message.sender}>
            {message.text}
          </li>
        ))}
      </ul>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleMessage}>Send</button>
    </div>
  );
}

export default ChatBot;
