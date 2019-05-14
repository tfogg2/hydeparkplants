import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
import { Link } from 'react-router-dom'
import Category from './Category'

class HomeCategory extends Component {
  render(){
    return(
      <Link to={`/${this.props.url}/`} title={this.props.title}>
        <div className="home-cat">
          <h2>{this.props.title}</h2>
        </div>
      </Link>
    )
  }
}

export default HomeCategory
