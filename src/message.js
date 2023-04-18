import React from 'react';

const Message = ({ text, sender }) => {
  return (
    <div className={sender === 'bot' ? 'bot-message' : 'user-message'}>
      {text}
    </div>
  );
};

export default Message;