import React from "react";
import "../App.css";
import Home from "./Home";
import OrderForm from "./OrderForm";
import { Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="App">
        <nav className="home-header">
          <h1>Lambda Eats</h1>
          <Link className="link" to="/">
            <Link className="link" to="/pizza">
              Order Here
            </Link>
            Home
          </Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/pizza" component={OrderForm} />
      </div>
    </>
  );
};
export default App;
