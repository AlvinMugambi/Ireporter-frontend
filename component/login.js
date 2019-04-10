const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

import { Form, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      user_name: '',
      password: '',
      loggedin: false
    }
  }

  handleChange2 = (e) =>{
    this.setState({
      user_name: document.getElementById('username').value,
      password: document.getElementById('password').value,
    });
  };

  handleSubmit = (e) =>{
    e.preventDefault()

    let { user_name, password } = this.state

    fetch('https://ireporter-drf-api-staging.herokuapp.com/api/auth/login/', {
      method: 'POST',
      body: JSON.stringify({
        username: user_name,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    .then(response => response.json())
    .then(json => {
      if (json.token){
        this.setState({'loggedin': true})
        localStorage.setItem('token', json.token)
        console.log(localStorage.getItem('token'))
        console.log(this.props)
        this.props.history.push('/signup')
      }
      else if (json.message) {
        try {
          var error = document.getElementById("login-error")
          error.innerHTML = json.message
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
          <Image id="logo" src="./images/fist.jpeg" fluid />;
          <Form className="form-container" onSubmit = { this.handleSubmit }>
            <h1>Welcome Back!</h1>
            <Form.Group controlId="formBasicEmail">
              <p id="login-error" ></p>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" id="username" onChange = { this.handleChange2 }/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" id="password" onChange = { this.handleChange2 }/>
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button className="btn btn-success btn-block" variant="primary" type="submit">
              Submit
            </Button>
            <p></p>
            Don't have an Account with us? No worries!<Link to="/signup"> Signup </Link>
        </Form>
      </div>
      <div className="col-md-4 col-sm-4 col-xs-12"></div>
    </div>
  )
}
}

export default Login;
