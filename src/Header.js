import React from "react";
import { NavLink, Route, useParams, useRouteMatch } from "react-router-dom";

function Header({ loggedIn }) {
  return (
    <div>
      <ul className="header">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>

        {loggedIn ? (
          <li>
            <NavLink activeClassName="active" to="/logIn">
              Your account
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink activeClassName="active" to="/logIn">
              Login
            </NavLink>
          </li>
        )}

        <li>
          <NavLink activeClassName="active" to="/country">
            Country
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/symptoms">
            Symptoms
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/ordertest">
            Order Test
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
