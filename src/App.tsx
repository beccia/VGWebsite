import React from 'react';
import {Switch, Route, Link as RouterLink} from "react-router-dom";
import NavBar from "./components/NavBar"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
