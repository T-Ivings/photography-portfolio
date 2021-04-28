import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import photographer from '../../images/carl-port.jpg';

const Intro = () => {
  
  return (
    <section id="intro">
      <Container>
        <Row>
          <Col>
          <div className="item">
            <div className="polaroid">
           <Fade left>
            <img src={photographer} width={"550px"}/>
            </Fade>
            </div>
            </div>
          </Col>
          <Col>
            <Fade right>
            <div>      
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero augue, malesuada non semper nec, tristique ullamcorper lectus. Aenean ante ipsum, pulvinar quis condimentum vitae, porta in nulla. Phasellus id faucibus ipsum, nec ullamcorper mauris. Ut a ante ac tortor placerat consequat vitae vitae nunc. Sed lorem nunc, accumsan vel convallis vel, porta quis ligula. Nunc ultrices est a elit eleifend aliquam. Curabitur gravida neque eros, vitae mattis dui iaculis lobortis. Sed et vulputate est. Praesent eu efficitur augue, id viverra dolor. Aliquam metus justo, finibus ac nisl ut, finibus pretium mauris. Proin convallis eros vel nibh lobortis mattis. Vestibulum blandit aliquam arcu vel consectetur. Nulla nibh mi, dignissim eleifend viverra sed, venenatis id mauris. In a nunc lorem.
            </div> <br/>
            <div>
              Vestibulum lobortis ornare ultricies. Nunc varius, metus sed tristique ullamcorper, erat lorem blandit dui, et aliquet ante justo tempus erat. Nam libero elit, faucibus in gravida eu, pellentesque et massa. Suspendisse venenatis ex a rhoncus consequat. Vivamus vitae urna tempus, rutrum sapien id, tempor ante. Ut tellus dui, efficitur a faucibus non, lobortis eu velit. Nulla mollis porttitor nulla eu ultrices. Cras eget odio malesuada, laoreet odio eleifend, bibendum odio. Proin sit amet est tincidunt, suscipit velit nec, sodales urna. Donec faucibus consequat consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </div> 
            </Fade> <br/>
          </Col>
        </Row>
      </Container>
    </section>
  )

}

export default Intro;