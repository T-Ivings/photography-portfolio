import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";


const Slides = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className=" w-50"
          src={img1}
          alt="First slide"
         
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-50"
          src={img2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-50"
          src={img3}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-50"
          src={img4}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  )
};

export default Slides;