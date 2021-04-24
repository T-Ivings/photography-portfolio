import './App.scss';
import Hero from './component/hero/Hero';
import Navigation from './component/navigation/Navigation';
import Slides from './component/slideshow/Slides';
import { Container } from 'react-bootstrap';
import Intro from './component/intro/Intro';

function App() {

  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
      </header>
        <Slides /><br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        <Intro /><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/>  
    
    </div>
  
  );
}

export default App;
