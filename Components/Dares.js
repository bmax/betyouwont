import React from 'react'
import $ from 'jquery';
import FundModal from './FundModal'
import TakeModal from './TakeModal'


const url = "http://betyouwontapi.herokuapp.com"
const routes = {
  dares: url + "/dares"
}
export default React.createClass({
  getInitialState() {
    this.initialState = {
      dares: [],
      showModalFund: false,
      showModalTake: false
    }
    this.state = this.initialState
    this.grabDares();
    return this.state
  },
  grabDares() {
    console.log("Call API", routes.dares)
    var me = this;
    $.ajax({
        type: "GET",
        url: routes.dares,
        success: function (data) {
          me.setState({dares: data});
      },
        error: function (data) { me.setState({message: "Failure! - " + data.responseJSON['error']}); },
        dataType: 'json'
      });
  },
  showModalFund(dare) {
    console.log("Dare:", dare);
    this.setState({showModalFund: true, dareInfo: dare});
  },
  showModalTake(dare) {
    this.setState({showModalTake: true, dareInfo: dare});
  },
  onClose() {
    this.setState({showModalFund: false, showModalTake: false})
  },
  render() {
    var results = this.state.dares;
    var showFund = this.state.showModalFund;
    var showTake = this.state.showModalTake;
    if (results.length == 0)
        return ( <section id='bets'><h1>empty</h1></section>)
    else {
           return (
            <section id="bets">
                <div classNameName="container">
                    <div className="row text-center">
                    {results.map(function(dare) {
                      var boundClickTake = this.showModalTake.bind(this, dare);
                      var boundClickFund = this.showModalFund.bind(this, dare);
                      return (  <div className="col-md-4" key={dare.id}>
                            <div className="col-restrict-80">
                                <h4 className="service-heading">{dare.dare}</h4>
                                <p className="text-muted desc">{dare.description}</p>
                                <small style={{color: 'grey'}}><span className="glyphicon glyphicon-map-marker"></span>{dare.location}</small>
                                <h5 style={{margin: '20px'}}>{dare.total_amount}</h5>
                                <p className="text-center">
                                  <button type="button" className="btn btn-primary btn-lg btn-block home-button" onClick={boundClickTake}>Take</button>
                                  <button type="button" className="btn btn-default btn-lg btn-block home-button" onClick={boundClickFund}>Fund</button>
                                </p>
                            </div>
                        </div> );
                    }.bind(this))}

                    <TakeModal show={showTake} onClose={this.onClose} dare={this.state.dareInfo}/>
                    <FundModal show={showFund} onClose={this.onClose} dare={this.state.dareInfo}/>

                    </div>
                </div>
            </section>
        )
  }
}
})

