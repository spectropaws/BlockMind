import joblib
import numpy as np

base_model_path = "./models/"

model = joblib.load(base_model_path + "fertilizer_mlp_model.pkl")
scaler = joblib.load(base_model_path + "fertilizer_scaler.pkl")
y_label_encoder = joblib.load(base_model_path + "fertilizer_encoder.pkl")


def predict_fertilizer(N, P, K, temperature, humidity, ph, rainfall, crop_label):
    crop_label_encoded = y_label_encoder.transform([crop_label])[0]
    input_data = np.array(
        [[N, P, K, temperature, humidity, ph, rainfall, crop_label_encoded]],
        dtype=float,
    )
    """Predicts the recommended fertilizer for given input features."""
    input_data_scaled = scaler.transform(input_data)  # Scale input
    prediction = np.argmax(
        model.predict(input_data_scaled), axis=1
    )  # Get highest probability class
    return y_label_encoder.inverse_transform(prediction)[0]
