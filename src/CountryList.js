import facade from "./apiFacade.js";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";

function CountryList() {
  let obj = {
    country: "",
    continent: "",
    date: "",
    totalCases: "",
    newCases: "",
    totalDeaths: "",
    newDeaths: "",
    caseFatalityRatio: "",
    dailyIncidenceConfirmedCases: "",
  };

  const [dataFromServer, setDataFromServer] = useState(obj);

  /* useEffect(() => {
    facade.fetchCountry().then((data) => setDataFromServer(data));
  }, []); */

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Table table table-striped table-bordered table-condensed>
        <tr>
          <thead>
            <th>Country:</th>
          </thead>
          <td>{dataFromServer.country} Danmark</td>
        </tr>
        <tr>
          <th>Continent:</th>
          <td>{dataFromServer.continent}</td>
        </tr>
        <tr>
          <th>Date:</th>
          <td>{dataFromServer.date}</td>
        </tr>
        <tr>
          <th>Total Cases:</th>
          <td>{dataFromServer.totalCases}</td>
        </tr>
        <tr>
          <th>New Cases:</th>
          <td>{dataFromServer.newCases}</td>
        </tr>
        <tr>
          <th>Total Deaths:</th>
          <td>{dataFromServer.totalDeaths}</td>
        </tr>
        <tr>
          <th>New Deaths:</th>
          <td>{dataFromServer.newDeaths}</td>
        </tr>
        <tr>
          <th>Case Fatality Ratio:</th>
          <td>{dataFromServer.caseFatalityRatio}</td>
        </tr>
        <tr>
          <th>Daily Incidence Confirmed Cases:</th>
          <td>{dataFromServer.dailyIncidenceConfirmedCases}</td>
        </tr>
      </Table>
    </div>
  );
}

export default CountryList;
