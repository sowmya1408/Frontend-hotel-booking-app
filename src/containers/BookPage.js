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
  const [error, setError] = useState("");

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postBookingInfo = await fetch(
        "https://hotel-booking-backend-app.herokuapp.com/customers/addcustomer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responseBookingInfo = await postBookingInfo.status;
      setBookingStatus(true);
      return responseBookingInfo === 400
        ? setError("Please check if you have added all inputs correctly")
        : null;
    } catch (err) {
      return err;
    }
  };

  return (
    <div>
      {bookingStatus ? (
        <h1>
          {error
            ? error
            : "Thankyou Choosing our Hotel, your booking is successful!!"}
        </h1>
      ) : (
        <FormComponent
          handleChange={handleChange}
          customerselect={customerselect}
          handleSelect={handleSelect}
          rooms={rooms}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default BookPage;
