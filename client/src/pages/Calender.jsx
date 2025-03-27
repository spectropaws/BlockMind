import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Clock, MapPin, FileText, Loader } from "lucide-react";
import CalendarForm from "@/components/Calendar/CalendarForm.jsx";
import "../Styles/calendar.css";
import { useSelector } from "react-redux";

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
  const [events, setEvents] = useState([]);
  const { data } = useSelector((state) => state.eventData);

  // const { data, isLoading, isFetched } = useGetEvents();

  useEffect(() => {
    const modified = data.map((event) => ({
      color: event.color,
      title: event.process,
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
    }));
    console.log(modified);
    setEvents(modified);
  }, [data]);

  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   if (mutation.isFetched) {
  //     setEvents(data?.data);
  //     console.log(data.data);
  //   }
  // }, [mutation.isFetched, mutation.isPending]);

  // const handleSelectEvent = (event) => {
  //   setSelectedEvent(event);
  // };

  // const handleCloseEventDialog = () => {
  //   setSelectedEvent(null);
  // };

  return (
    <div className="h-full mt-14 md:mt-10  p-4 bg-[#e0f2df50]">
      {/* <AddCalendar /> */}
      <CalendarForm />
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
