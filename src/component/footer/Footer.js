import React from 'react';
import {Card, Container, Button, Row, Col} from 'react-bootstrap'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.scss';

const Footer = () => {
  return (
    <section id="prefooter">
    <Container className='d-flex justify-content-center'>
      <Card style={{width: '60%',}}>
        <Card.Body>
          <Card.Title style={{fontSize: '24px'}}><b>Photography made easy</b></Card.Title>
          <Card.Text className='d-flex justify-content-start'>
            Like what you're seeing? Check out my packages offered, or send me an inquery and get started right away!
          </Card.Text>
          <Row className='d-flex flex-row-reverse'>
            <Button className='footer-button btn-light btn-outline-success' onClick={(e) => {
              e.preventDefault();
              window.open(`mailto:carlenaivingsphotography@gmail.com?subject=Subject&body=Body%20goes%20here%20<br/>${'\n'}does%20this%20work%20too`)}}
              >Book Me!</Button>
            <Button className='footer-button btn-light btn-outline-success'>Packages</Button>
          </Row>
        </Card.Body>
      </Card>
    </Container> <br/> <br/>
    <section style={{backgroundColor: '#F5F5F5'}} id='footer'>
    <Col className='page-footer'>
      <Row>
        ALL CONTENT COPYRIGHT © 2021 CARLENA IVINGS PHOTOGRAPHY
      </Row>
      <Row>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          window.open('https://www.facebook.com/carlena.dowden')}}><FacebookIcon htmlColor="black"/></a>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          window.open('https://www.instagram.com/carlena.ivings.photography/')}}><InstagramIcon htmlColor="black"/></a>  
      </Row>
    </Col>
    </section>
    </section>
  )
}
export default Footer;