import jwt

# Secret key for JWT token generation
SECRET_KEY = 'my-secret-key'

# Example user credentials (replace with your own user database)
USERS = {
    'user1': 'password1',
    'user2': 'password2'
}

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
