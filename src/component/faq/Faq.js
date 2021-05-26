import React from 'react';
import { Accordion , Card} from 'react-bootstrap';
import './Faq.scss';

const Faq = () => {

  return (
    <section id="faq">
      <h1>Frequently Asked Questions</h1>

      <Accordion class>
        <Card>  
          <Accordion.Toggle as={Card.Header} eventKey={0}>
            First Questions
          </Accordion.Toggle>
          
        </Card>
      </Accordion>
    </section>
  );
  
};

export default Faq;