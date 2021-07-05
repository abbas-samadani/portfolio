import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import About from './component/content/About';
import Header from './component/header/Header';
import Skills from './component/content/Skills';
import Portfolio from './component/content/Portfolio';
import Contact from './component/content/Contact';

function App() {
  return (
    
    <Router>
      <Header/>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/portfolio">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Skills</Link>
          </li>
          
        </ul>

        <Switch>
          <Route path="/about">
            <About/>
          </Route>          
          <Route path="/skills">
            <Skills/>
          </Route>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;




