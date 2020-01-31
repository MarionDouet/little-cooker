import React, { Component } from 'react';
import RecipeList from './RecipeList';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './showEntree.css';
import logo from '../image/logo-cooker.png';
import home from '../image/home.png'

class ShowDessert extends Component {
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
    axios
    .get('/littlecooker/recipe/dessert')
      .then(res => res.data)
      .then(data => this.setState({ recipes: data }));
  }

  render() {
    const { recipes } = this.state;
      return (
        <div className="recipe-type-container">
          <Link to="/"><img className="link-logo" src={logo} alt=""/></Link>
          <h2 className="recipe-type-title">Desserts</h2>
          <RecipeList recipes={recipes} key={recipes.id}/>
          <Link to="/"><img className="link-logo-home" src={home} alt=""/></Link>
        </div>
      );
  }
}

export default ShowDessert;