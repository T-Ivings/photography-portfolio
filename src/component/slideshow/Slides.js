import React from "react";
import { Container } from "react-bootstrap";

import ImageGallery from 'react-image-gallery';
import './_Slides.scss';


import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";
import img7 from "../../images/img7.jpg";
import img9 from "../../images/img9.jpg";
import img10 from "../../images/img10.jpg";
import img11 from "../../images/img11.jpg";


const imagesForCarousel = [
  {original: img1, thumbnail: img1},
  {original: img2, thumbnail: img2},
  {original: img3, thumbnail: img3},
  {original: img4, thumbnail: img4},
  {original: img5, thumbnail: img5},
  {original: img6, thumbnail: img6},
  {original: img7, thumbnail: img7},
  {original: img9, thumbnail: img9},
  {original: img10, thumbnail: img10},
  {original: img11, thumbnail: img11},
]

const Slides = () => {


  return (
    <section id="hero">
      <Container className="carousel-container">
        <ImageGallery items={imagesForCarousel} showFullscreenButton={false} showPlayButton={false} autoPlay={true} slideInterval={7500} style={{width: "50%"}}/>
      </Container>
    </section>
  )
};

export default Slides;