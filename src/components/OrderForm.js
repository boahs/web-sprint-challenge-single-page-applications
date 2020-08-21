import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

const pizzaSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Must be at least 2 characters.")
    .required("Name is required."),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  pizzaSize: yup.string(),
  ham: yup.boolean().oneOf([true, false]),
  pineapple: yup.boolean().oneOf([true, false]),
  extraCheese: yup.boolean().oneOf([true, false]),
  pepperoni: yup.boolean().oneOf([true, false]),
  specialInstructions: yup.string(),
});

const OrderForm = () => {
  const [pizzaOrder, setPizzaOrder] = useState({
    name: "",
    email: "",
    pizzaSize: "Select Size",
    ham: false,
    pineapple: false,
    extraCheese: false,
    pepperoni: false,
    specialInstructions: "",
  });
  console.log(pizzaOrder);

  const [errorState, setErrorState] = useState({
    name: "",
    email: "",
    pizzaSize: "Select Size",
  });

  const validate = (e) => {
    yup
      .reach(pizzaSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [e.target.name]: "",
        });
      })
      .catch((error) => {
        console.log(error.errors);
        setErrorState({
          ...errorState,
          [e.target.name]: error.errors[0],
        });
      });
  };
  const changeHandler = (e) => {
    const { name, checked } = e.target;
    setPizzaOrder(name, checked);
  };

  const orderSubmit = (e) => {
    //Submit to database
    e.preventDefault();
    console.log("order submitted!");
    axios
      .post("https://reqres.in/api/users", pizzaOrder)
      .then((res) => {
        setPizzaOrder([res.data]);
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="form-container">
      <form onSubmit={orderSubmit} className="form-Div">
        <div className="form-Header">
          <h2> Custom pizza order! </h2>
          <label htmlFor="name" className="text-field">
            Name
            <input
              type="text"
              name="name"
              placeholder="please enter name"
              value={pizzaOrder.name}
              onChange={changeHandler}
            />
            {errorState.name.length > 0 ? (
              <p className="error">{errorState.name}</p>
            ) : null}
          </label>
          <label htmlFor="email" className="text-field">
            Email Address
            <input
              type="text"
              name="email"
              placeholder="Email address"
              value={pizzaOrder.email}
              onChange={changeHandler}
            />
            {errorState.email.length > 0 ? (
              <p className="error">{errorState.email}</p>
            ) : null}
          </label>
        </div>
        <div className="customize pizza">
          <h2>Customize</h2>
          <div className="pizza-size">
            <label htmlFor="pizzaSize">
              <h3>Choose a Size</h3>
              <select
                name="pizzaSize"
                value={pizzaOrder.pizzaSize}
                onChange={changeHandler}
              >
                <option value="">Select Size</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
            </label>
          </div>
          <h3 className="toppings">Toppings:</h3>
          <div className="toppings">
            <label htmlFor="ham" className="topping">
              <input
                type="checkbox"
                name="ham"
                checked={pizzaOrder.ham}
                onChange={changeHandler}
              />
              Ham
            </label>
            <label htmlFor="pineapple" className="topping">
              <input
                type="checkbox"
                name="pineapple"
                checked={pizzaOrder.pineapple}
                onChange={changeHandler}
              />
              pineapple
            </label>
            <label htmlFor="extraCheese" className="topping">
              <input
                type="checkbox"
                name="extraCheese"
                checked={pizzaOrder.extraCheese}
                onChange={changeHandler}
              />
              extra cheese
            </label>
            <label htmlFor="pepperoni" className="topping">
              <input
                type="checkbox"
                name="pepperoni"
                checked={pizzaOrder.pepperoni}
                onChange={changeHandler}
              />
              pepperoni
            </label>
          </div>
          <div className="special-instructions">
            <h3> Special Instructions: </h3>
            <label htmlFor="specialInstructions">
              <textarea
                name="specialInstructions"
                placeholder="special instructions"
                value={pizzaOrder.specialInstructions}
                onChange={changeHandler}
              />
            </label>
          </div>
          <div className="submit-button">
            <h3>Place order</h3>
            <button type="submit" className="submit-button">
              Confirm order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
