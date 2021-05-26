import React from 'react';
import { Accordion, Card} from 'react-bootstrap';
import './Faq.scss';

const Faq = () => {

  const frequentQuestions = ["Question One", "Question Two", "Question Three", "Question Four", "Question Five", "Question Six", "Question Seven", "Question Eight", "Question Nine", "Question Ten",];


  const mappedQuestions = frequentQuestions.map((question, index) => {
    
      return (
        <Accordion.Toggle as={Card.Header} eventKey={index}>
          {question}
        </Accordion.Toggle>
      );
  });

  const mappedAnswers = frequentQuestions.map((answer, index))

  return (
    <section id="faq">
      <h1>Frequently Asked Questions</h1>

      <Accordion className="accordion">
        <Card>
          {mappedQuestions}
          {}
        </Card>
      </Accordion>
    </section>
  );
  
};

export default Faq;