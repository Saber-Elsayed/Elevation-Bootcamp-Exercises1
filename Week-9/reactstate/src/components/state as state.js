import React, { useState } from "react";

function Calendar({ reservations }) {
  const renderReservations = (day) => {
    const filteredReservations = reservations.filter(
      (reservation) => reservation.day === day
    );
    return filteredReservations.map((reservation, index) => (
      <div key={index}>
        {reservation.name} at {reservation.time}
      </div>
    ));
  };

  return (
    <div id="calendar">
      <h2>Calendar</h2>
      <div>
        <h3>Monday</h3>
        {renderReservations("Monday")}
      </div>
      <div>
        <h3>Tuesday</h3>
        {renderReservations("Tuesday")}
      </div>
      <div>
        <h3>Wednesday</h3>
        {renderReservations("Wednesday")}
      </div>
      {/* Add more days as needed */}
    </div>
  );
}

function Register({ reservations }) {
  const renderAllReservations = () => {
    return reservations.map((reservation, index) => (
      <div key={index}>
        {reservation.name} - {reservation.day}, {reservation.time}
      </div>
    ));
  };

  return (
    <div id="register">
      <h2>Register</h2>
      {renderAllReservations()}
    </div>
  );
}

const Apps = () => {
  const [reservations, setReservations] = useState([
    { day: "Monday", time: 2000, name: "Earl" },
    { day: "Monday", time: 1845, name: "Ella" },
    { day: "Tuesday", time: 1930, name: "Linda" },
    { day: "Wednesday", time: 2015, name: "Anni" },
  ]);

  return (
    <div>
      <Calendar reservations={reservations} />
      <Register reservations={reservations} />
    </div>
  );
};

export default Apps;
