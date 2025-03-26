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

const AddCalendar = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"outline"} className={"mb-4"}>Add Event</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Event</DialogTitle>
          <DialogDescription>Add new Events to the calendar</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <Label className={"mb-2"}>Title</Label>
            <Input {...register("title")} type="text" id="title" />
          </div>
          <div className="mb-5">
            <Label className={"mb-2"}>Description</Label>
            <Input {...register("description")} type="text" id="description" />
          </div>
          <div className="mb-5">
            <Label className={"mb-2"}>Location</Label>
            <Input {...register("location")} type="text" id="location" />
          </div>
          <div className="mb-5">
            <Label className={"mb-2"}>Start</Label>
            <Input {...register("start")} type="datetime-local" id="start" />
          </div>
          <div className="mb-5">
            <Label className={"mb-2"}>End</Label>
            <Input {...register("end")} type="datetime-local" id="end" />
          </div>
          <Button>Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCalendar;
