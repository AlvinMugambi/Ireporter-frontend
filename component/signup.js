const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

import { Form, Button, Image } from 'react-bootstrap'

class Signup extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      "first_name": "",
      "other_name": "",
      "last_name": "",
      "email": "",
      "username": "",
      "mobile_number": "",
      "password": ""
    }
  }

  handleChange = (e) =>{
    this.setState({
      first_name: document.getElementById('first_name').value,
      other_name: document.getElementById('other_name').value,
      last_name: document.getElementById('last_name').value,
      email: document.getElementById('email').value,
      username: document.getElementById('username').value,
      mobile_number: document.getElementById('mobile_number').value,
      password: document.getElementById('password').value,
    });
  };

  handleSubmit = (e) =>{
    e.preventDefault()

    fetch('https://ireporter-drf-api-staging.herokuapp.com/api/auth/signup/', {
      method: 'POST',
      body: JSON.stringify({
        first_name: this.state.first_name,
        other_name: this.state.other_name,
        last_name: this.state.last_name,
        email: this.state.email,
        username: this.state.username,
        mobile_number: this.state.mobile_number,
        password: this.state.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    .then(response => response.json())
    .then(json => {
      if(json.token){
        console.log(json)
        // this.props.history.push('/login')
        fetch('https://ireporter-drf-api-staging.herokuapp.com/api/auth/activate/', {
          method: 'POST',
          body: JSON.stringify({
            uid: json.id,
            token: json.token,

          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          fetch('https://ireporter-drf-api-staging.herokuapp.com/api/auth/login/', {
            method: 'POST',
            body: JSON.stringify({
              username: this.state.email,
              password: this.state.password,

            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.props.history.push('/')
          })
        })


      }
      else if (json.first_name) {
        try {
          var error = document.getElementById("First-name-error")
          error.innerHTML = json.first_name[0]
          error.style.color = "red"
        } catch (e) {
          console.log(e);
        }

      }
      else if (json.last_name) {
        try {
          var error = document.getElementById("last-name-error")
          error.innerHTML = json.last_name[0]
          error.style.color = "red"
        } catch (e) {
          console.log(e);
        }

      }
      else if (json.other_name) {
        try {
          var error = document.getElementById("other-name-error")
          error.innerHTML = json.other_name[0]
          error.style.color = "red"
        } catch (e) {
          console.log(e);
        }

      }
      else if (json.username) {
        try {
          var error = document.getElementById("username-error")
          error.innerHTML = json.username[0]
          error.style.color = "red"
        } catch (e) {
          console.log(e);
        }

      }
      else if (json.mobile_number) {
        try {
          var error = document.getElementById("phone-number-error")
          error.innerHTML = json.mobile_number[0]
          error.style.color = "red"
        } catch (e) {
          console.log(e);
        }

      }
      else if (json.email) {
        try {
          var error = document.getElementById("email-error")
          error.innerHTML = json.email[0]
          error.style.color = "red"
        } catch (e) {
          console.log(e);
        }

      }
      else if (json.password) {
        try {
          var error = document.getElementById("password-error")
          error.innerHTML = json.password[0]
          error.style.color = "red"
        } catch (e) {
          console.log(e);
        }

      }

      console.log(this.state);
      console.log(json.token);
      console.log(json);
    });

  }

  render(){

    return(
      <div className="row">
        <div className="col-md-4 col-sm-4 col-xs-12"></div>
        <div className="col-md-4 col-sm-4 col-xs-12">
          <Image id="logo" src="/images/fist.jpeg" fluid />;
          <Form className="form-container" onSubmit = { this.handleSubmit }>
            <h1>Welcome!</h1>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="name" placeholder="Enter first name" id="first_name" onChange = { this.handleChange }/>
              <p id="First-name-error"></p>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" placeholder="Enter last name" id="last_name" onChange = { this.handleChange }/>
              <p id="last-name-error"></p>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Other Name</Form.Label>
              <Form.Control type="name" placeholder="Enter other name" id="other_name" onChange = { this.handleChange }/>
              <p id="other-name-error"></p>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="name" placeholder="Enter a username" id="username" onChange = { this.handleChange }/>
              <p id="username-error"></p>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="name" placeholder="Enter a phone number" id="mobile_number" onChange = { this.handleChange }/>
              <p id="phone-number-error"></p>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" id="email" onChange = { this.handleChange }/>
              <p id="email-error"></p>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" id="password" onChange = { this.handleChange }/>
              <p id="password-error"></p>
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button className="btn btn-success btn-block" variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12"></div>
      </div>
    )
  }


}


export default Signup;
