import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CropRecomendationForm = () => {
  const formFields = [
    {
      label: "N",
      id: "n",
      name: "N",
    },
    {
      label: "P",
      id: "p",
      name: "K",
    },
    {
      label: "K",
      id: "k",
      name: "K",
    },
    {
      label: "Temperarture",
      id: "temperature",
      name: "Temperature",
    },
    {
      label: "Humidity",
      id: "humidity",
      name: "Humidity",
    },
    {
      label: "PH",
      id: "ph",
      name: "PH",
    },
    {
      label: "RainFall",
      id: "n",
      name: "RainFall",
    },
  ];
  return (
    <form action="">
      <div className="pt-8 px-5 bg-primary-foreground/20 rounded-2xl w-1/2 h-[90vh]">
        {formFields.map((field, index) => (
          <div key={index} className="mt-7">
            <Label htmlFor={field.id} className={"mb-2"}>
              {field.label}
            </Label>
            <Input
              type={"text"}
              id={field.id}
              className={
                "border-primary-foreground focus-visible:ring-primary-foreground/50 focus-within:border-primary-foreground focus-within:outline-primary-foreground"
              }
            />
          </div>
        ))}
        <Button>Predict</Button>
      </div>
    </form>
  );
};

export default CropRecomendationForm;
