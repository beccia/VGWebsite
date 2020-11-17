import React from 'react';
import {Switch, Route, Link as RouterLink} from "react-router-dom";
import NavBar from "./components/NavBar"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path="/index.html" component={HomePage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path='/sections/:handle' component={ArticleContainer} />
        <Route exact path="/sections/reviews/:handle" component={Article} />
        <Route exact path="/sections/articles/:handle" component={Article} />
        <Route exact path="/about_this" component={AboutThis} />
        <Route exact path="/about_me" component={AboutMe} />
        <Route exact path="/images/:handle" component={ImageView} />
      </Switch>
    </div>
  );
}

export default App;
