import BestTipsForUpload from "@/components/Disease Detection/BestTipsForUpload";
import ImageUpload from "@/components/Disease Detection/ImageUpload";
import Footer from "@/components/Footer";
import { Leaf } from "lucide-react";
import React from "react";

const DiseaseDetection = () => {
  return (
    <div className=" mt-14 md:mt-10">
      <div className="text-center py-8 bg-gradient-to-b from-primary-foreground/40 to-white">
        <div className="inline-flex items-center bg-primary-foreground/50 px-3 py-1 rounded-full mb-4">
          <Leaf className="w-4 h-4 mr-2 text-primary" />
          <span className="text-primary text-sm">AI Analysis</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Plant Disease Detection</h1>
        <p className="text-muted-foreground md:w-1/2 mx-auto">
          Upload images of your plants to identify diseases and get treatment
          recommendations. Our AI can detect common crop diseases with high
          accuracy.
        </p>
      </div>
      <ImageUpload />
      <div className="px-2">
        <BestTipsForUpload />
      </div>
      <Footer />
    </div>
  );
};

export default DiseaseDetection;
