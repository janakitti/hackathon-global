import { useContext } from "react";
import {
  useHistory,
  useLocation,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { logoutUser } from "../../context/actions/UserActions";
import { AppContext } from "../../context/context";

const SideNav = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(AppContext);
  const location = useLocation();
  const history = useHistory();

  const logOut = () => {
    dispatch(logoutUser());
    history.push("/home");
  };

  return (
    <div id="side-nav">
      <img
        src={"/logo_1.svg"}
        className="login__h1--logo"
        width={100}
        height={100}
      />
      <img src={user.profilePic} id="side-nav__img--pfp"></img>
      <h1 id="side-nav__h1--username">{user.username}</h1>
      <Link to="/">
        <div
          className={
            location.pathname === "/" ? "nav-link selected" : "nav-link"
          }
        >
          <img
            src={location.pathname === "/" ? "/home_selected.svg" : "/home.svg"}
            className="side-nav__img--nav-icon"
          />
          <span>Home</span>
        </div>
      </Link>
      <Link to="/events">
        <div
          className={
            location.pathname === "/events" ? "nav-link selected" : "nav-link"
          }
        >
          <img
            src={
              location.pathname === "/events"
                ? "/events_selected.svg"
                : "/events.svg"
            }
            className="side-nav__img--nav-icon"
          />
          <span>Events</span>
        </div>
      </Link>
      {user.type === "public" ? (
        <div className="side-nav__div--account-action">
          <a href="/login">Log in</a> to for full access to the Dashboard!
        </div>
      ) : (
        <div className="side-nav__div--account-action">
          <a href="#" onClick={logOut}>
            Log out
          </a>
        </div>
      )}
    </div>
  );
};

export default SideNav;
