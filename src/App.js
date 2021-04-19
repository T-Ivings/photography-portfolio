import './App.scss';
import Hero from './component/hero/Hero'
import Navigation from './component/navigation/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <Hero />
      </header>
    </div>
  );
}

export default App;
