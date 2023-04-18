import React from 'react';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./assets/images/chatbot-icon.png" alt="ChatBot" />
        <h1>RastaGPT</h1>
      </header>
      <ChatBot />
    </div>
  );
}


const form = document.querySelector('form');
const conversation = document.querySelector('.conversation');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const messageInput = document.querySelector('#message');
  const message = messageInput.value;

  // Add user message to conversation display
  addMessageToConversation(message, 'user');

  // Send user message to backend API
  const response = await fetch('/api/chatbot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  });

  if (response.ok) {
    const data = await response.json();
    const botMessage = data.message;

    // Add bot message to conversation display
    addMessageToConversation(botMessage, 'bot');
  }
});

function addMessageToConversation(message, sender) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add(sender);

  const messageText = document.createElement('p');
  messageText.textContent = message;

  messageContainer.appendChild(messageText);
  conversation.appendChild(messageContainer);

  // Scroll to bottom of conversation display
  conversation.scrollTop = conversation.scrollHeight;
}



export default App;
