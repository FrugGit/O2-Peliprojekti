from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)
SCORES_FILE = os.path.join(os.path.dirname(__file__), "jsondata", "scores.json")


def load_scores():
    with open(SCORES_FILE, "r") as file:
        return json.load(file)


@app.route("/")
def home():
    return "Space invaders server is running!"


@app.route("/api/test")
def test_api():
    return jsonify({"message": "Hello from Flask!", "status": "success"})


@app.route("/api/scores", methods=["GET"])
def get_scores():
    scores = load_scores()
    return jsonify(scores)


@app.route("/api/scores", methods=["POST"])
def add_score():
    data = request.get_json()

    name = data.get("name")
    score = data.get("score")

    scores = load_scores()

    scores.append({"name": name, "score": score})

    with open(SCORES_FILE, "w") as file:
        json.dump(scores, file, indent=4)

    return jsonify({"message": "Score saved successfully!"}), 201


if __name__ == "__main__":
    app.run(debug=True)
