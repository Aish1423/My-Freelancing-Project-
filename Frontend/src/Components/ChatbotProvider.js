import React from 'react';
import Chatbot from './Chatbot';

const ChatbotProvider = ({ children }) => {
  return (
    <>
      {children}
      <Chatbot />
    </>
  );
};

export default ChatbotProvider; 