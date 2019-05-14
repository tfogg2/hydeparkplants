import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Park extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    }
  }


  render(){
    return(
      <div className="category">
        <h1>{this.state.title}</h1>
      </div>
    )
  }
}

export default Park
