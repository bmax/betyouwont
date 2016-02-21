import React from 'react'
import { authenticate, routes } from '../src/actions'
import classNames from 'classnames';

export default React.createClass({
  render() {
   return   (
<div>
<div className="modal" id="createModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">

      <div className="modal-body"  style={{textAlign: 'center'}}>
        <h3>Create a dare <span style={{fontSize:'20px'}}>or</span> Do a dare?</h3>
        <br />
        <br />
        <div className="btn-group btn-toggle">
          <button className="btn btn-lg btn-default" id="create" onClick={this.handleSwitch}>CREATE</button>
          <button className="btn btn-lg btn-primary active" id="do" >DO</button>
        </div>
        <p>Your Capital One account will be credited <span id="takeModalValue">$50.00</span> once the challenge has been completed</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Take</button>
      </div>
    </div>
  </div>
</div>
</div>
    )

  }
})











