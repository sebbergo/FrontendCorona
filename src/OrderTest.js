import React, { useState } from "react";
import "./OrderTest.css";
function OrderTest({ orderTest }) {
  let obj = {
    country: "",
    city: "",
    zip: "",
    street: "",
  };

  const [orderTestObj, setOrderTestObj] = useState(obj);

  const onChange = (evt) => {
    setOrderTestObj({
      ...orderTestObj,
      [evt.target.id]: evt.target.value,
    });
  };

  const performOrderTest = (evt) => {
    evt.preventDefault();

    orderTest(
      orderTestObj.country,
      orderTestObj.city,
      orderTestObj.zip,
      orderTestObj.street
    );
    setOrderTestObj({ ...obj });
  };

  return (
    <div>
      <br></br>

      <div className="center">
        <h2 style={{ marginBottom: "30px" }}>Order a COVID-19 test</h2>
        <form onChange={onChange}>
          <input
            className="submissionfield"
            type="text"
            placeholder="Country"
            id="country"
            value={orderTestObj.country}
          />{" "}
          <br />
          <input
            className="submissionfield"
            type="text"
            placeholder="City"
            id="city"
            value={orderTestObj.city}
          />{" "}
          <br />
          <input
            className="submissionfield"
            type="text"
            placeholder="Zip"
            id="zip"
            value={orderTestObj.zip}
          />{" "}
          <br />
          <input
            className="submissionfield"
            type="text"
            placeholder="Street"
            id="street"
            value={orderTestObj.street}
          />{" "}
          <br />
          <button className="button-ordertest" onClick={performOrderTest}>
            Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderTest;
