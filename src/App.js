import './styles/App.scss';
import Navigation from './component/navigation/Navigation';
import Slides from './component/slideshow/Slides';
import Intro from './component/intro/Intro';
import Seller from './component/divider/Divide';
import Footer from './component/footer/Footer';

function App() {

  return (
    <div className="App">
      <Navigation style={{zIndex: 99999}} />
      <header className="App-header">
      </header>
        <Slides />
        <Seller />
        <Intro />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer />
    
    </div>
  
  );
}

export default App;
