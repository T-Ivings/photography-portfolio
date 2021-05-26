import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navigation from './component/navigation/Navigation';
import Home from './component/pages/Home';
import Footer from './component/footer/Footer';
import Portfolio from './component/pages/Portfolio';
import Faq from './component/faq/Faq';
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
        <Home/>
      </Route>
      <Route path="/faq">
        <Faq />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
    </Switch>
    </Router>
    
    <Footer/>
    </div>
  
  );
}

export default App;
