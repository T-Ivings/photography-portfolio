import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import photographer from '../../images/carl-port-look.jpg'

const Intro = () => {
  return (
    <section id="intro">
      <Container>
        <Row>
          <Col>
          <div class="item">
            <div class="polaroid">
            <img src={photographer} width={"500px"}/>
            </div>
            </div>
          </Col>
          <Col>
            Why hello there, my name is carl. And really, quite the darl-ing
          </Col>
        </Row>
      </Container>
    </section>
  )

}

export default Intro;