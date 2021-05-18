import React from 'react';
import {Col, Row} from 'react-bootstrap';
import image from '../../images/intro-jace-new.jpg';
import './About.scss';


const About = () => {

  const styles = {
    'text': {
      margin: "1em",
      float: "right",
    }
  }

  return (
    <section id='about'>
<Row>
  <Col styles={styles.text} className=''>
    <span>THIS WILL BE A LOT OF TEXT SO LETS TRY AND MAKE IT SO THAT I AM WRITING SOMETHING HERE THAT WILL BE REPLACED BY SOMETHING CARL AT A LATER DATE SO IT LITERALLY DOES NOT MATTER WHAT I TYPE HERE AT THE MOMENT.</span><br/>
    
    <span>THIS IS ALSO SOME TEXT THAT WILL BE CHANGED AT A LATER DATE.</span><br/>
    
    <span>THIS AS WELL WILL ALSO BE CHANGED AT A FUTURE DATE. FOR RIGHT NOW, IT WILL HAVE A BIT MORE TEXT THAN LINE TWO BUT LESS THAN LINE ONE.</span></Col>
  <Col><img src={image} width={650} alt=''/></Col>
</Row>
    </section>
  )
};

export default About;