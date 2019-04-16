const React = require("react");
const ReactDOM = require("react-dom");
require("./index.css");

import { Router, Link } from "react-router-dom";

function singleIntervention() {
  // console.log(event.target.id);
  try {
    var url = event.target.id;
  } catch (e) {
    console.log(e);
  }

  fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + `${localStorage.getItem("token")}`
    }
  })
    .then(res => console.log(res.json()))
    .then(data => {
      // if (data.detail){
      //   this.props.history.push('/')
      // }
      // this.setState({
      //   items: data.data,
      //   single: true
      // });
      console.log(this.state);
    });
  return <h1>Aa</h1>;
}

export default singleIntervention;
