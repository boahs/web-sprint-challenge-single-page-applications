import React from "react";
import "../App.css";
import Home from "./Home";
import OrderForm from "./OrderForm";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <div className="App">
        <nav className="home-header">
          <h1>Lambda Eats</h1>
          <div>
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <Link className="link" to="/pizza">
            Order Here 
          </Link>
        </nav>
        <Route exact path="/" component={Home} />

        <Route path="/pizza" component={OrderForm} />
      </div>
    </>
  );
};
export default App;
