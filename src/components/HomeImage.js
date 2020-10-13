import React from "react";
import Carousel from 'react-bootstrap/Carousel'

const HomeImage = () => {
  return (
<div className="home-image">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="thirdImage.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Hotel Outside View</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="secondImage.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Hotel Inside View</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="firstImage.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
        Hotel Dinning
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 </div>
  );
};

export default HomeImage;
