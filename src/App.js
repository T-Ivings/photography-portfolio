import './styles/App.scss';
import Navigation from './component/navigation/Navigation';
import Home from './component/pages/Home';
import Footer from './component/footer/Footer';
import About from './component/pages/About';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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
      <Route path="/about">
        <About />
      </Route>

    </Switch>
    </Router>
    
    <Footer/>
    </div>
  
  );
}

export default App;
