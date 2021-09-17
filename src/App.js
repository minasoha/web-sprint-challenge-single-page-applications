import React, {cloneElement, useEffect, useState} from "react";
import {Route, Link, Switch } from 'react-router-dom';
import Home from "./Home";
import Header from "./components/Header/Header";
import Form from "./components/Header/Form/Form";
import axios from "axios";
import formSchema from './validation/formSchema';
import * as yup from 'yup';

const initialFormValue = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  'canadian bacon': false,
  'spicy italian sausage': false,
  'grilled chicken': false,
  onions: false,
  'green peppers': false,
  'diced tomato': false,
  'black olives': false,
  'roasted garlic': false,
  'artichoke hearts': false,
  'three cheese': false,
  'extra cheese': false,
  pineapple: false,
  glutenfree: false,
  instructions: '',
  orders: ''
};
const initialFormError = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  'canadian bacon': false,
  'spicy italian sausage': false,
  'grilled chicken': false,
  onions: false,
  'green peppers': false,
  'diced tomato': false,
  'black olives': false,
  'roasted garlic': false,
  'artichoke hearts': false,
  'three cheese': false,
  'extra cheese': false,
  pineapple: false,
  glutenfree: false,
  instructions: '',
  orders: ''
};

const initialOrderForm = [];



const App = () => {

  const [order, setOrder] = useState(initialOrderForm);
  const [formValues, setFormValues] = useState(initialFormValue);
  const [formError, setFormError] = useState(initialFormError);
  


  const postOrderValues = orderValues =>{
    axios.post('https://reqres.in/api/orders', orderValues)
    .then(res =>{
      setOrder([res.data, ...order]);
      setFormValues(initialFormValue);
    }).catch(err =>{
      console.log(err);
    })
    console.log(orderValues)
  } 
  


  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      topping: false,
      glutenfree: false,
      instructions: formValues.instructions.trim(),
      
    }
    console.log(newOrder)
    postOrderValues(newOrder)
    
  }

  const validate = (name, value) =>{
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormError({...formError, [name]: ''}))
      .catch(err => setFormError({ ...formError, [name]: err.errors[0]}))
  }

  const inputChange = (name,value) =>{
    validate(name,value);
    setFormValues({ ...formValues, [name]: value})
      
  }


  return (
    <div className='App'>

        <Header/>
        <div className="home-wrapper">
            <div className="mainPicture">
                <h1>your favorite food, delivered while coding</h1>
                <Link
                to="/pizza"
                id='order-pizza'>
                    Pizza?</Link>
            </div>
            <div className='food-options'>
                <h3>Food Delivery in Gotham City</h3>
                <div></div>

            </div>




        </div>
      <Switch>
        
        <Route path={'/pizza'}>
          <Form 
          
          items={order}
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          errors={formError}
          
          />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
