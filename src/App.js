import React, { useState } from "react";
import facade from "./apiFacade";
import LogIn, { LoggedIn } from "./LogIn.js";
import Header from "./Header.js";
import Admin from "./Admin.js";
import User from "./User.js";
import Country from "./Country.js";
import { Switch, Route, Link } from "react-router-dom";
import Symptoms from "./Symptoms.js";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  //const [role, setRole] = useState("");

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };

  const login = (user, pass) => {
    facade
      .login(user, pass)
      .then((res) => setLoggedIn(true), setError(""))
      .catch((err) => {
        setError("Wrong username or password");
      });
  };

  const register = (user, pass1, pass2) => {
    facade
      .register(user, pass1, pass2)
      .then((res) => setLoggedIn(true), setError(""))
      .catch((err) => {
        setError("Passwords has to be matching");
      });
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/country">
          <Country />
        </Route>

        <Route path="/symptoms">
          <Symptoms />
        </Route>

        {!loggedIn ? (
          <div>
            <Route exact path="/logIn">
              <LogIn login={login} register={register} />
              <p>{error}</p>
            </Route>
          </div>
        ) : (
          <div>
            <div>
              <Route exact path="/">
                <LoggedIn />
                <button onClick={logout}>Logout</button>
              </Route>
            </div>
            <div>
              <Route path="/user">
                {facade.getRole() === "user" ? (
                  <User />
                ) : (
                  <p>Du er ikke logget ind som user</p>
                )}
              </Route>
            </div>
            <div>
              <Route path="/admin">
                {facade.getRole() === "admin" ? (
                  <Admin />
                ) : (
                  <p>Du er ikke logget ind som admin</p>
                )}
              </Route>
            </div>
          </div>
        )}
      </Switch>
    </div>
  );
}
export default App;
