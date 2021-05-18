import { React, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Tilt from 'react-tilt'

export default function PhotoRow(props)  {



const styles = {
  'intro-text': {
    padding: '1em',
  }
}
     
      
  if(props.id === 1 ) {

    return(
      <Row>
        <Col className='text-center'>
          <Card>
            <Card.Text style={styles['intro-text']}>{props.text}</Card.Text>
          </Card>
        </Col>
        <Col>
        <Tilt options={{
          reverse: false,
          max: 8,
          perspective: 1000,
          scale: 1,
          speed: 300,
          transition: true,
          axis: null,
          reset: true,
          easing: 'cubic-bezier(.03,.98,.52,.99)',
          }}> 
           <img  src={props.picture} width={"550px"} alt="" className="photo-row"/>
        </Tilt>

      </Col>
    </Row>
    )

    } else {
    
    return(
      <Row>
        <Col>
        <Tilt options={{
        reverse: false,
        max: 8,
        perspective: 1000,
        scale: 1,
        speed: 300,
        transition: true,
        axis: null,
        reset: true,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        }}>
        <img  src={props.picture} width={"550px"} alt="" className="photo-row"/>
        </Tilt>
        </Col>
        <Col className="text-center">
        <Card>
        <Card.Text style={styles['intro-text']}>{props.text}</Card.Text>
          </Card>
      </Col>
    </Row>
    )

  }
}

