import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './Layout';
import Appetizers from './Appetizers';
import Desserts from './Desserts';
import Entrees from './Entrees';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      appetizers: [],
      entrees: [],
      desserts: []
    };
  }

// Set initial state for appetizers, entrees, and desserts.
// All should be set to empty arrays.



// Lifecycle method
// Fetch from http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu.
// The response should return an object with appetizers, entres, and desserts.
// Set these to state.
// YOUR CODE HERE>

componentDidMount() {
  fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
  .then(response => response.json())
  .then(data => {
    const {Appetizers, Entrees, Desserts} = data[0];
      this.setState({
        appetizers: Appetizers,
        entrees: Entrees,
        desserts: Desserts
      });
    });
  }



  render() {
    // Your render should consist of the BaseLayout with the following children components: Appetizers, Entrees, and Dessert.
    // Each component needs to receive state via props.
    return (
      <BaseLayout>
        <Appetizers items={this.state.appetizers}/>
        <Desserts items={this.state.desserts}/>
        <Entrees items={this.state.entrees}/>
      </BaseLayout>

    );
  }
}
