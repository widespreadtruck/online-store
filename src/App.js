import React, { useEffect, useState } from 'react';

import './scss/app.scss';

import { Header, Home, Cart } from './components/index';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect( ()=>{
    fetch("http://localhost:3000/db.json")
      .then( response => response.json() )
      .then( json => setPizzas(json.pizzas) );
    }, []);

console.log(pizzas)
  return (
    <div className ="wrapper">
      <Header />
      <div className="content">
      <Router>
        <Route path="/" render={ ()=> <Home items={pizzas} /> } exact/>
        <Route path="/cart" component={Cart} />
      </Router>
      </div>
    </div>
  );
}

export default App;
