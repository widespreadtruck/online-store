import React, { } from 'react';
import './scss/app.scss';
import { Header, Home, Cart } from './components/index';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  
  return (
    <Router>
      <div className ="wrapper">
        <Header />
        <div className="content">
          <Route path="/online-store" component={Home} exact/>
          <Route path="/cart" component={Cart} exact/>
        </div>
      </div>
    </Router>
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
