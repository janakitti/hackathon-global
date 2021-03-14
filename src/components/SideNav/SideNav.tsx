import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppContext } from "../../context/context";

const SideNav = () => {
  const {
    state: { user },
  } = useContext(AppContext);
  return (
    <div id="side-nav">
      <img
        src={"/logo_1.svg"}
        className="login__h1--logo"
        width={100}
        height={100}
      />
      <img src={user.profilePic} id="side-nav__img--pfp"></img>
      <Link to="/">
        <div className="nav-link">
          <img src="/home.svg" className="side-nav__img--nav-icon" />
          <span>Home</span>
        </div>
      </Link>
      <Link to="/events">
        <div className="nav-link">
          <img src="/events.svg" className="side-nav__img--nav-icon" />
          <span>Events</span>
        </div>
      </Link>
    </div>
  );
};

export default SideNav;