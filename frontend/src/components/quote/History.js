import React, { useEffect, useState, Fragment } from "react";
import { Link} from 'react-router-dom'
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
    <h1 className="large text-primary">Quote History</h1>
    <p className="lead">
      <i className="fas fa-file-alt"></i> Your Quote History!
    </p>
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
    <Link className="btn btn-light my-1" to='/dashboard'>Go Back</Link>
</Fragment>
  );
}
