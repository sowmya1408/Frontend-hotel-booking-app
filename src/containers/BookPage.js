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
  const [bookingStatus, setBookingStatus] = useState(false);
  const [error, setError] = useState('');

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
  console.log(data);
  const handleSubmit = (e) => {  
    e.preventDefault();
    console.log(data);
         fetch("https://hotel-booking-backend-app.herokuapp.com/customers/addcustomer", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          setBookingStatus(true)
    }
   


  return (
    <div>{bookingStatus ? <h1>Thankyou Choosing our Hotel, your booking is successful!!</h1> : <FormComponent
        handleChange={handleChange}
        customerselect={customerselect}
        handleSelect={handleSelect}
        rooms={rooms}
        handleSubmit={handleSubmit}
      /> }
      
    </div>
  );
};

export default BookPage;
