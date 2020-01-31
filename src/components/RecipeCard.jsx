import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './recipeCard.css';
import home from '../image/home.png';


class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() { 
    const { id } = this.props.match.params
    axios
    .get(`/littlecooker/recipe/${id}`)
      .then(res => res.data)
      .then(data => this.setState({ recipes: data[0] }));
  }

  render() {
    const { recipes } = this.state;
      return (
        <div className="recipe-card-container">
          <p className="recipe-card-name">{recipes.name}</p>
          <div className="recipe-card-photo">
          <img src={recipes.image} alt="" />
          </div>
          <p className="recipe-card-nb">{recipes.nb_person}</p>
          <p className="recipe-card-ingredients">{recipes.ingredients}</p>
          <p className="recipe-card-instructions">{recipes.instructions}</p>
          <NavLink to="/"><img className="link-logo-home" src={home}alt=""/></NavLink>
        </div>
      );
  }
}

export default RecipeCard;