import { ArrowRight, Sprout } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

const FertilizersRecomendationResponse = () => {
  const { data } = useSelector((state) => state.fertilizersData);
  console.log(data);

  return (
    <div className="md:w-1/2 bg-primary-foreground/50 rounded-2xl p-4">
      {!data ? (
        <div>
          <div>
            <Sprout className="h-16 w-16 text-primary mx-auto mb-4 p-4 bg-primary-foreground rounded-full" />
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No Recommendations Yet
              </h3>
              <p className="text-gray-600">
                Fill out the form with your farm details to get personalized
                Fertilizers recommendations.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-1">
            <p className="text-xl">Response </p>
            <span className="mt-1">
              <ArrowRight size={20} />
            </span>
          </div>
          <div className="p-4">
            <p className="text-2xl md:text-4xl capitalize text-primary my-5">
              {data.Recommended_Fertilizer}
            </p>
          </div>
        </div>
      )}

      {/* <div>
        <PHScaleIndicator />
      </div> */}
    </div>
  );
};

export default FertilizersRecomendationResponse;
