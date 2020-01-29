import React, { Component } from 'react';
import axios from 'axios';

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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
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
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-container">
            <label htmlFor="name" className="form-name">
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
            <label htmlFor="image" className="form-image">
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
            <label htmlFor="nbPerson" className="form-nb">
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
            <label htmlFor="type" className="form-type">
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
            <label htmlFor="instructions" className="form-type">
              <textarea
                type="text"
                id="instructions"
                name="instructions"
                value={instructions}
                onChange={this.handleChange}
                placeholder="Instructions"
                required
              />
            </label>
            <label htmlFor="ingredients" className="form-type">
              <textarea
                type="text"
                id="ingredients"
                name="ingredients"
                value={ingredients}
                onChange={this.handleChange}
                placeholder="Ingrédients"
                required
              />
            </label>
            <input type="submit" value="enregistrer" />
        </form>
      </div>
    );
  }
}

export default FormRecipe;