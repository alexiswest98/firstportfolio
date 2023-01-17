import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import HomePage from './components/stickySlime';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';

function App() {

  return (
    <BrowserRouter>
    <Switch>
        <Route path='/' exact='true'>
          <AboutMe/>
          <HomePage/>
        </Route>
    </Switch>
    <Switch>
        <Route path='/portfolio' exact='true'>
          <Portfolio/>
        </Route>
    </Switch>
    <Switch>
        <Route path='/contact' exact='true'>
          <ContactMe/>
        </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
