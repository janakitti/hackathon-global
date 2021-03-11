import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Events from "./Events/Events";

function App() {
  return (
    <div className="App">
      <Router>
        <div id="side-nav">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
        </div>
        <Switch>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
