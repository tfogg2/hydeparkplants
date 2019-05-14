import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom'


class Dropdown extends Component{
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render(){
    const{list} = this.props
    const{listOpen, headerTitle} = this.state
    const ddClass = this.state.listOpen ? 'dd-open dd-wrapper' : 'dd-wrapper'
    return(
      <div className={ddClass}>
        <div className="dd-header" onClick={() => this.toggleList()}>
           <img className="dd-btn-open" src={require('../assets/close-btn-full.svg')} alt="Menu" />
           <img className="dd-btn"src={require('../assets/menu-btn-full.svg')} alt="Menu" />
        </div>
         <ul className="dd-list">
         {list.map((item) => (
            <NavLink to={item.url}><li className="dd-list-item" onClick={() => this.toggleList()}>{item.title}</li></NavLink>
         ))}
        </ul>
      </div>
    )
  }
}

export default Dropdown;
