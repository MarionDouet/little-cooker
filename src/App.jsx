import React from 'react';
import { Route } from 'react-router-dom';
import FormRecipe from './components/FormRecipe'
import ShowDessert from './components/ShowDessert'
import ShowMeal from './components/ShowMeal'
import './App.css';
import HomePage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/formrecipe" component={FormRecipe} />
      <Route path="/dessert" component={ShowDessert} />
      <Route path="/meal" component={ShowMeal} />
    </div>
  );
}

export default App;
