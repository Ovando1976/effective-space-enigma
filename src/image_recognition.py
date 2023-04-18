import tensorflow as tf
import numpy as np
import cv2

# Load the pre-trained TensorFlow model
model = tf.keras.models.load_model('model.h5')

# Load the image
img = cv2.imread('image.jpg')

# Preprocess the image
img = cv2.resize(img, (224, 224))
img = np.expand_dims(img, axis=0)
img = img / 255.0

# Make a prediction using the model
pred = model.predict(img)

# Print the predicted label
label = np.argmax(pred)
print(f'Predicted label: {label}')
