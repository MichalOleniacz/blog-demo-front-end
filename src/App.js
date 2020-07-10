import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";

import Posts from "./screens/posts/Posts";
import New from "./screens/new/New";
import Post from "./screens/post/Post";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/new" exact component={New}></Route>
        <Route path="/:id" component={Post}></Route>
        <Route path="/" exact component={Posts}></Route>
      </Switch>
      <Navbar />
    </div>
  );
}

export default App;
