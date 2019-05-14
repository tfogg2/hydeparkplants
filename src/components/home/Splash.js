import React, { Component } from 'react'


class Splash extends Component{
  render(){
    return(
      <div className="home-splash">
        <div className="splash">
          <img className="splash-logo" src={require('../../assets/hyde-park-logo.png')} />
          <div className="splash-copy">
            <p><b>Hyde Park Plants</b>
               <br/>100% biodegradeable.
               <br/>Mother of Millions succulent.
               <br/>Stay tuned & DM if interested.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;
