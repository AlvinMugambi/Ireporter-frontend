const React = require('react');
const ReactDOM = require('react-dom');
import { BrowserRouter } from "react-router-dom";
import App from './App.js';
import Navbar from './navbar.js';

ReactDOM.render(
  <App />, document.getElementById('app')
  )

ReactDOM.render(
  <Navbar />, document.getElementById('navbarr')
  )
