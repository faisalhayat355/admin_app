import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);


const CalendarView = ({users}:any) => {
  const [events, setEvents] = useState([]);
  const calendarReports = users.map((users : any) => {
    return {
      title: users.name,
      start: new Date(users.createdAt),
      end: new Date(users.updatedAt),
    }
  });
  useEffect(() => {
    setEvents(calendarReports);
  }, []);
  return (
    <Grid pt={1} container height={"75vh"}>
    <Grid item xs={12} px={2.5}>
      <Calendar events={events}
        startAccessor="start" endAccessor="end" defaultDate={moment().toDate()} localizer={localizer}/>
    </Grid>
  </Grid>
  )
}

export default CalendarView
