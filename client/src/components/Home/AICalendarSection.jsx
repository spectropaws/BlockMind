import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const AICalendarSection = () => {
  return (
    <div className="flex mt-16 flex-col-reverse md:flex-row">
      <div className="container mx-auto px-10 md:pr-8 md:pl-20 py-16 md:w-1/2">
        <span className="flex items-center w-max gap-2 bg-primary-foreground/50 text-primary px-3 py-1 rounded-full text-sm mb-4">
          <Calendar size={18} />
          Smart Planning
        </span>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          AI-Generated Weekly Calendar
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl">
          Let our AI create optimized schedules for watering, fertilizing, and
          harvesting. Never miss the perfect time to care for your crops.
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Personalized crop schedules",
            "Weather-adaptive planning",
            "Timely notifications",
            "Growth stage tracking",
          ].map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-primary text-lg">•</span>
              {feature}
            </li>
          ))}
        </ul>
        <Button className="bg-primary hover:bg-primary/80" asChild>
          <Link to={"/calendar"}>Try Calendar &gt;</Link>
        </Button>
      </div>
      <div className="md:w-1/2 px-5 md:mr-5">
        <img src="/calendar.png" alt="calendar" />
      </div>
    </div>
  );
};

export default AICalendarSection;
