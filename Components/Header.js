import React from 'react'

export default React.createClass({
  render() {
   return (
    <header>
      <video autoPlay mute id="background">
      <source src="dare.mp4" type="video/mp4" />
      </video>
          <div className="container">
              <div className="intro-text">
                  <div className="intro-lead-in">Bet You Wont!</div>
                  <div className="intro-heading">Would you do it?</div>
                  <a href="#bets" className="page-scroll btn btn-xl">Tell Me More</a>
              </div>
          </div>
    </header>
    )
  }
});