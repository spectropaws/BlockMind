import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Sprout, Leaf } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Sprout,
      title: "Crop Recommendation",
      description:
        "Get AI-powered suggestions on the best crops to plant based on your soil conditions and climate.",
    },
    {
      icon: Leaf,
      title: "Disease Detection",
      description:
        "Upload images of your plants to identify diseases and get treatment recommendations.",
    },
    {
      icon: Leaf,
      title: "Fertilizer Optimization",
      description:
        "Receive custom fertilizer recommendations to maximize yield while minimizing costs.",
    },
  ];

  return (
    <div className="container mx-auto px-8 py-5 bg-gradient-to-b from-white via-primary-foreground/50 to-primary-foreground/80">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Powerful Features
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our AI-powered tools help you make data-driven decisions for better
          farming outcomes.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-primary" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <button className="text-primary/80 hover:text-primary font-medium">
                Learn More &gt;
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
