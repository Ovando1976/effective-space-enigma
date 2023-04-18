import React, { useState, useEffect } from 'react';
import { Card, Divider, Button } from 'antd';
import axios from 'axios';

const MessagingPage = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    axios.get('/api/conversations').then((response) => {
      setConversations(response.data);
    });
  }, []);

  const handleNewConversation = () => {
    // Handle new conversation logic
  };

  return (
    <div>
      <Button onClick={handleNewConversation}>New Conversation</Button>
      <Divider />
      {conversations.map((conversation) => (
        <Card key={conversation.id}>
          <h3>{conversation.name}</h3>
          <p>{conversation.lastMessage}</p>
        </Card>
      ))}
    </div>
  );
};

export default MessagingPage;
``
