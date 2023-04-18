import speech_recognition as sr

# Initialize the speech recognizer
r = sr.Recognizer()

# Use the default microphone as the audio source
with sr.Microphone() as source:
    # Adjust the noise threshold
    r.adjust_for_ambient_noise(source)
    # Listen for speech
    audio = r.listen(source)

# Use Google Speech Recognition to transcribe the speech
try:
    text = r.recognize_google(audio)
    print(f'Recognized speech: {text}')
except sr.UnknownValueError:
    print('Speech recognition could not understand audio')
except sr.RequestError as e:
    print(f'Speech recognition error: {e}')
