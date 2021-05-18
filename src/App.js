import './styles/App.scss';
import Navigation from './component/navigation/Navigation';
import Home from './component/pages/Home';
import Footer from './component/footer/Footer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Navigation style={{zIndex: 99999}} />
      <header className="App-header">
      </header>

      <Home/>
      <Footer/>
    
    </div>
  
  );
}

export default App;
