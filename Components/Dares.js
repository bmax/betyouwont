import React from 'react'
import $ from 'jquery';
import FundModal from './FundModal'
import TakeModal from './TakeModal'
import cookie from 'react-cookie';
import { authenticate, routes } from '../src/actions'

export default React.createClass({
  getInitialState() {
    this.initialState = {
      dares: [],
      showModalFund: false,
      showModalTake: false
    }
    this.state = this.initialState
    return this.state
  },
  componentDidMount() {
    this.grabDares();
  },
  grabDares() {
    var me = this;
    $.ajax({
        type: "GET",
        url: routes.dares,
        success: function (data) {
          me.setState({dares: data});
      },
        error: function (data) { console.log(data); me.setState({message: "Failure! - " + data.responseJSON['error']}); },
        dataType: 'json'
      });
  },
  fundHandlerChange(e) {
    console.log("Setting fundvalue to", e.target.value);
    this.setState({ [e.target.id]: e.target.value.trim()})
  },
  fundHere() {
    var token = cookie.load('token');
    const data = { dare_id: this.state.dareInfo.id, amount: this.state.fundModalValue }
    var me = this;
    $.ajax({
      type: "POST",
      url: routes.fundDare,
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Token ' + token
      },
      data: data,
      success: function (data) {
        console.log("SuccesS", data);
        me.grabDares();
        me.setState({showModalFund: false});
    },
      error: function (data) { console.log(data.statusText); },
      dataType: 'json'
    });
  },
  showModalFund(dare) {
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
                      return (  <div className="col-md-4" style={{paddingBottom:"10px"}} key={dare.id}>
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
                    <FundModal show={showFund} onClose={this.onClose} fundHandler={this.fundHere} fundHandlerChange={this.fundHandlerChange} dare={this.state.dareInfo}/>

                    </div>
                </div>
            </section>
        )
  }
}
})

