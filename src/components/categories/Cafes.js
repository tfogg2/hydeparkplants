import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CafeItems from './CafeItems'
import { ScrollView } from 'react';


class Cafes extends Component {
  constructor(props) {
      super(props);
      this.state = {
        page: 0,
        limit: 1
      }
    }

  handleNext = () => {
    this.setState(prevState => {
        return {
          page: prevState.page + 1,
          limit: prevState.limit + 1,
        }
     })
  }

  handleBack = () => {
    this.setState(prevState => {
        return {
          page: prevState.page - 1,
          limit: prevState.limit - 1,
        }
     })
  }

  handleTouchStart = () => {
    this.setState(prevState => {
        return {
          page: prevState.page + 1,
          limit: prevState.limit + 1,
        }
     })
  }

  render(){
    const Length = {
      value: CafeItems.filter(
          ({ category }) =>
            category === "Cafes"
        ).length
    }
    return(
      <div className="category">
        {CafeItems.slice(this.state.page, this.state.limit).filter(
            ({ category }) =>
              category === "Cafes"
          ).map((item, index) => {
            const note = {
              handle: item.handle,
            }
            const id = {
              value: item.id
            }
            const page = {
              value: this.state.page + 1
            }
            return (
              <div onTouchStart={this.handleTouchStart}>
                <div className="category-header">
                  {Images.filter(({handle}) => (
                    handle === note.handle
                  )).slice(0, 1).map(({ image, handle }) => {
                    return(
                      <div>
                        <img className="header-image" src={image} alt={handle}/>
                      </div>
                    )
                  })}
                  {this.state.page > 0 ? <button className="cycle-btn back-btn" onClick={this.handleBack}></button> : " " }
                  {Length.value > page.value ? <button className="cycle-btn next-btn" onClick={this.handleNext}></button> : " " }
                  <div className="header-text">
                    <h2>{item.title}</h2>
                    <a href={item.address_link} target="_blank">{item.address}</a>
                    <p>{item.description}</p>
                  </div>
                </div>
                {Images.filter(({handle}) => (
                  handle === note.handle
                )).slice(1, 10).map(({ image, handle }) => {
                  return(
                    <div>
                      <img src={image} alt={handle}/>
                    </div>
                  )
                })}
              </div>
            )
        })}
      </div>
    )
  }
}

export default Cafes


const Images = [
  {image: require('../../assets/cafes/flightpath-1.png'), handle:"quacks"},
  {image: require('../../assets/cafes/zilker.png'), handle:"quacks"},
  {image: require('../../assets/cafes/flightpath-1.png'), handle:"flight"},
  {image: require('../../assets/cafes/flightpath-2.jpg'), handle:"flight"},
  {image: require('../../assets/cafes/zilker.png'), handle:"quacks"},
]
