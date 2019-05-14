import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Items from '../categories/Items'
import Splash from './Splash.js'

const ListCategories = (Categories) => (
  Categories.map((category) => {
    return (
      <li>
        <NavLink exact="true" to={ '/' + category } key={category} category={category} className={`${category}`}>
          {category}
        </NavLink>
      </li>
    )
  })
)

class Content extends Component {
  render(){
    return(
      <div>
        <Splash />
      </div>
    )
  }
}

export default Content


const uniqueItems = (x, i, array) => array.indexOf(x) === i
const Categories = Items.map(item => item.category).filter(
  uniqueItems
)

Categories.sort()
