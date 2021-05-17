import { React,  useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

export default function PhotoRow(props)  {
  
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) {
console.log("WORKS")
    } else {
      console.log("WORKS * 2")
    }
  }, [hovered])
 
  if(props.id === 1 ) {

    return(
      <Row>
        <Col className='text-center'>
        <p>{props.text}</p>
        </Col>
        <Col>
        <img src={props.picture} width={"550px"} alt="" className="photo-row" onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}/>
      </Col>
    </Row>
    )

    } else {
    
    return(
      <Row>
        <Col>
        <img src={props.picture} width={"550px"} alt="" className="photo-row"/>
        </Col>
        <Col className="text-center">
        {props.text}
      </Col>
    </Row>
    )

  }
}

