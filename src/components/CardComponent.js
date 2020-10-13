import React from "react";

function CardComponent({ rooms }) {
  return (
    <div className="room-wrapper">
      {rooms
        ? rooms.map((room) => (
            <ul key={room._id} className="room_container">
              <li className="room-image">
                {room.roomtype === "LUXURY DOUBLE ROOM" ? (
                  <img src="/luxury-double.jpg" alt="luxury-double" />
                ) : null}
                {room.roomtype === "DELUX DOUBLE ROOM" ? (
                  <img src="/deluxe-double.jpg" alt="deluxe-double" />
                ) : null}
                {room.roomtype === "LUXURY SINGLE ROOM" ? (
                  <img src="/luxury-single.jpg" alt="luxury-single" />
                ) : null}
                {room.roomtype === "DELUX SINGLE ROOM" ? (
                  <img src="/deluxe-single.jpg" alt="deluxe-double" />
                ) : null}
              </li>
              <li>{room.roomtype.toUpperCase()}</li>
              <li>Beds: {room.beds}</li>
              <li>Price: {room.price} DKK</li>
            </ul>
          ))
        : null}
    </div>
  );
}

export default CardComponent;
