import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import "./_Seller.scss";

const Seller = () => {
  return (
    <Container id="seller">
      <Divider className='top-divider' variant="middle" />
        <Container className="seller-text">
          <Row>
            Some text telling potential clients what you do
          </Row><br/><br/>
          <Row>
            What you specialize in
          </Row><br/><br/>
          <Row>
            IDK write something here to we have a blank space
          </Row>
        </Container>
      <Divider className="bottom-divider" variant="middle" />
    </Container>
  )
}
export default Seller;