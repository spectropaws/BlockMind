import { ArrowRight, Sprout } from "lucide-react";
import React from "react";
import PHScaleIndicator from "./PHScaleIndicator ";
import { useSelector } from "react-redux";

const images = [
  "apple.webp",
  "banana.webp",
  "blackgram.jpeg",
  "chickpea.jpg",
  "coconut.jpeg",
  "coffee.jpg",
  "cotton.webp",
  "grapes.webp",
  "jute.webp",
  "kidneybeans.jpg",
  "lentil.jpeg",
  "maize.webp",
  "mango.jpeg",
  "mothbeans.webp",
  "mungbean.png",
  "muskmelon.webp",
  "orange.webp",
  "papaya.jpg",
  "pigeonpeas.jpeg",
  "pomegranate.jpg",
  "rice.jpg",
];

const ImageMatcher = ({ name }) => {
  // Find the matching image by looking for a filename that starts with the backend value
  const matchedImage = images.find((img) =>
    img.toLowerCase().startsWith(name.toLowerCase() + ".")
  );

  // If no image is found, you can return null or a default image
  if (!matchedImage) {
    return <div>No image found</div>;
  }

  return (
    <img
      src={`/${matchedImage}`}
      alt={name}
      className="w-full max-w-xs object-cover"
    />
  );
};

const CropRecomendationResponse = () => {
  const { data } = useSelector((state) => state.recomendationData);
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
                crop recommendations.
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
              {data.Recommended_Crop}
            </p>
            <div className="w-max rounded-2xl overflow-hidden">
              <ImageMatcher name={data.Recommended_Crop} />
            </div>
          </div>
        </div>
      )}

      {/* <div>
        <PHScaleIndicator />
      </div> */}
    </div>
  );
};

export default CropRecomendationResponse;
