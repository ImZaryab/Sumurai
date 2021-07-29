// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'
import Error from './pages/Error'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Route, Switch, Router } from "react-router-dom";
// import Footer from '../Components/Home/Footer/Footer';
import Footer from './Components/Home/Footer/Footer';

import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Home}></Route>
      <Switch>
        <Route exact path="/work" component={Work}></Route>
        <Route exact path="/services" component={Services}></Route>
        <Route exact path="/about" component={AboutUs}></Route>
        <Route exact path="/projects/:category" component={Projects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
      <Footer/>

    </div>
  );
}

export default App;
