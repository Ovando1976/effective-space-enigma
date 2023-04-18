// Import the Web Speech API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Create a new instance of the speech recognition object
const recognition = new SpeechRecognition();

// Handle recognition events
recognition.onresult = event => {
  const transcript = event.results[0][0].transcript;
  console.log(transcript);
};

// Start the speech recognition process
recognition.start();
