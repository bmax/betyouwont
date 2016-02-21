import React from 'react'
import { authenticate, routes } from '../src/actions'
import classNames from 'classnames';
import $ from 'jquery';
import cookie from 'react-cookie';

export default React.createClass({
  getInitialState() {
    this.state = {displayDo: true, displayCreate: false}
    return this.state
  },
  handleSwitch(e) {
    if (e.target.id == 'do') {
      this.setState({displayDo: !this.state.displayDo, displayCreate: !this.state.displayCreate})
    }
    if (e.target.id == 'create') {
      this.setState({displayCreate: !this.state.displayCreate, displayDo: !this.state.displayDo })
    }
  },
  createDare() {
    var token = cookie.load('token');
    $.ajax({
      type: "POST",
      url: routes.createDare,
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Token ' + token
      },
      data: {dare: $('#inputDareName').val(), description: $('#inputDareDescription').val(), location: $('#inputDareLocation').val()},
      success: function (data) {
        console.log(data);
        $('#createModal').hide();
    },
      error: function (data) { console.log(data.statusText); },
      dataType: 'json'
    });
  },
  render() {
    var displayDo = (this.state.displayDo ? "block" : "none");
    var displayCreate = (this.state.displayCreate ? "block" : "none");
   return   (
<div>
<div className="modal" id="createModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">

      <div className="modal-body"  style={{textAlign: 'center'}}>
        <h3>Create a dare</h3>
        <br />
        <br />
        <div style={{width: "80%", margin: "0 auto"}}>
          <form>
            <div className="form-group">
              <label htmlFor="inputDareName">Dare name</label>
              <input type="text" className="form-control" id="inputDareName" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="inputDareDescription">Description</label>
              <textarea id="inputDareDescription" className="form-control" rows="3" placeholder="Description" ></textarea>
            </div>
            <input type="hidden" id="inputDareLocation" value="University of Illinois" />
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={this.createDare}>Submit</button>
      </div>
    </div>
  </div>
</div>
</div>
    )

  }
})











