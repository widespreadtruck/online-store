import React, { useEffect, useState, Component } from 'react';
import './scss/app.scss';
import { Header, Home, Cart } from './components/index';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import store from './redux/store';
import { setPizzas as setPizzasAction, setPizzas } from './redux/actions/pizzas'
import { connect } from 'react-redux';
import pizzas from './redux/reducers/pizzas';

class App extends Component {
  
  componentDidMount() {
    axios.get("http://localhost:3000/db.json")
    .then( ({data}) => {
      // dispatching an action to hold a JSON object in the global state
      //it then will be used in the Home component to display different pizzas
      // this.props.dispatch(setPizzasAction(data.pizzas));
      this.props.setPizzas(data.pizzas);
    })
  };
  
  
  render() {
    return (
      <div className ="wrapper">
        <Header />
        <div className="content">
        <Router>
          <Route path="/" render={ ()=> <Home items={this.props.items} /> } exact/>
          <Route path="/cart" component={Cart} />
        </Router>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    dispatch,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
