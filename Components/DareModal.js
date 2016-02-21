import React from 'react'
import { authenticate, routes } from '../src/actions'
import $ from 'jquery';
import cookie from 'react-cookie';
import {Modal} from 'react-bootstrap'


export default React.createClass({
  getInitialState() {
    return {}
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
    const { show, onClose, dare } = this.props

   return   (
<div>
<Modal show={show} className="modal" id="createModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">

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
        <button type="button" className="btn btn-default" onClick={onClose}>Close</button>
        <button type="button" className="btn btn-primary" onClick={this.createDare}>Submit</button>
      </div>
</Modal>
</div>
    )

  }
})











