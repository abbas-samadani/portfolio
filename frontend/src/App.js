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
import Dashboard from './component/dashboard/Dashboard';
import ContactAdmin from './component/dashboard/ContactAdmin';
import AddPortfolio from './component/dashboard/AddPortfolio';
import AboutAdmin from './component/dashboard/AboutAdmin';
import PortfoliosAdmin from './component/dashboard/PortfoliosAdmin';
import SkillsAdmin from './component/dashboard/SkillsAdmin';
import NewSkill from './component/dashboard/NewSkill';

function App() {
  return (

    <Router>
      <div>

        {/* <ul>        
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
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>          
        </ul> */}

        <Switch>
          {/* <Route path="/">
            <Header />
          </Route> */}
          
          <Route path="/skills">
            <Header />
            <Skills />
          </Route>
          <Route path="/portfolio">
            <Header />
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
          </Route>
          <Route exact path="/">
            <Header />
            <About />
          </Route>
          
        </Switch>

        <Switch>          
          <Route exact path="/admin/about">
            <Dashboard />
            <AboutAdmin />
          </Route>
          <Route path="/admin/skills">
            <Dashboard />
            <SkillsAdmin />
          </Route>
          <Route path="/admin/portfolios">
            <Dashboard />
            <PortfoliosAdmin />
          </Route>
          <Route path="/admin/addportfolio">
            <Dashboard />
            <AddPortfolio/>
          </Route>
          <Route path="/admin/contact">
            <Dashboard />
            <ContactAdmin />
          </Route>
          <Route path="/admin/addskill">
            <Dashboard />
            <NewSkill />
          </Route>
          <Route path="/admin">
            <Dashboard />
          </Route>
          
        </Switch>       

      </div>
    </Router>
  );
}

export default App;




