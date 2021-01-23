import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Product from './Product'
import Cart from './Cart'


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact>  
            <Product />
          </Route>
          <Route path="/checkout" exact>  
            <Cart />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
