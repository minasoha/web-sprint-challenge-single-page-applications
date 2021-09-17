import React, {useEffect, useState} from "react";
import {Route, Link, Switch } from 'react-router-dom';
import Home from "./Home";
import Header from "./components/Header/Header";
import Form from "./components/Header/Form/Form"
import axios from "axios";

const initialFormValue = {
  name: '',
  size: '',
  sauce: '',
  topping: false,
  glutenfree: false,
  instructions: '',
  orders: '1'
};
const initialFormError = {
  name: '',
  size: '',
  sauce: '',
  topping: false,
  glutenfree: false,
  instructions: '',
  orders: '1'
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
  } 



  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
    
    }
    postOrderValues(newOrder)
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
          // change={inputChange}
          submit={formSubmit}
          // disabled={disabled}
          
          />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
