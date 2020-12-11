import React, { useState, useEffect } from "react";
import facade from "./apiFacade";
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import "./login.css";
import Register from "./Register";

function LogIn({ login, register }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();

    login(loginCredentials.username, loginCredentials.password);
  };

  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  let match = useRouteMatch();

  return (
    <Router>
      <div>
        <br></br>
        <h2 style={{ marginBottom: "20px" }}>Login</h2>
        <form onChange={onChange}>
          <input placeholder="User Name" id="username" />
          <input type="password" placeholder="Password" id="password" />

          <button className="button-login" onClick={performLogin}>
            Login
          </button>
        </form>

        <Link to={`${match.url}/register`}>
          {(console.log(match.url), console.log(match.path))}
          <button className="button-register">Press here to register</button>
        </Link>

        <Switch>
          <Route path={`${match.path}/register`}>
            <Register register={register} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function LoggedIn({ logout }) {
  const [dataFromServer, setDataFromServer] = useState("Loading...");

  useEffect(() => {
    facade.fetchData().then((data) => setDataFromServer(data.msg));
  }, [dataFromServer]);

  return (
    <div>
      <h2>Velkommen {facade.getEmail()}! </h2>
      <h3>{dataFromServer}</h3>
      <button className="button-login" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default LogIn;
export { LoggedIn };
