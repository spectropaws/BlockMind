import { ArrowRight, Sprout } from "lucide-react";
import React from "react";
import PHScaleIndicator from "./PHScaleIndicator ";

const CropRecomendationResponse = () => {
  return (
    <div className="md:w-1/2 bg-primary-foreground/50 rounded-2xl p-4">
      {/* <div>
        <div>
          <Sprout className="h-16 w-16 text-primary mx-auto mb-4 p-4 bg-primary-foreground rounded-full" />
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No Recommendations Yet
            </h3>
            <p className="text-gray-600">
              Fill out the form with your farm details to get personalized crop
              recommendations.
            </p>
          </div>
        </div>
      </div> */}
      <div className="flex items-center gap-1">
        <p className="text-xl">Response </p>
        <span className="mt-1">
          <ArrowRight size={20} />
        </span>
      </div>
      <div>
        <PHScaleIndicator />
      </div>
    </div>
  );
};

export default CropRecomendationResponse;
