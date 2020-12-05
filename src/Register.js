import React, { useState, useEffect } from "react";
import facade from "./apiFacade";

function Register({ register }) {
  const init = { username: "", password1: "", password2: "" };
  const [registerCredentials, setRegisterCredentials] = useState(init);

  const performRegister = (evt) => {
    evt.preventDefault();

    register(
      registerCredentials.username,
      registerCredentials.password1,
      registerCredentials.password2
    );
  };

  const onChange = (evt) => {
    setRegisterCredentials({
      ...registerCredentials,
      [evt.target.id]: evt.target.value,
    });
  };
  return (
    <div>
      <br></br>
      <h2 style={{ marginBottom: "20px" }}>Register</h2>
      <form onChange={onChange}>
        <input placeholder="User Name" id="username" />
        <input type="password" placeholder="Password" id="password1" />
        <input type="password" placeholder="Password" id="password2" />
        <button className="button-register" onClick={performRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
