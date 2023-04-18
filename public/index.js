import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chatbotController = require('./src/controllers/chatbotController');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/chatbot', chatbotController.handleChatbotRequest);

app.listen(3000, () => console.log('Server is running on port 3000.'));
