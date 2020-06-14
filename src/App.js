import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage'
import OngoingPage from './components/OngoingPage'
import NewBread from './components/NewBread'
import SubmitRecipe from './components/SubmitRecipe'
import CopyrightText from './components/CopyrightText'
import RecipeBank from './components/RecipeBank'
import IngredientList from './components/IngredientList'

function App() {
  return (
    <div className="App">
      <Route exact={true} path="/" component={LandingPage} />
      <Route path="/new" component={NewBread} />
      <Route path="/started" component={OngoingPage} />
      <Route path="/submit" component={SubmitRecipe} />
      <Route path="/recipebank" component={RecipeBank} />
      <Route path="/ingredients" component={IngredientList} />
      <CopyrightText />
    </div>
  );
}

export default App;
