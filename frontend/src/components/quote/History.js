import React, { useEffect, useState, Fragment, Component } from "react";
import axios from "axios";
import ReactTable from 'react-table';
import "react-table/react-table.css";

class History extends Component {
  constructor(props){
    super(props);
    this.state = {
      histories: []
    }
  }
  componentDidMount(){
  
    axios
      .get("api/quote").then(histories => {
      this.setState({histories: histories})
    })
  }
  
  render() {
    const columns = [
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >GallonNeed</div>),
        accessor: "gallonRequested",
      },
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Date</div>),
        accessor: "date",
        width: 110
      },
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Price</div>),
        accessor: "price"
      },
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Address1</div>),
        accessor: "deliveryAddress1",
        width: 200,
        minWidth: 200
      },
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Address2</div>),
        accessor: "deliveryAddress2"
      },
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >City</div>),
        accessor: "city"
      },
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >State</div>),
        accessor: "state"
      },
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Zipcode</div>),
        accessor: "zipcode"
      },
      {
        Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Total</div>),
        accessor: "totalAmountDue"
      }
     
    ]
    return (
      <ReactTable minRows = {10} columns = { columns }
        data = {this.state.histories.data}
      >
      </ReactTable>
    );
  }
}
export default History;