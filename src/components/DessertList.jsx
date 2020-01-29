import React from 'react';

const DessertList = props => {
  return props.recipes.map (recipe =>{
    return (
      <div>
        <img src={recipe.image} alt=""/>
        <p>{recipe.name}</p>
      </div>
    )
  })
};

export default DessertList;