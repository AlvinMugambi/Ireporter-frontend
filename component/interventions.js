const React = require("react");
const ReactDOM = require("react-dom");
require("./index.css");

import { Router, Link } from "react-router-dom";
import singleIntervention from "./single_intervention.js";

class Interventions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isloaded: false,
      single: false
    };

    this.singleIntervention = this.singleIntervention.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://ireporter-drf-api-staging.herokuapp.com/api/interventions/",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + `${localStorage.getItem("token")}`
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.detail) {
          this.props.history.push("/");
        }
        this.setState({
          items: data.data,
          isloaded: true
        });
      });
  }

  singleIntervention() {
    console.log(event.target.id);
    var url = event.target.id;

    fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: "Bearer " + `${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.detail) {
          this.props.history.push("/");
        }
        this.setState({
          items: data.data,
          single: true
        });
        console.log(data.data);
        this.props.history.push("/interventions?id=" + data.data.id);
      });
  }

  render() {
    let isloaded = this.state.isloaded;
    let items = this.state.items;
    let single = this.state.single;
    if (!isloaded) {
      return <div>Loading..</div>;
    }
    if (single) {
      return (
        <div>
          <img src={items.Image} class="img-fluid" alt="Responsive image" />
        </div>
      );
    } else {
      return (
        <div className="container bo">
          <h1>Interventions</h1>
          <a href="/redflags">
            <button id="btn_next" className="btn btn-success btn-block">
              Redflags
            </button>
          </a>
          <a href="/create_intervention">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              Post Intervention
            </button>
          </a>

          <div className="row">
            {items.map(item => (
              <div key={item.id} className="col-sm-4">
                <div className="card" style={{ width: 18 + "rem" }}>
                  <img
                    className="card-img-top"
                    src="../images/intervention.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.comment.slice(0, 10)}</p>
                    <a
                      href="#"
                      id={item.url}
                      onClick={this.singleIntervention}
                      className="btn btn-primary"
                    >
                      More details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Interventions;
