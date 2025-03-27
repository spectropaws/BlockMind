import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useGetEvents } from "@/hooks/use-calendar";
import { fertilizersSchema } from "@/zod-schemas/fertilizersSchema";
import { useDispatch, useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { setFormData } from "@/Redux/Slices/formDataSlice";
import { Loader } from "lucide-react";

const CalendarForm = () => {
  const mutation = useGetEvents();
  const { data } = useSelector((state) => state.formData);
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
      name: "temperature",
    },
    {
      label: "Humidity",
      id: "humidity",
      name: "humidity",
    },
    {
      label: "PH",
      id: "ph",
      name: "ph",
    },
    {
      label: "RainFall",
      id: "n",
      name: "rainfall",
    },
  ];
  const crops = [
    "rice",
    "maize",
    "chickpea",
    "kidneybeans",
    "pigeonpeas",
    "mothbeans",
    "mungbean",
    "blackgram",
    "lentil",
    "pomegranate",
    "banana",
    "mango",
    "grapes",
    "watermelon",
    "muskmelon",
    "apple",
    "orange",
    "papaya",
    "coconut",
    "cotton",
    "jute",
    "coffee",
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      crop_label: "",
      ...data,
    },
    resolver: zodResolver(fertilizersSchema),
  });

  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    mutation.mutate(data);
    // const { crop_label, ...saveData } = data;
    // dispatch(setFormData(saveData));
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"outline"} className={"mb-4"}>
          Add Event
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Event</DialogTitle>
          <DialogDescription>Add new Events to the calendar</DialogDescription>
        </DialogHeader>
        <div>
          <form id="crop-prediction-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-primary-foreground/20 rounded-2xl h-full border border-primary-foreground">
              <div className="px-5 py-5 h-[50vh] overflow-y-auto">
                {formFields.map((field, index) => (
                  <div key={index} className="mt-7">
                    <Label htmlFor={field.id} className={"mb-2"}>
                      {field.label}
                    </Label>
                    <Input
                      {...register(field.name)}
                      type={"text"}
                      id={field.id}
                      className={
                        "border-primary-foreground focus-visible:ring-primary-foreground/50 focus-within:border-primary-foreground focus-within:outline-primary-foreground"
                      }
                    />
                    {errors[field.name] && (
                      <p className="text-red-500">
                        {errors[field.name].message}
                      </p>
                    )}
                  </div>
                ))}
                <div className="mt-7">
                  <Label htmlFor="crop" className={"mb-2"}>
                    Crop
                  </Label>
                  <select
                    {...register("crop_label")}
                    id="crop"
                    className={
                      " border-2 rounded-md border-primary-foreground focus-visible:ring-primary-foreground/50 focus-within:border-primary-foreground focus-within:outline-primary-foreground w-full h-9 px-2"
                    }
                  >
                    {crops.map((crop) => (
                      <option value={crop}>{crop}</option>
                    ))}
                  </select>
                </div>
                <div className="w-full mx-auto mt-5">
                  <Button className={"w-full"} disabled={mutation.isPending}>
                    {mutation.isPending ? (
                      <Loader className="animate-spin" />
                    ) : (
                      "Predict"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarForm;
