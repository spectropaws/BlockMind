import numpy as np 
import pandas as pd
import joblib
from sklearn.preprocessing import StandardScaler, LabelEncoder


df = pd.read_csv('Fertilizer_Recommendation.csv')

label_encoder = LabelEncoder()
df['label'] = label_encoder.fit_transform(df['label'])

joblib.dump(label_encoder, "label_encoder.pkl")
print("Label Encoder for crops saved successfully as label_encoder.pkl!")

X = df.drop(columns=["Recommended_Fertilizer"])
y = df["Recommended_Fertilizer"]
y_label_encoder = LabelEncoder()
y = y_label_encoder.fit_transform(y)

# Normalize Features
scaler = StandardScaler()
X = scaler.fit_transform(X)  # Fit & transform data

# Save the trained scaler
# joblib.dump(scaler, "scaler.pkl")
joblib.dump(y_label_encoder, "fertilizer_encoder.pkl")

print("Scaler saved successfully as scaler.pkl!")
