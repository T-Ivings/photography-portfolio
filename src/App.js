import './App.scss';
import Navigation from './component/navigation/Navigation';
import Slides from './component/slideshow/Slides';
import Intro from './component/intro/Intro';
import Divide from './component/divider/Divide'

function App() {

  return (
    <div className="App">
      <Navigation style={{zIndex: 99999}} />
      <header className="App-header">
      </header>
        <Slides />
        <Divide />
        <Intro />
    
    </div>
  
  );
}

export default App;
