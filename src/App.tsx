import "./styles/main.scss";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Login from "./components/Login/Login";
import SideNav from "./components/SideNav/SideNav";
import { AppProvider } from "./context/context";

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
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
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </AppProvider>
  );
}

export default App;
