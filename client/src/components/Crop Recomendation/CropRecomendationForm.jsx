import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { recomendationSchema } from "@/zod-schemas/recomendationSchema";

const CropRecomendationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(recomendationSchema),
  });
  const formFields = [
    {
      label: "N",
      id: "n",
      name: "N",
    },
    {
      label: "P",
      id: "p",
      name: "P",
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="md:w-1/2">
      <form id="crop-prediction-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-primary-foreground/20 rounded-2xl h-full border border-primary-foreground">
          <div className="px-5 py-5">
            {formFields.map((field, index) => (
              <div key={index} className="mt-7">
                <Label htmlFor={field.id} className={"mb-2"}>
                  {field.label}
                </Label>
                <Input
                  {...register(field.name)}
                  type={"number"}
                  id={field.id}
                  className={
                    "border-primary-foreground focus-visible:ring-primary-foreground/50 focus-within:border-primary-foreground focus-within:outline-primary-foreground"
                  }
                />
                {errors[field.name] && (
                  <p className="text-red-500">{errors[field.name].message}</p>
                )}
              </div>
            ))}
            <div className="w-full mx-auto mt-5">
              <Button className={"w-full"}>Predict</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CropRecomendationForm;
