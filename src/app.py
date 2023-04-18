from flask import Flask, request, jsonify
from flask_cors import CORS
import jwt

app = Flask(__name__)
CORS(app)

# Secret key for JWT token generation
SECRET_KEY = 'my-secret-key'

# Example user database (replace with your own database)
USERS = {
    'user1': 'password1',
    'user2': 'password2'
}

# API route for handling incoming messages
@app.route('/api/messages', methods=['POST'])
def handle_message():
    # Get the JWT token from the request headers
    token = request.headers.get('Authorization')
    
    # Verify the token
    if not verify_token(token):
        return jsonify({'message': 'Unauthorized access'}), 401
    
    # Get the message from the request body
    message = request.json['message']
    
    # TODO: Implement logic for handling the message and generating a response
    response = generate_response(message)
    
    # Return the response to the frontend
    return jsonify({'response': response})

# API route for user authentication
@app.route('/api/auth', methods=['POST'])
def authenticate_user():
    # Get the user credentials from the request body
    username = request.json['username']
    password = request.json['password']
    
    # Check if user credentials are valid
    if not check_credentials(username, password):
        return jsonify({'message': 'Invalid username or password'}), 401
    
    # Generate a JWT token for the user
    token = generate_token(username)
    
    # Return a success message and token to the frontend
    return jsonify({'message': 'Authentication successful', 'token': token})

# Function to check if user credentials are valid
def check_credentials(username, password):
    if username in USERS and USERS[username] == password:
        return True
    else:
        return False

# Function to generate a JWT token for user authentication
def generate_token(username):
    token = jwt.encode({'username': username}, SECRET_KEY, algorithm='HS256')
    return token.decode('UTF-8')

# Function to verify a JWT token
def verify_token(token):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        return True
    except jwt.exceptions.InvalidTokenError:
        return False

if __name__ == '__main__':
    app.run(debug=True)

