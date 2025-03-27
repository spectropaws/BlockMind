import numpy as np 
import pandas as pd
import joblib
from sklearn.preprocessing import StandardScaler, LabelEncoder


df = pd.read_csv('Fertilizer_Recommendation.csv')

label_encoder = LabelEncoder()
df['label'] = label_encoder.fit_transform(df['label'])

X = df.drop(columns=["Recommended_Fertilizer"])
y = df["Recommended_Fertilizer"]
y_label_encoder = LabelEncoder()
y = y_label_encoder.fit_transform(y)

# Normalize Features
scaler = StandardScaler()
X = scaler.fit_transform(X)  # Fit & transform data

# Save the trained scaler
joblib.dump(scaler, "scaler.pkl")

print("Scaler saved successfully as scaler.pkl!")
