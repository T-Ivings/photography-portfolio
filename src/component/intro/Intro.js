import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import photo1 from '../../images/carl-port2-new.jpg';
import photo2 from '../../images/intro-jace-new.jpg';
import photo3 from '../../images/morty.jpg'
import PhotoRow from './PhotoRow';
import './Intro.scss';

const string1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero augue, malesuada non semper nec, tristique ullamcorper lectus. Aenean ante ipsum, pulvinar quis condimentum   vitae, porta in nulla. Phasellus id faucibus ipsum, nec ullamcorper mauris. Ut a ante ac tortor placerat consequat vitae vitae nunc. Sed lorem nunc, accumsan vel convallis vel, porta  quis ligula. Nunc ultrices est a elit eleifend aliquam. Curabitur gravida neque eros, vitae mattis dui iaculis lobortis.";

const string2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero augue, malesuada non semper nec, tristique ullamcorper lectus. Aenean ante ipsum, pulvinar quis condimentum   vitae, porta in nulla. Phasellus id faucibus ipsum, nec ullamcorper mauris. Ut a ante ac tortor placerat consequat vitae vitae nunc. Sed lorem nunc, accumsan vel convallis vel, porta  quis ligula. Nunc ultrices est a elit eleifend aliquam. Curabitur gravida neque eros, vitae mattis dui iaculis lobortis. Sed et vulputate est. Praesent eu efficitur augue, id viverra   dolor. Aliquam metus justo, finibus ac nisl ut, finibus pretium mauris.";

const string3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero augue, malesuada non semper nec, tristique ullamcorper lectus. Aenean ante ipsum, pulvinar quis condimentum   vitae, porta in nulla. Phasellus id faucibus ipsum, nec ullamcorper mauris.";

const photoRowInformation = [[photo1, string1], [photo2, string2], [photo3, string3]];


const Intro = () => {

  const photoRowData = photoRowInformation.map((data, index) => {
    return (
      <PhotoRow
      key={index}
      id={index}
      text={data[1]}
      picture={data[0]}
      />
    )
  });

  
  return (
    <section id="intro">
      <Container>
        {photoRowData}
      </Container>
    </section>
  );
};

export default Intro;