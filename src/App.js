import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./ContactUs";
import AboutUs from "./AboutUs";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutUs" exact component={AboutUs} />
          <Route path="/contactUs" exact component={Contact} />
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
