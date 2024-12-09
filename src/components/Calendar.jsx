import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BookingCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <>
      <div className="grid justify-center calendar-container p-10 text-center">
        <h1 className="text-red-800">Pick a Date to Book Your Check-In</h1>
        <Calendar onChange={handleDateChange} value={date} />
        <p className="text-red-700">
          Selected Date: {date.toDateString()}
        </p>{" "}
        {/* Show the selected date */}
        <button className=" rounded-lg font-mono font-semibold duration-200 ease-in-out  hover:bg-gray-600 hover:text-yellow-300 border-slate-800 w-24">
          Book
        </button>
      </div>
    </>
  );
};

export default BookingCalendar;
