import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage'
import OngoingPage from './components/OngoingPage'
import NewBread from './components/NewBread'
import BreadNotes from './components/BreadNotes'
import SubmitRecipe from './components/SubmitRecipe'
import CopyrightText from './components/CopyrightText'
import RecipeBank from './components/RecipeBank'

function App() {
  return (
    <div className="App">
      <Route exact={true} path="/" component={LandingPage} />
      <Route path="/new" component={NewBread} />
      <Route path="/started" component={OngoingPage} />
      <Route path="/notes" component={BreadNotes} />
      <Route path="/submit" component={SubmitRecipe} />
      <Route path="/recipebank" component={RecipeBank} />
      <CopyrightText />
    </div>
  );
}

export default App;
