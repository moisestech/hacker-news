import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import PostList from "./components/PostList";

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <PostList />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
