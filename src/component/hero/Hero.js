import React from 'react';
import { Fade } from 'react-reveal';
import { Container } from 'react-bootstrap';
import portrait from '../../images/carl-port.jpg'

const Hero = () => {
return (
  <section id="hero-section" className="Jumbotron">
    <Container>
      <Fade left duration={1000} delay={500} distance='30px'>
        <h1 className="hero-title">
          Carlena Dowden Photography
        </h1>
      </Fade>
      <br/>
      <Fade right duration={1000} delay={1000} distance='30px'>
        <img className="hero-image" src={portrait} alt={"Carlena Ivings"} width='650px'/>
      </Fade>

    </Container>
  </section>
)
}

export default Hero;