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
  // const [events, setEvents] = useState([
  //   {
  //     id: 1,
  //     title: "Meeting with Client",
  //     start: moment("2025-03-27T10:00:00-07:00").toDate(),
  //     end: moment("2025-03-27T11:00:00-07:00").toDate(),
  //     description: "Discuss project details and upcoming milestones",
  //     location: "Conference Room A",
  //     color:"#f0ffff"
  //   },
  //   {
  //     id: 2,
  //     title: "Team Standup",
  //     start: moment("2025-03-12T09:00:00-07:00").toDate(),
  //     end: moment("2025-03-12T09:30:00-07:00").toDate(),
  //     description: "Daily team synchronization and progress update",
  //     location: "Zoom Meeting",
  //     color: "#fff0f5"
  //   },
  //   {
  //     id: 3,
  //     title: "Team Standup",
  //     start: moment("2025-03-20T09:00:00-07:00").toDate(),
  //     end: moment("2025-03-20T09:30:00-07:00").toDate(),
  //     description: "Daily team synchronization and progress update",
  //     location: "Zoom Meeting",
  //     color: "#c5cae9"
  //   },
  //   {
  //     id: 4,
  //     title: "Team Standup",
  //     start: moment("2025-03-25T09:00:00-07:00").toDate(),
  //     end: moment("2025-03-25T09:30:00-07:00").toDate(),
  //     description: "Daily team synchronization and progress update",
  //     location: "Zoom Meeting",
  //     color: "#c9e4ca"
  //   },
  //   {
  //     id: 5,
  //     title: "Team Standup",
  //     start: moment("2025-03-08T09:00:00-07:00").toDate(),
  //     end: moment("2025-03-08T09:30:00-07:00").toDate(),
  //     description: "Daily team synchronization and progress update",
  //     location: "Zoom Meeting",
  //     color: "#baffc9"
  //   },
  // ]);

  // const [selectedEvent, setSelectedEvent] = useState(null);
  const [events] = useState(null);

  const { data, isLoading, isFetched } = useGetEvents();

  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());


  useEffect(() => {}, [isFetched, isLoading])

  // const handleSelectEvent = (event) => {
  //   setSelectedEvent(event);
  // };

  // const handleCloseEventDialog = () => {
  //   setSelectedEvent(null);
  // };

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
        // onSelectEvent={handleSelectEvent}
        date={date}
        onNavigate={setDate}
        view={view}
        onView={setView}
        views={[Views.MONTH, Views.WEEK, Views.DAY]}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.color,
            borderRadius: "5px",
            opacity: 0.8,
            color: "black",
            border: "none",
          },
        })}
      />
    </div>
  );
};

export default MyCalendar;
