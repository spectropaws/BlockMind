import CropRecomendationForm from "@/components/Crop Recomendation/CropRecomendationForm";
import CropRecomendationResponse from "@/components/Crop Recomendation/CropRecomendationResponse";
import CropSelectionTips from "@/components/Crop Recomendation/CropSelectionTips";
import Footer from "@/components/Footer";
import { Sprout } from "lucide-react";
import React from "react";

const CropRecomendation = () => {
  return (
    <div className="p-4 bg-gradient-to-b from-primary-foreground/20 to-white mt-14 md:mt-10">
      <div className="text-center mb-12">
        <span className="flex items-center justify-center w-max mx-auto bg-primary-foreground/50 text-primary px-3 py-1 rounded-full text-sm mb-4">
          <Sprout /> AI Recommendation
        </span>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Crop Recommendation
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get personalized crop suggestions based on your soil conditions and
          local climate. Our AI analyzes multiple factors to recommend the best
          crops for your farm.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4 pt-8 px-2">
        <CropRecomendationForm />
        <CropRecomendationResponse />
      </div>
      <CropSelectionTips />
      <Footer />
    </div>
  );
};

export default CropRecomendation;
