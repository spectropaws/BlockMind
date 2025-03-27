import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="grid md:grid-cols-2 min-h-[50vh] md:min-h-[80vh] items-center p-6">
      <div className="space-y-6 pl-8">
        <span className="text-primary font-medium text-lg">
          Smart Farming Technology
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Grow Smarter,
          <br />
          Harvest Better
        </h1>
        <p className="text-gray-600 max-w-md">
          Revolutionize your farming with AI-powered insights. Get personalized
          recommendations for crops, disease detection, and optimal fertilizer
          use.
        </p>
        <div className="flex space-x-4">
          <Button className="bg-primary hover:bg-green-600">
            <Link to={"/crop-recomendation"}>Get Started</Link>
          </Button>
          <Button
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-50"
          >
            <a href={"#feature"}>Explore Features</a>
          </Button>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center">
        <img
          src="/farmer2.svg"
          alt="Happy farmer in green field"
          className="h-[400px] scale-150"
        />
      </div>
    </div>
  );
};

export default Landing;
