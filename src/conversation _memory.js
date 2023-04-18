// Initialize Firebase database
const db = firebase.database();

// Store a conversation message in the database
function storeMessage(userId, message) {
  const timestamp = Date.now();
  db.ref(`conversations/${userId}/${timestamp}`).set({
    message: message,
    timestamp: timestamp
  });
}

// Retrieve a user's conversation history from the database
function getConversation(userId) {
  return db.ref(`conversations/${userId}`).
