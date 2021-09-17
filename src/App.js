import React from "react";
import {Route, Link, Switch } from 'react-router-dom';
import Home from "./Home";
import Header from "./components/Header/Header";
import Form from "./components/Header/Form/Form"


const App = () => {
  return (
    <div className='App'>

        <Header/>
      <Switch>
        <Form/>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
