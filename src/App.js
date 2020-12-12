import React, { useState } from "react";
import facade from "./apiFacade";
import LogIn, { LoggedIn } from "./LogIn.js";
import Header from "./Header.js";
import Country from "./Country.js";
import { Switch, Route } from "react-router-dom";
import Symptoms from "./Symptoms.js";
import "./App.css";
import OrderTest from "./OrderTest.js";
import FooterPage from "./Footer.js";
import Home from "./Home.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

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

  const orderTest = (country, city, zip, street) => {
    facade.orderTest(country, city, zip, street).catch((err) => {
      setError("Du mangler at udfylde et af felterne");
    });
  };

  return (
    <div>
      <Header loggedIn={loggedIn} />
      <div className="main-container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/country">
            <Country />
          </Route>

          <Route path="/symptoms">
            <Symptoms />
          </Route>

          <Route path="/orderTest">
            <OrderTest orderTest={orderTest} />
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
              <Route exact path="/logIn">
                <LoggedIn logout={logout} />
              </Route>
            </div>
          )}
        </Switch>
      </div>
      <FooterPage />
    </div>
  );
}
export default App;
