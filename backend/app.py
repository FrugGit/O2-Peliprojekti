from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "Space invaders server is running!"


@app.route("/api/test")
def test_api():
    return jsonify({"message": "Hello from Flask!", "status": "success"})


if __name__ == "__main__":
    app.run(debug=True)

print("App.py is running")
