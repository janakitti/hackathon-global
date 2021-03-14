import React from "react";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Login from "./components/Login/Login";
import { AppProvider } from "./context/context";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Router>
                <div id="router-container">
                  <div id="side-nav">
                    <img
                      src="/logo_1.svg"
                      className="login__h1--logo"
                      width={100}
                      height={100}
                    />
                    <img src="/hacker_pfp.svg" id="side-nav__img--pfp"></img>
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
            </Route>
          </Switch>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
