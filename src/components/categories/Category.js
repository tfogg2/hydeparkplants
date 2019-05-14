import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Items from './Items'

const ListCategories = (Categories) => (
  Categories.map((category) => {
    return (
      <li>
        <NavLink exact="true" to={ '/' + category } key={category} className={`${category}`}>
          {category}
        </NavLink>
      </li>
    )
  })
)

class HomeCategory extends Component {
  render(){
    return(
      <div>
        {Items.map((item, index) => {
            return <h1>{item.title} - {item.category}</h1>
        })}
        {ListCategories(Categories)}
      </div>
    )
  }
}

export default HomeCategory


const uniqueItems = (x, i, array) => array.indexOf(x) === i
const Categories = Items.map(item => item.category).filter(
  uniqueItems
)

Categories.sort()
