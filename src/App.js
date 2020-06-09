import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage'
import FaqPage from './components/FaqPage'
import OngoingPage from './components/OngoingPage'
import NewBread from './components/NewBread'
import CopyrightText from './components/CopyrightText'

function App() {
  return (
    <div className="App">
      <Route exact={true} path="/" component={LandingPage} />
      <Route path="/new" component={NewBread} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/started" component={OngoingPage} />
      <CopyrightText />
    </div>
  );
}

export default App;
