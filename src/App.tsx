import React from "react";
import "./App.scss";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";

function App() {
  return (
    <div className="App">
      <Router>
        <div id="router-container">
          <div id="side-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link to="/events">Events</Link>
          </div>
          <div id="page-window">
            <Switch>
              <Route path="/events">
                <Events />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
