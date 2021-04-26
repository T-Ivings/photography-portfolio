import { React, useState, useEffect } from "react";
import { Carousel, Container } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import SingleImg from './Img';
import './_Slides.scss';

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

const imagesforCarousel = [img1, img2, img3, img4, img5, img6, img7, img9, img10, img11]

const Slides = () => {

  const [scrollImage, setScrollImage] = useState([imagesforCarousel[0]]);



  const imageCarousel = imagesforCarousel.map((image, index) => {
    return( 
    <Carousel.Item key={index}>
      <img
      style={{borderRadius: "10px"}}
      width={"100%"}
      src={image}
      alt={`Carousel photo ${{index}}` }
      />
    </Carousel.Item>
    )
  })

  const imageSlideshow = imagesforCarousel.map((image, index) => {
    
    console.log(index)
    return (
      <SingleImg image={image} key={index} id={index} />
    )
  })

  return (
  <section id="hero">
    <Container className="carousel-container">
      <Carousel className="carousel-image"
      style={{width: "85%", height: "85%"}} 
      nextIcon={<BsArrowRight size={"4em"}/>}
      prevIcon={<BsArrowLeft size={"4em"} />}
      indicators={false} interval={3000} wrap fade>
        {imageCarousel}
      </Carousel> 
    </Container><br/>
    <Container className="carousel-slideshow">
      {imageSlideshow}
    </Container>
  </section>
  )
};

export default Slides;