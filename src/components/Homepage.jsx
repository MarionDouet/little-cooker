import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    
  }


  render() {
    
    return (
      <div className="">
        <Link to='/formrecipe'><p>Nouvelle recette</p></Link>
        <h3>Je veux cuisiner ...</h3>
        <Link to='/entree'><p>Une entrée</p></Link>
        <Link to='/meal'><p>Un plat</p></Link>
        <Link to='/dessert'><p>un dessert</p></Link>
      </div>
    );
  }
}




export default HomePage; 