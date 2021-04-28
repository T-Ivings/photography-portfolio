import './App.scss';
import Hero from './component/hero/Hero';
import Navigation from './component/navigation/Navigation';
import Slides from './component/slideshow/Slides';
import { Container } from 'react-bootstrap';
import Intro from './component/intro/Intro';
import { Divider } from '@material-ui/core';

function App() {

  return (
    <div className="App">
      <Navigation style={{zIndex: 99999}} />
      <header className="App-header">
      </header>
        <Slides />
        <Container>
         <div>Some text telling potential clients what you do</div><br/>
         <div>What you specialize in</div><br/>
         <div>IDK write something here to we have a blank space</div><br/>
        </Container>
        <Divider /><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Intro /><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/>  
        <Divider variant={"middle"} />
        <Intro/>
    
    </div>
  
  );
}

export default App;
