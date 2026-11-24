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

    if not data or "name" not in data or "score" not in data:
        return jsonify({"error": "Name and score are required"}), 400

    name = data.get("name")
    if not isinstance(name, str) or not name.strip():
        return jsonify({"error": "Name cannot be empty"}), 400
    score = data.get("score")
    if not isinstance(score, int) or score < 0:
        return jsonify({"error": "Score must be a non-negative integer"}), 400

    scores = load_scores()

    scores.append({"name": name, "score": score})

    scores.sort(key=lambda x: x["score"], reverse=True)

    with open(SCORES_FILE, "w") as file:
        json.dump(scores, file, indent=4)

    return jsonify({"message": "Score saved successfully!"}), 201


if __name__ == "__main__":
    app.run(debug=True)
