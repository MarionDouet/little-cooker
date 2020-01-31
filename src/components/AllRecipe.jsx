import React, { Component } from 'react';
import ModerateRecipe from './ModerateRecipe'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './showEntree.css'
import home from '../image/home.png'


class AllRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
    this.getData = this.getData.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  componentDidMount() {
    this.getData();
  }


  getData() {
    axios
    .get('/littlecooker/recipe')
      .then(res => res.data)
      .then(data => this.setState({ recipes: data }));   
  }

  deleteRecipe(recipeId) {
    axios
    .delete(`/littlecooker/recipe/${recipeId}`, {
      id: recipeId,
    })
    .then(this.getData());
  }

  render() {
    const { recipes } = this.state;
      return (
        <div className="recipe-type-container">
          <h1 className="admin-title">Recettes</h1>
          <ModerateRecipe recipes={recipes} deleteRecipe={this.deleteRecipe}/>
          <Link to="/formrecipe"><img className="link-logo-home" src={home} alt=""/></Link>
        </div>
      );
  }
}

export default AllRecipe;