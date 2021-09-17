import React, {useEffect, useState} from "react";
import {Route, Link, Switch } from 'react-router-dom';
import Home from "./Home";
import Header from "./components/Header/Header";
import Form from "./components/Header/Form/Form"


const App = () => {

  const [order, setOrder] = useState([])


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
          <Form items={order}/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
