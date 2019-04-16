const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css')


class Navbar extends React.Component{
  render(){
    return(
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="../images/logop.jpeg" width="50" height="50" alt=""></img>
        <a className="navbar-brand" href="#">i-Reporter</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/interventions">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="">About us</a>
            <a className="nav-item nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Contact us</a>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}

export default Navbar
