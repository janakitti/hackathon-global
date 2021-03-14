import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../context/context";
import { loginUser } from "../../context/actions/UserActions";

const mockCredentials = {
  username: "Goosey",
  email: "hack@hon.com",
  password: "1234",
  type: "hacker",
  profilePic: "/hacker_pfp.svg",
};

const Login = () => {
  const history = useHistory();
  const { dispatch } = useContext(AppContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      user.email === mockCredentials.email &&
      user.password === mockCredentials.password
    ) {
      setLoginError("");
      dispatch(
        loginUser({
          username: mockCredentials.username,
          email: mockCredentials.email,
          type: "hacker",
          profilePic: "/hacker_pfp.svg",
        })
      );
      history.push("/");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  return (
    <div id="login__div--login-wrapper">
      <div id="login__div--login-card">
        <img
          src="/logo_1.svg"
          className="login__h1--logo"
          width={150}
          height={150}
        />
        <form onSubmit={handleSubmit}>
          <input
            className="login__input--text-input"
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          ></input>
          <input
            className="login__input--text-input"
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          ></input>
          <Button
            variant="primary"
            type="submit"
            id="login__span--login-button"
          >
            Log in
          </Button>
        </form>
        <span id="login__span--login-error">{loginError}</span>
      </div>
    </div>
  );
};

export default Login;
