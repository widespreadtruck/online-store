import React, { useState } from 'react';
import './scss/app.scss';
import { Header, Home, Cart } from './components/index';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import store from './redux/store';
import { setPizzas } from './redux/actions/pizzas'
import { connect, useSelector, useDispatch } from 'react-redux';
import pizzas from './redux/reducers/pizzas';


const App = () => {
  const dispatch = useDispatch();


  //receiving data about the pizzas from a JSON file. Doing it in the App component and not in the PizzaBlock component or Home page such that it is only done once when App component is rendered.
  React.useEffect( ( ) => {
    //using npm json-server to grab data directly from the fake server
    axios.get("http://localhost:3001/pizzas")
    .then( ({data}) => {
      dispatch(setPizzas(data));
    })
  }, [])
  
  return (
    <div className ="wrapper">
      <Header />
      <div className="content">
      <Router>
          <Route path="/" component={Home} exact/>
        <Route path="/cart" component={Cart} />
      </Router>
      </div>
    </div>
  );
};

export default App;

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//     dispatch,
//   }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(App);
