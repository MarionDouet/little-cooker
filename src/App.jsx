import React from 'react';
import FormRecipe from './components/FormRecipe'
import ShowDessert from './components/ShowDessert'
import ShowMeal from './components/ShowMeal'
import './App.css';

function App() {
  return (
    <div className="App">
      <FormRecipe />
      <ShowDessert />
      <ShowMeal />
    </div>
  );
}

export default App;
