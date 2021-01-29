import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Product from './views/Product'
import Cart from './views/Cart'


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
