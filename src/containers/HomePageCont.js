import React, { useState, useEffect } from "react";
import CardComponent from "../components/CardComponent";
import HomeImage from "../components/HomeImage";

const HomePageCont = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const fetchrooms = await fetch("https://hotel-booking-backend-app.herokuapp.com/rooms");
        const fetchroomsInJson = await fetchrooms.json();
        setRooms(fetchroomsInJson);
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      <HomeImage />
      <CardComponent rooms={rooms} />
    </div>
  );
};

export default HomePageCont;
