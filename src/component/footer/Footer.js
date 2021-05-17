import React from 'react';
import {Card, Container, Button, Row} from 'react-bootstrap'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.scss';

const Footer = () => {
  return (
    <section id="prefooter">
    <Container className='d-flex justify-content-center'>
      <Card style={{width: '40%',}}>
        <Card.Body>
          <Card.Text>
            Like what you're seeing? Check out my packages offered, or send me an inquery and get started right away!
          </Card.Text>
          <Row className='d-flex flex-row-reverse'>
            <Button className='footer-button btn-light btn-outline-success'>Book Me!</Button>
            <Button className='footer-button btn-light btn-outline-success'>Packages</Button>
          </Row>
        </Card.Body>
      </Card>
    </Container>
    <section style={{backgroundColor: 'black'}} id='footer'>
      <Row className='page-footer'>
        <span>©Carlena Ivings Photography</span>
        <span>
          <a href='#'><FacebookIcon/></a>
          <a href='#'><InstagramIcon/></a>  
        </span>
      </Row>
      
    </section>
    </section>
  )
}
export default Footer;