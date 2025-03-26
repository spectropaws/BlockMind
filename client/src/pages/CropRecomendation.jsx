import CropRecomendationForm from "@/components/Crop Recomendation/CropRecomendationForm";
import React from "react";

const CropRecomendation = () => {
  return (
    <div className="p-4">
      <h2 className="mt-5 text-3xl text-primary font-medium">
        Get Your Personalize Crop Recomendation
      </h2>
      <div>
        <CropRecomendationForm />
      </div>
    </div>
  );
};

export default CropRecomendation;
