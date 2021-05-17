import { React, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

export default function PhotoRow(props)  {

  const [hovered, setHovered] = useState(false)

      const styles = {
        myStyles: {
        opacity: 1,
        transition: "opacity 1s, background 1s",
        background: "#EBEFF7"
        },
        myStylesHovered: {
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
        <p>{props.text}</p>
        </Col>
        <Col>
        <img style={hovered ? styles.myStylesHovered : styles.myStyles } src={props.picture} width={"550px"} alt="" className="photo-row" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}/>
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
        {props.text}
      </Col>
    </Row>
    )

  }
}

