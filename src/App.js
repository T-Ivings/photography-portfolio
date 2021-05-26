import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navigation from './component/navigation/Navigation';
import Footer from './component/footer/Footer';
import Faq from './component/faq/Faq';
import Slides from './component/slideshow/Slides';
import Seller from './component/seller/Seller';
import Intro from './component/intro/Intro';
import './styles/App.scss';

function App() {

  return (
    <div className="App">
      <Navigation style={{zIndex: 99999}} />
      <header className="App-header">
      </header>
      <Router>


    <Switch>
      <Route exact path="/">
        <Slides />
        <Seller />
        <Intro />
      </Route>
      <Route path="/faq">
        <Faq />
      </Route>
      <Route path="/portfolio">
      </Route>
    </Switch>
    </Router>
    
    <Footer/>
    </div>
  
  );
}

export default App;
