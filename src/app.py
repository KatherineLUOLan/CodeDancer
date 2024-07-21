from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import logging
from flask_socketio import SocketIO, emit

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

API_KEY = 'sk-DzTd3jH1Z0iOvu4yEaB10a063e134cDdA43b2b431c993555'
API_ENDPOINT = 'https://apikeyplus.com/v1/chat/completions'

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger()

@app.before_request
def log_request_info():
    logger.debug(f'Request Path: {request.path}')
    logger.debug(f'Request Headers: {request.headers}')
    logger.debug(f'Request Body: {request.get_data()}')

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    logger.debug(f"Received data: {data}")
    message = data.get('message')
    if not message:
        return jsonify({'error': 'No message provided'}), 400
    headers = {
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json'
    }
    payload = {
        'model': 'gpt-3.5-turbo',
        'messages': [{'role': 'user', 'content': message}]
    }
    try:
        response = requests.post(API_ENDPOINT, headers=headers, json=payload, timeout=10)
        response.raise_for_status()
        reply = response.json()['choices'][0]['message']['content']
        socketio.emit('response', {'reply': reply})
        return jsonify({'reply': reply})
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500

@socketio.on('connect')
def handle_connect():
    print('Client connected')
    emit('response', {'data': 'Connected'})

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

if __name__ == '__main__':
    socketio.run(app, host='127.0.0.1', port=5050, debug=True)
