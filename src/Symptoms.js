import React from "react";
import symptoms from "./images/symptoms2.jpg";
import Image from "react-bootstrap/Image";
import OrderTest from "./OrderTest";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  BrowserRouter as Router,
} from "react-router-dom";
import "./login.css";

function Symptoms() {
  return (
    <Router>
      <div>
        <Route path="/symptoms">
          <Image src={symptoms} fluid />

          <h3>Watch for symptoms</h3>

          <h5>
            People with COVID-19 have had a wide range of symptoms reported –
            ranging from mild symptoms to severe illness. <br></br>Symptoms may appear
            2-14 days after exposure to the virus. People with these symptoms
            may have COVID-19:
          </h5>
          <ul>
            <li>Fever or chills</li>
            <li>Cough</li>
            <li>Shortness of breath or difficulty breathing </li>
            <li>Fatigue </li>
            <li>Muscle or body aches </li>
            <li>Headache </li>
            <li>New loss of taste or smell </li>
            <li>Sore throat </li>
            <li>Congestion or runny nose </li>
            <li>Nausea or vomiting </li>
            <li>Diarrhea </li>
          </ul>
          <Link to={"/ordertest"}>
            <button className="button-login">Order a test!</button>
          </Link>
        </Route>

        <Switch>
          <Route path="/ordertest">
            <OrderTest />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Symptoms;
