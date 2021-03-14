import React from "react";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import { AppProvider } from "./context/context";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <div id="router-container">
            <div id="side-nav">
              <Link to="/">
                <div className="nav-link">Home</div>
              </Link>
              <Link to="/events">
                <div className="nav-link">Events</div>
              </Link>
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
    </AppProvider>
  );
}

export default App;
