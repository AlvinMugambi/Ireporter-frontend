import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './signup.js'
import Interventions from './interventions.js'


class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Route exact path='/' component = { Login } />
        <Route exact path='/signup' component = { Signup } />
        <Route exact path='/interventions' component = { Interventions } />
      </BrowserRouter>
    )
  }
}

export default App;
