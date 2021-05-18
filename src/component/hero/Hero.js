import React from 'react';
import { Fade } from 'react-reveal';
import { Container, Row } from 'react-bootstrap';
import portrait from '../../images/seller-pic1.jpg'
import './Hero.scss';

const Hero = () => {
  const myStyles = {
    'bottomRight': {
      alignSelf: 'flex-end',
      fontSize: '48px',
    },
    'topRight': {
      alignSelf: 'flex-start',
      fontSize: '48px'
    },
 
  }
return (
  <section id="hero-section" >
      <Container className='d-flex flex-column'>
        <Fade left duration={2000}>
          <div style={myStyles.topRight}>Capturing your moments</div>
        </Fade>
        <img src={portrait} width='80%' alt=''/>

      <Fade right duration={2000} delay={1500}>
        <div style={myStyles.bottomRight}>One frame at a time</div>
      </Fade>

      </Container>
  </section>
)
}

export default Hero;