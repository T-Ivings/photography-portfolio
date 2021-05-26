import React from 'react';
import { Accordian , Card} from 'react-bootstrap';

const Faq = () => {

  return (
    <section id="faq">
      <h1>Frequently Asked Questions</h1>

      <Accordian>
        <Card>  
          <Accordian.Toggle as={Card.Header} eventKey={0}>
            First Questions
          </Accordian.Toggle>
          
        </Card>
      </Accordian>
    </section>
  );
  
};

export default Faq;