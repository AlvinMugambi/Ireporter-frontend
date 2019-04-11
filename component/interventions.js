const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css')

import { Router } from "react-router-dom";

class Interventions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isloaded: false,
    }
  }

  componentDidMount(){

    fetch('https://ireporter-drf-api-staging.herokuapp.com/api/interventions/', {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": "Bearer " + `${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        items: data.data,
        isloaded: true

      })
    })
  }
  render(){
    let isloaded = this.state.isloaded
    let items = this.state.items
    if (!isloaded){

      return (<div>Loading..</div>)
    }

    else {
      console.log(items);
      return(
        <div>
        {items.map(item =>
          <div className="card" style={{width: 18+'rem'}}>
            <img className="card-img-top" src="..." alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.comment}</p>
              <a href="#" className="btn btn-primary">More details</a>
            </div>
        </div>)}
        </div>

      )
    }

  }
}


export default Interventions;
