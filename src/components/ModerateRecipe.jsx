import React from 'react';
import './recipeList.css'

const ModerateRecipe = props => {
  const {recipes, deleteRecipe} = props
  return recipes.map (recipe =>{
    const recipeId = recipe.id
    return ( 
        <div className="container-list">
          <img className="img-recipe" src={recipe.image} alt=""/> 
          <p className="name-recipe">{recipe.name}</p>
          <button className="delete-recipe" onClick={() => deleteRecipe(recipeId)}>X</button>    
        </div> 
    )
  })
};

export default ModerateRecipe;