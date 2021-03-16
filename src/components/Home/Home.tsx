import { useContext } from "react";
import { AppContext } from "../../context/context";

const Home = () => {
  const {
    state: { user },
  } = useContext(AppContext);

  return (
    <div className="dashboard__div--page">
      <div className="dashboard__div--inner-container">
        <div className="home__div--card">
          <h1 id="home__h1--welcome">
            {user.type === "public" ? "Hey there," : "Welcome back, "}
            {user.username} 👋
          </h1>
        </div>
        <div id="home__card-container">
          <div
            className="home__card"
            style={{ backgroundImage: `url("./resources.svg")` }}
          >
            <div className="home__card-body" id="home__card--resources">
              Resources
            </div>
          </div>
          <div
            className="home__card"
            style={{ backgroundImage: `url("./mentors.svg")` }}
          >
            <div className="home__card-body" id="home__card--mentors">
              Mentors
            </div>
          </div>
          <div
            className="home__card"
            style={{ backgroundImage: `url("./faq.svg")` }}
          >
            <div className="home__card-body" id="home__card--faq">
              FAQ
            </div>
          </div>
        </div>
        <span id="home__note">Note: these cards are not yet implemented!</span>
      </div>
    </div>
  );
};

export default Home;
