import React from 'react';
import { Link } from 'react-router-dom';

import './recipeList.css'

const RecipeList = props => {
  return props.recipes.map (recipe =>{
    const recipeId = recipe.id
    return ( 
      <Link to={`/recipe/${recipeId}`}>
        <div className="container-list" key={recipe.id}>
          <img className="img-recipe" src={recipe.image} alt=""/> 
          <p className="name-recipe">{recipe.name}</p>    
        </div> 
      </Link>  
    )
  })
};

export default RecipeList;