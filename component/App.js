import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './signup.js'
import Interventions from './interventions.js'
import singleIntervention from './single_intervention.js'
import Redflags from './redflags.js'
import CreateIntervention from './create_intervention.js'
import CreateRedflag from './create_redflag.js'


class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Route exact path='/' component = { Login } />
        <Route exact path='/signup' component = { Signup } />
        <Route exact path='/interventions' component = { Interventions } />
        <Route exact path='/single-intervention' component = { singleIntervention } />
        <Route exact path='/create_intervention' component = { CreateIntervention } />
        <Route exact path='/create_redflag' component = { CreateRedflag } />
        <Route exact path='/redflags' component = { Redflags } />
      </BrowserRouter>
    )
  }
}

export default App;
