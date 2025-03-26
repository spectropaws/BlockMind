import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangleIcon, CheckIcon, CircleAlert, TriangleAlert } from "lucide-react";

const CropSelectionTips = () => {
  const tips = [
    {
      icon: CircleAlert,
      title: "Consider Crop Rotation",
      description:
        "Rotate crops each season to maintain soil health and reduce pest problems.",
    },
    {
      icon: TriangleAlert,
      title: "Watch Market Demand",
      description:
        "Research market trends to ensure there will be demand for your crops at harvest time.",
    },
    {
      icon: CheckIcon,
      title: "Start Small",
      description:
        "When trying new crops, start with a small area to test how well they grow in your conditions.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h2 className="text-2xl font-bold text-center mb-6">
        Crop Selection Tips
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {tips.map((tip, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-col items-center justify-center space-x-4 pb-2">
              <span className="mb-4 p-4 bg-primary-foreground text-primary rounded-full">
                {<tip.icon size={25} />}
              </span>
              <CardTitle>{tip.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">{tip.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CropSelectionTips;
