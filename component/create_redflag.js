const React = require("react");
const ReactDOM = require("react-dom");
import { Form, Button } from "react-bootstrap";
require("./index.css");

class CreateRedflag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      comment: "",
      location: "",
      Image: [],
      Video: "",
      incident_type: "",
      isloaded: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange2 = e => {
    this.setState({
      title: document.getElementById("title").value,
      comment: document.getElementById("comment").value,
      location: document.getElementById("location").value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    fetch(
      "https://ireporter-drf-api-staging.herokuapp.com/api/redflags/",
      {
        method: "POST",
        body: JSON.stringify({
          title: this.state.title,
          comment: this.state.comment,
          location: this.state.location
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + `${localStorage.getItem("token")}`
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }
  render() {
    return (
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Report Redflag Incident
            </h5>
            <a href="/redflags">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </a>
          </div>
          <div className="modal-body">
            <Form className="form-container" onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <p id="login-error" />
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a title"
                  id="title"
                  onChange={this.handleChange2}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a comment"
                  id="comment"
                  onChange={this.handleChange2}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Where did the incident happen"
                  id="location"
                  onChange={this.handleChange2}
                  required
                />
              </Form.Group>

              <button type="submit" className="btn btn-primary">
                Report
              </button>
            </Form>
          </div>
          <div className="modal-footer">
            <a href="/redflags">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateRedflag;
