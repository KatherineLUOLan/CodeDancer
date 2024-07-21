from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import logging


app = Flask(__name__)
CORS(app)


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

    prompt="这是一段代码，需要解析里面是否出现if、for、while、try、break、continue这几个关键词，直接输出关键词的先后顺序，不要出现中文，不要出现除关键词之外的词汇。"

    payload = {
        'model': 'gpt-3.5-turbo',
        'messages': [{'role': 'user', 'content': prompt}]
    }
    try:
        response = requests.post(API_ENDPOINT, headers=headers, json=payload)
        response.raise_for_status()
        reply = response.json()['choices'][0]['message']['content']
        file_path = 'C:/Users/cmaca/kkkk/Assets/LineWaves/Scripts/action.txt'
        
        with open(file_path,'w') as file:
            file.write(reply)
        logging.debug(f"API response: {reply}")
        return jsonify({'reply': reply})
    except requests.exceptions.RequestException as e:
        logging.error(f"RequestException: {str(e)}")
        return jsonify({'error': str(e)}), 500
    except Exception as e:
        logging.error(f"Unexpected error: {str(e)}")
        return jsonify({'error': 'An unexpected error occurred'}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5500, use_reloader=False)
