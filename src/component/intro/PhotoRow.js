import { React, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export default function PhotoRow(props)  {

  const [hovered, setHovered] = useState(false)
  

      const styles = {
        myImg: {
        opacity: 1,
        transition: "opacity 1s, background 1s",
        background: "#EBEFF7"
        },
        myImgHovered: {
        opacity: 0.5,
        transition: "opacity 1s, background 1s",
        borderStyle: 'groove',
        borderWidthBottom: 1,
        borderWidthLeft: .5
        }
      }
      
  if(props.id === 1 ) {

    return(
      <Row>
        <Col className='text-center'>
          <Card style={{padding: '1em'}}>
            <Card.Text onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>{props.text}</Card.Text>
          </Card>
        </Col>
        <Col>
        <img style={hovered ? styles.myImgHovered : styles.myImg } src={props.picture} width={"550px"} alt="" className="photo-row" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}/>
      </Col>
    </Row>
    )

    } else {
    
    return(
      <Row>
        <Col>
        <img style={hovered ? styles.myStylesHovered : styles.myStyles } src={props.picture} width={"550px"} alt="" className="photo-row" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}/>
        </Col>
        <Col className="text-center">
        <Card style={{paddingTop: '2em', paddingBottom: '2em'}}>
            <Card.Text>{props.text}</Card.Text>
          </Card>
      </Col>
    </Row>
    )

  }
}

