import React from "react";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Login from "./components/Login/Login";
import SideNav from "./components/SideNav/SideNav";
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
                  <SideNav />
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
