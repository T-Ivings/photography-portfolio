import React from 'react';
import Slides from '../slideshow/Slides';
import Divide from '../divider/Divide';
import Intro from '../intro/Intro';



const Home = () => {
  return (
    <section id="home">
      <Slides />
      <Divide />
      <Intro />
    </section>
  )
}

export default Home;