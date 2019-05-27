import React, { Component } from 'react'


class Splash extends Component{
  render(){
    return(
      <div className="home-splash">
        <div className="splash">
          <img className="splash-logo" src={require('../../assets/hpp.com.png')} />
          <div className="splash-copy">
            <p><b>Hyde Park Plants</b>
               <br/>Now offering the Mother of Millions succulent from Madagascar in a 100% biodegradeable planter.
               <br/><br/>One for $10 and two for $15. We're able to deliver anywhere in Austin, TX.
               <br/><br/>We accept Cash, Venmo or Apple Pay. DM if interested.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;
