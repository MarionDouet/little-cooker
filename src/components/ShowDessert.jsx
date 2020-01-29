import React, { Component } from 'react';
import DessertList from './DessertList'
import axios from 'axios';


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
        <div className="">
          <DessertList recipes={recipes}/>
        </div>
      );
  }
};

export default ShowDessert;