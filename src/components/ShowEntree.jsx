import React, { Component } from 'react';
import RecipeList from './RecipeList'
import axios from 'axios';


class ShowEntree extends Component {
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
    .get('/littlecooker/recipe/entree')
      .then(res => res.data)
      .then(data => this.setState({ recipes: data }));
  }

  render() {
    const { recipes } = this.state;
      return (
        <div className="">
          <h2>Entrées</h2>
          <RecipeList recipes={recipes}/>
        </div>
      );
  }
}

export default ShowEntree;