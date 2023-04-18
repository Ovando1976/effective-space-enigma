// Use the Web Audio API to record and play back audio
const audioContext = new AudioContext();
const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
const mediaSource = audioContext.createMediaStreamSource(mediaStream);
const recorder = new MediaRecorder(mediaSource);

let chunks = [];
recorder.ondataavailable = event => chunks.push(event.data);
recorder.onstop = async () => {
  const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
  const audioUrl = URL.createObjectURL(blob);
  const audioElement = new Audio(audioUrl);
  audioElement.play();
};

recorder.start();
setTimeout(() => recorder.stop(), 5000);
