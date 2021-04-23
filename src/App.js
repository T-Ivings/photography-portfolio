import './App.scss';
import Hero from './component/hero/Hero';
import Navigation from './component/navigation/Navigation';
import Slides from './component/slideshow/Slides';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
      </header>
      <Container>
        <Slides />
      </Container>
    </div>
  
  );
}

export default App;
