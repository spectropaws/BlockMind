import joblib
import numpy as np


base_model_path = "./models/"

# Load trained model and label encoder
model = joblib.load(base_model_path + "xgboost_crop_recommendation.pkl")
crop_encoder = joblib.load(base_model_path + "crop_encoder.pkl")  # Label encoder for crop names


# Create numpy array with the correct format
def predict_crop(N, P, K, temperature, humidity, ph, rainfall):
    input_data = np.array(
        [[N, P, K, temperature, humidity, ph, rainfall]], dtype=float
    )

    # Predict using the model
    prediction = model.predict(input_data)

    # Convert numeric prediction back to crop name
    recommended_crop = crop_encoder.inverse_transform(prediction)[0]
    return recommended_crop
