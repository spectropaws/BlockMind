import FertilizerRecomendationForm from "@/components/Fertilizers Recomendation/FertilizerRecomendationForm";
import FertilizersRecomendationResponse from "@/components/Fertilizers Recomendation/FertilizersRecomendationResponse";
import Footer from "@/components/Footer";
import { Sprout } from "lucide-react";
import React from "react";

const FertilizerRecomendation = () => {
  return (
    <div className="p-4 bg-gradient-to-b from-primary-foreground/20 to-white mt-14 md:mt-10">
      <div className="text-center mb-12">
        <span className="flex items-center justify-center w-max mx-auto bg-primary-foreground/50 text-primary px-3 py-1 rounded-full text-sm mb-4">
          <Sprout /> AI Recommendation
        </span>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Fertilizers Recommendation
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get personalized crop suggestions based on your soil conditions and
          local climate. Our AI analyzes multiple factors to recommend the best
          Fertilizers for your Crops.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4 pt-8 px-2">
        <FertilizerRecomendationForm />
        <FertilizersRecomendationResponse />
      </div>
      {/* <CropSelectionTips /> */}
      <Footer />
    </div>
  );
};

export default FertilizerRecomendation;
