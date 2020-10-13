import React, { useState } from "react";
import FormComponent from "../components/FormComponent";

const BookPage = () => {
  const [customerselect, setCustomerSelect] = useState({
    name: "",
    email: "",
    phonenumber: "",
    passportnumber: "",
    bookeddate: "",
  });
  const [rooms, setRooms] = useState([]);

  const handleChange = (e) => {
    setCustomerSelect({
      ...customerselect,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelect = (e) => {
    setRooms([...rooms, e.target.value]);
  };
  const data = {
    customerselect,
    rooms,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://hotel-booking-backend-app.herokuapp.com/customers/addcustomer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div>
      <FormComponent
        handleChange={handleChange}
        customerselect={customerselect}
        handleSelect={handleSelect}
        rooms={rooms}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default BookPage;
