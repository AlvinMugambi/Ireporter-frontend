const React = require("react");
const ReactDOM = require("react-dom");
require("./index.css");

import { Router, Link } from "react-router-dom";

class Redflags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isloaded: false
    };
  }

  componentDidMount() {
    fetch("https://ireporter-drf-api-staging.herokuapp.com/api/redflags/", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: "Bearer " + `${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        if (data.detail) {
          this.props.history.push("/");
        }
        this.setState({
          items: data.results,
          isloaded: true
        });
      });
  }
  render() {
    let isloaded = this.state.isloaded;
    let items = this.state.items;
    if (!isloaded) {
      return <div>Loading..</div>;
    } else {
      return (
        <div className="container">
          <h1>Redflags</h1>
          <a href="/interventions">
            <button id="btn_next" className="btn btn-success btn-block">
              Interventions
            </button>
          </a>
          <a href="/create_redflag">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              Post Redflag
            </button>
          </a>
          <div className="row">
            {items.map(item => (
              <div key={item.id} className="col-sm-4">
                <div className="card" style={{ width: 18 + "rem" }}>
                  <img
                    className="card-img-top"
                    src="../images/redflag.jpeg"
                    alt="Card image cap"
                    fluid="true"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.comment}</p>
                    <a href="#" className="btn btn-primary">
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

export default Redflags;
