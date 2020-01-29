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
        <Link to='/formrecipe'><p>bla</p></Link>
        <Link to='/meal'><p>Plat</p></Link>
        <Link to='/dessert'><p>Dessert</p></Link>
      </div>
    );
  }
}




export default HomePage; 