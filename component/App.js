import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Signup from './signup.js'


class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Route exact path='/' component = { Login } />
        <Route exact path='/signup' component = { Signup } />
      </BrowserRouter>
    )
  }
}

export default App;
