import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import logo from '../image/logo-cooker.png'
import home from '../image/home.png'
import './formRecipe.css'

class FormRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      nb_person: '',
      instructions: '',
      ingredients: '',
      id_type: null,
      nbRecipe: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getNbRecipe = this.getNbRecipe.bind(this);
  }

  componentDidUpdate() {
    this.getNbRecipe()

  }

  componentDidMount(){
    this.getNbRecipe()
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  getNbRecipe() {
    axios
    .get('/littlecooker/recipe')
      .then(res => res.data)
      .then(data => this.setState({ nbRecipe: data.length }));
  }

  
  handleSubmit(e) {
    e.preventDefault();
    const {
      name,
      image,
      nb_person,
      instructions,
      ingredients,
      id_type
    } = this.state;
    axios.post('/littlecooker/recipe', {
      name,
      image,
      nb_person,
      instructions,
      ingredients,
      id_type
    });
  }  
     

  render() {
    const {
      name,
      image,
      nb_person,
      instructions,
      ingredients,
      id_type,
      nbRecipe
    } = this.state;

    return (
      
      <div className="container-admin">
        <Link to="/"><img className="link-logo" src={logo} alt=""/></Link>
        <h1 className="admin-title">Ajouter une recette</h1>
        <form onSubmit={this.handleSubmit} className="form-container">
            <label htmlFor="name" className="form-label">
              Nom de la recette:
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Nom"
                required
              />
            </label>
            <label htmlFor="image" className="form-label">
              URL de l'image:
              <input
                type="text"
                id="image"
                name="image"
                value={image}
                onChange={this.handleChange}
                placeholder="Image"
                required
              />
            </label>
            <label htmlFor="nbPerson" className="form-label">
              Nombre de personnes:
              <input
                type="text"
                id="nb_person"
                name="nb_person"
                value={nb_person}
                onChange={this.handleChange}
                placeholder="Nombre de personnes"
                required
              />
            </label>
            <label htmlFor="type" className="form-label">
              Type de recette
              <input
                type="text"
                id="id_type"
                name="id_type"
                value={id_type}
                onChange={this.handleChange}
                placeholder="Type de recette"
                required
              />
            </label>
            <label htmlFor="ingredients" className="form-label">
              Ingrédients
              <textarea
                type="text"
                id="ingredients"
                name="ingredients"
                rows="5"
                value={ingredients}
                onChange={this.handleChange}
                placeholder="Ingrédients"
                required
              />
            </label>
            <label htmlFor="instructions" className="form-label">
              Instructions
              <textarea
                type="text"
                id="instructions"
                name="instructions"
                rows="5"
                value={instructions}
                onChange={this.handleChange}
                placeholder="Instructions"
                required
              />
            </label>
            <input type="submit" value="enregistrer" />
        </form>
        <h3>{nbRecipe} recettes</h3>
        <Link to="/moderate/recipe"><h3>Modérer</h3></Link>
        <Link to="/"><img className="link-logo-home" src={ home } alt=""/></Link>
      </div>
    );
  }
}

export default FormRecipe;