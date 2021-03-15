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
            {user.type === "public" ? "Hey there," : "Welcome back,"}{" "}
            {user.username} 👋
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
