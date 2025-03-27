import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addCalendarSchema } from "@/zod-schemas/addCalendarSchema";

const AddCalendar = () => {
  const inputField = [
    {
      label: "Title",
      id: "title",
      name: "title",
      type: "text",
    },
    {
      label: "Start",
      id: "start",
      name: "start",
      type: "datetime-local",
    },
    {
      label: "End",
      id: "end",
      name: "end",
      type: "datetime-local",
    },
    {
      label: "Location",
      id: "location",
      name: "location",
      type: "text",
    },
    {
      label: "Description",
      id: "description",
      name: "description",
      type: "text",
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addCalendarSchema),
  });
  const onSubmit = (data) => {
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
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputField.map((field, index) => (
            <div className="mb-5">
              <Label className={"mb-2"}>{field.label}</Label>
              <Input
                {...register(field.name)}
                type={field.type}
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
          {/* <div className="mb-5">
            <Label className={"mb-2"}>Title</Label>
            <Input
              {...register("title")}
              type="text"
              id="title"
              className={
                "border-primary-foreground focus-visible:ring-primary-foreground/50 focus-within:border-primary-foreground focus-within:outline-primary-foreground"
              }
            />
          </div>
          <div className="mb-5">
            <Label className={"mb-2"}>Description</Label>
            <Input
              {...register("description")}
              type="text"
              id="description"
              className={
                "border-primary-foreground focus-visible:ring-primary-foreground/50 focus-within:border-primary-foreground focus-within:outline-primary-foreground"
              }
            />
          </div>
          <div className="mb-5">
            <Label className={"mb-2"}>Location</Label>
            <Input
              {...register("location")}
              type="text"
              id="location"
              className={
                "border-primary-foreground focus-visible:ring-primary-foreground/50 focus-within:border-primary-foreground focus-within:outline-primary-foreground"
              }
            />
          </div>
          <div className="mb-5">
            <Label className={"mb-2"}>Start</Label>
            <Input
              {...register("start")}
              type="datetime-local"
              id="start"
              className={
                "border-primary-foreground focus-visible:ring-primary-foreground/50 focus-within:border-primary-foreground focus-within:outline-primary-foreground"
              }
            />
          </div>
          <div className="mb-5">
            <Label className={"mb-2"}>End</Label>
            <Input
              {...register("end")}
              type="datetime-local"
              id="end"
              className={
                "border-primary-foreground focus-visible:ring-primary-foreground/50 focus-within:border-primary-foreground focus-within:outline-primary-foreground"
              }
            />
          </div> */}
          <div className="flex justify-end">
            <Button>Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCalendar;
