import React, { Component } from 'react';
import axios from 'axios';


class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: [],
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
    .get('/littlecooker/recipe/:id')
      .then(res => res.data)
      .then(data => this.setState({ recipes: data }));
  }

  render() {
    const { recipes } = this.state;
      return (
        <div className="">
          <p>{recipes.name}</p>
        </div>
      );
  }
}

export default RecipeCard;