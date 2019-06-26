import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

export default function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("api/quote")
      .then(result => setData(result.data));
  }, []);

  return (
    <Fragment>
    <ul>
        { data.map(item=>(
            <li key = {item.date}>
                {item.gallonRequested} 
                {item.date}
                {item.price}
                {item.deliveryAddress1}
                {item.deliveryAddress2}
                {item.city}
                {item.state}
                {item.zipcode}
                {item.totalAmountDue}
            </li>
        )) };
    </ul>
</Fragment>
  );
}
