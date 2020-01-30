import React from 'react';
import { Route } from 'react-router-dom';
import FormRecipe from './components/FormRecipe'
import ShowDessert from './components/ShowDessert'
import ShowMeal from './components/ShowMeal'
import ShowEntree from './components/ShowEntree'
import './App.css';
import HomePage from './components/Homepage';
import RecipeCard from './components/RecipeCard';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/formrecipe" component={FormRecipe} />
      <Route path="/entree" component={ShowEntree} />
      <Route path="/meal" component={ShowMeal} />
      <Route path="/dessert" component={ShowDessert} />
      <Route path="/recipe/:id" component={RecipeCard} />
    </div>
  );
}

export default App;
