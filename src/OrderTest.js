import facade from "./apiFacade.js";
import React, { useState, useEffect } from "react";

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
  };

  return (
    <div>
      <br></br>
      <h2 style={{ marginBottom: "20px" }}>Order Test</h2>
      <form onChange={onChange}>
        <input type="text" placeholder="Country" id="country" /> <br />
        <input type="text" placeholder="City" id="city" /> <br />
        <input type="text" placeholder="Zip" id="zip" /> <br />
        <input type="text" placeholder="Street" id="street" /> <br />
        <button className="button-register" onClick={performOrderTest}>
          Order
        </button>
      </form>
    </div>
  );
}

export default OrderTest;
