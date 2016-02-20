import React from 'react'

export default React.createClass({
  render() {
   return   (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">Bet You Wont!</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#bets">Dares</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#about">Create a Dare</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#team">About</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#contact">Team</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )

  }
})
