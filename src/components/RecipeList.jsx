import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = props => {
  return props.recipes.map (recipe =>{
    const recipeId = recipe.id
    return (
      <Link to={`/recipe/:${recipeId}`}>
        <div>
          <img src={recipe.image} alt=""/>
          <p>{recipe.name}</p>
        </div>
      </Link>
    )
  })
};

export default RecipeList;