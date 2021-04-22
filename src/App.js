import './App.scss';
import Hero from './component/hero/Hero'
import Navigation from './component/navigation/Navigation'
import Slides from './component/slideshow/Slides'

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <Slides />
      </header>
    </div>
  );
}

export default App;
