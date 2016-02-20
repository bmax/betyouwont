import React from 'react'
import $ from 'jquery';

const url = "http://betyouwontapi.herokuapp.com"
const routes = {
  dares: url + "/dares"
}
export default React.createClass({
    getInitialState() {
      this.initialState = {
        dares: []
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
  render() {
    var results = this.state.dares;
    if (results.length == 0)
        return ( <section id='bets'><h1>empty</h1></section>)
    else {
           return (
            <section id="bets">
                <div classNameName="container">
                    <div className="row text-center">
                    {results.map(function(dare) {
                      return (  <div className="col-md-4" key={dare.id}>
                            <div className="col-restrict-80">
                                <h4 className="service-heading">{dare.dare}</h4>
                                <p className="text-muted">{dare.description}</p>
                                <small style={{color: 'grey'}}><span className="glyphicon glyphicon-map-marker"></span>{dare.location}</small>
                                <h5 style={{margin: '20px'}}>{dare.total_amount}</h5>
                                <p className="text-center">
                                  <button type="button" className="btn btn-primary btn-lg btn-block home-button" data-toggle="modal" data-total_value={dare.total_amount} data-target="#takeModal">Take</button>
                                  <button type="button" className="btn btn-default btn-lg btn-block home-button" data-target="#fundModal">Fund</button>
                                </p>
                            </div>
                        </div> );
                    })}
                    </div>
                </div>
            </section>
        )
  }
}
})

