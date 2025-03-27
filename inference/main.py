import crop_recommendation
import fertilizer_recommendation
from flask import Flask, jsonify, request
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app, supports_credentials=True, resources={r"/*": {"origins": "*"}})


@app.route("/predict_fertilizer", methods=["POST"])
def predict_fertilizer():
    try:
        # Get JSON data from request
        data = request.get_json()

        # Extract input values
        N = data["N"]
        P = data["P"]
        K = data["K"]
        temperature = data["temperature"]
        humidity = data["humidity"]
        ph = data["ph"]
        rainfall = data["rainfall"]
        crop_label = data["crop_label"]

        # Encode crop label

        # Predict fertilizer
        recommended_fertilizer = fertilizer_recommendation.predict_fertilizer(
            N, P, K, temperature, humidity, ph, rainfall, crop_label
        )

        # Return response
        return jsonify({"Recommended_Fertilizer": recommended_fertilizer})

    except Exception as e:
        return jsonify({"error": str(e)})


@app.route("/predict_crop", methods=["POST"])
def predict_crop():
    try:
        # Get JSON data from the request
        data = request.get_json()

        # Extract input features
        N = data["N"]
        P = data["P"]
        K = data["K"]
        temperature = data["temperature"]
        humidity = data["humidity"]
        ph = data["ph"]
        rainfall = data["rainfall"]

        recommended_crop = crop_recommendation.predict_crop(
            N, P, K, temperature, humidity, ph, rainfall
        )
        # Return response
        return jsonify({"Recommended_Crop": recommended_crop})

    except Exception as e:
        return jsonify({"error": str(e)})


# Run Flask app
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)  # Running on port 5001
