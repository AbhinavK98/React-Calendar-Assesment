import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";
import './App.css';
// import 'react-calendar/dist/Calendar.css';

const ReactCalendar = () => {
  
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <>
    <h1 className="heading">Calendar Assessment</h1>
    <div className="calendar" >
      <Calendar showWeekNumbers onChange={onChange} value={date}  />
      {console.log(date)}
      </div>
      <h3 className="date">Your Selected Date is: {date.toString()}</h3>
    </>
  );
};

render(<ReactCalendar />, document.querySelector("#root"));
