import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, FileText } from "lucide-react";
import { useGetEvents } from "@/hooks/use-calendar";
import { toast } from "react-toastify";
import AddCalendar from "@/components/Calendar/AddCalendar";
import "../Styles/calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Meeting with Client",
      start: moment("2025-03-27T10:00:00-07:00").toDate(),
      end: moment("2025-03-27T11:00:00-07:00").toDate(),
      description: "Discuss project details and upcoming milestones",
      location: "Conference Room A",
    },
    {
      id: 2,
      title: "Team Standup",
      start: moment("2025-03-12T09:00:00-07:00").toDate(),
      end: moment("2025-03-12T09:30:00-07:00").toDate(),
      description: "Daily team synchronization and progress update",
      location: "Zoom Meeting",
    },
    {
      id: 3,
      title: "Team Standup",
      start: moment("2025-03-20T09:00:00-07:00").toDate(),
      end: moment("2025-03-20T09:30:00-07:00").toDate(),
      description: "Daily team synchronization and progress update",
      location: "Zoom Meeting",
    },
    {
      id: 4,
      title: "Team Standup",
      start: moment("2025-03-25T09:00:00-07:00").toDate(),
      end: moment("2025-03-25T09:30:00-07:00").toDate(),
      description: "Daily team synchronization and progress update",
      location: "Zoom Meeting",
    },
    {
      id: 5,
      title: "Team Standup",
      start: moment("2025-03-08T09:00:00-07:00").toDate(),
      end: moment("2025-03-08T09:30:00-07:00").toDate(),
      description: "Daily team synchronization and progress update",
      location: "Zoom Meeting",
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseEventDialog = () => {
    setSelectedEvent(null);
  };

  const renderEventDialog = () => {
    if (!selectedEvent) return null;

    return (
      <Dialog open={!!selectedEvent} onOpenChange={handleCloseEventDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              {selectedEvent.title}
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">
                  {moment(selectedEvent.start).format("MMMM Do, YYYY")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {moment(selectedEvent.start).format("h:mm A")} -{" "}
                  {moment(selectedEvent.end).format("h:mm A")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium">
                {selectedEvent.location || "No location specified"}
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FileText className="h-5 w-5 text-primary mt-1" />
              <p className="text-sm text-muted-foreground">
                {selectedEvent.description}
              </p>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={handleCloseEventDialog}>
              Close
            </Button>
            <Button>Edit Event</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="h-full mt-14 md:mt-10  p-4 bg-[#e0f2df50]">
      <AddCalendar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "93%" }}
        selectable={true}
        onSelectEvent={handleSelectEvent}
        date={date}
        onNavigate={setDate}
        view={view}
        onView={setView}
        views={[Views.MONTH, Views.WEEK, Views.DAY]}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: "#2ab86d",
            borderRadius: "5px",
            opacity: 0.8,
            color: "white",
            border: "none",
          },
        })}
      />

      {renderEventDialog()}
    </div>
  );
};

export default MyCalendar;
