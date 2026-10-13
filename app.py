
from flask import Flask, request, jsonify
from flask_cors import CORS
from nltk.tokenize import TreebankWordTokenizer
import re

app = Flask(__name__)
CORS(app)

tokenizer = TreebankWordTokenizer()

STOP_WORDS = {
    "a", "an", "the", "is", "are", "am", "was", "were",
    "do", "does", "did", "i", "me", "my", "we", "our",
    "you", "your", "it", "this", "that", "to", "of",
    "in", "on", "at", "for", "and", "or", "please",
    "can", "could", "would", "should"
}

@app.route("/")
def home():
    return jsonify({
        "status": "online",
        "message": "FAQ NLP API is running"
    })

@app.route("/preprocess", methods=["POST"])
def preprocess():
    data = request.get_json(silent=True) or {}
    question = data.get("question", "")

    if not isinstance(question, str):
        return jsonify({"error": "Question must be text"}), 400

    question = question.lower()
    question = re.sub(r"[^a-z0-9\s']", " ", question)
    tokens = tokenizer.tokenize(question)

    cleaned_tokens = [
        token for token in tokens
        if token not in STOP_WORDS and token.strip()
    ]

    return jsonify({
        "original": question,
        "tokens": cleaned_tokens,
        "cleaned": " ".join(cleaned_tokens)
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
  
