import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";
import img7 from "../../images/img7.jpg";
import img8 from "../../images/img8.jpg";
import img9 from "../../images/img9.jpg";
import img10 from "../../images/img10.jpg";
import img11 from "../../images/img11.jpg";

const Slides = () => {

  const imagesforCarousel = [img1, img2, img3, img4, img5, img6, img7, img9, img10, img11]

  const imageCarousel = imagesforCarousel.map((image, index) => {
    return( 
    <Carousel.Item key={index}>
      <img
      style={{borderRadius: "10px"}}
      className="w-100"
      src={image}
      alt={`Carousel photo ${{index}}` }
      />
    </Carousel.Item>
    )
  })

  const imageSlideshow = imagesforCarousel.map((image, index) => {

    return (
      <img src={image} index={index} width={"10%"}/>
    )
  })

  return (
    <Container className="carousel">
      <Carousel className="w-90 carousel-image" 
      nextIcon={<BsArrowRight size={"4em"}/>}
      prevIcon={<BsArrowLeft size={"4em"} />}
      indicators={false} interval={7500} wrap fade>
        {imageCarousel}
      </Carousel> <br/> <br/>
      <div className="carousel-slideshow">
        {imageSlideshow}
      </div> <br/>
    </Container>
  )
};

export default Slides;