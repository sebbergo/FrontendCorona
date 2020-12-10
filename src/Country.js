import facade from "./apiFacade.js";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import "./App.css";

function Country() {
  let obj = {
    Country: "",
    Continent: "",
    Date: "",
    TotalCases: "",
    NewCases: "",
    TotalDeaths: "",
    NewDeaths: "",
    CaseFatalityRatio: "",
    DailyIncidenceConfirmedCases: "",
    SevenDaySmoothedDailyChange: "",
    CumulativeTotal: "",
  };

  const [country, setCountry] = useState(obj);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    facade.fetchCountries().then((data) => setCountryList(data));
  }, []);

  const handleSelect = (evt) => {
    console.log(evt);
    facade.fetchCountry(evt).then((data) => setCountry(data));
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          bsStyle="default"
          bsSize="small"
          style={{ maxHeight: "50px" }}
          title={"Qty"}
          key={1}
          id="dropdown-size-small"
          variant="success"
          id="dropdown-basic"
        >
          Select Country
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          {countryList.map((country) => (
            <Dropdown.Item onSelect={handleSelect} eventKey={country.Country}>
              {country.Country}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Table table table-striped table-bordered table-condensed>
        <tr>
          <thead>
            <th>Country:</th>
          </thead>
          <td>{country.Country} </td>
        </tr>
        <tr>
          <th>Continent:</th>
          <td>{country.Continent}</td>
        </tr>
        <tr>
          <th>Date:</th>
          <td>{country.Date}</td>
        </tr>
        <tr>
          <th>Total Cases:</th>
          <td>{country.TotalCases}</td>
        </tr>
        <tr>
          <th>New Cases:</th>
          <td>{country.NewCases}</td>
        </tr>
        <tr>
          <th>Total Deaths:</th>
          <td>{country.TotalDeaths}</td>
        </tr>
        <tr>
          <th>New Deaths:</th>
          <td>{country.NewDeaths}</td>
        </tr>
        <tr>
          <th>Case Fatality Ratio:</th>
          <td>{country.CaseFatalityRatio}</td>
        </tr>
        <tr>
          <th>Daily Incidence Confirmed Cases:</th>
          <td>{country.DailyIncidenceConfirmedCases}</td>
        </tr>
        <tr>
          <th>Seven Day Smoothed Daily Change:</th>
          <td>{country.SevenDaySmoothedDailyChange}</td>
        </tr>
        <tr>
          <th>Cumulative Total:</th>
          <td>{country.CumulativeTotal}</td>
        </tr>
      </Table>
    </div>
  );
}

export default Country;
