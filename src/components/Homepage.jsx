import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './homepage.css';
import logo from '../image/logo-cooker.png';
import plat from '../image/plat.png';
import dessert from '../image/dessert.png';
import entree from '../image/salade.png';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };  
  }


  render() {
    
    return (
      <div className="homepage-container">
        <div classname="container-connexion">
          <NavLink to='/formrecipe'><p className="home-connexion">Connexion</p></NavLink>
        </div>
        <img className ="logo-home" src={logo} alt=""/>
        <h3 className="home-text">Je veux cuisiner ...</h3>
        <div className="choice-container">
          <NavLink to='/entree'>
            <img className= "img-salade" src={entree} alt=""/>
            <p>Une entrée</p>
          </NavLink>
          <NavLink to='/meal'>
            <img className= "img-salade" src={plat} alt=""/>
            <p>Un plat</p>
          </NavLink>
          <NavLink to='/dessert'>
            <img className= "img-salade" src={dessert} alt=""/>
            <p>Un dessert</p>
          </NavLink>
        </div>
        
      </div>
    );
  }
}




export default HomePage; 