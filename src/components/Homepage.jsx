import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './homepage.css';
import logo from '../image/logo-cooker.png';
import plat from '../image/plat.png';
import dessert from '../image/dessert.png';
import entree from '../image/salade.png';
import chief from '../image/chief.png'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };  
  }


  render() {
    
    return (
      <div className="homepage-container">
        <div className="container-connexion">
          <NavLink to='/formrecipe'><img className="home-connexion" src={chief} alt="admin"/></NavLink>
        </div>
        <img className ="logo-homepage" src={logo} alt="logo"/>
        <h3 className="home-text">Je veux cuisiner ...</h3>
        <div className="choice-container">
          <NavLink to='/entree'>
            <img className= "img-salade" src={entree} alt="logo"/>
            <p>Une entrée</p>
          </NavLink>
          <NavLink to='/meal'>
            <img className= "img-salade" src={plat} alt="logo"/>
            <p>Un plat</p>
          </NavLink>
          <NavLink to='/dessert'>
            <img className= "img-salade" src={dessert} alt="logo"/>
            <p>Un dessert</p>
          </NavLink>
        </div>   
      </div>
    );
  }
}




export default HomePage; 