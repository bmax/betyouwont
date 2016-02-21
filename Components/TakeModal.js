import React from 'react'
import {Modal}from 'react-bootstrap'

export default React.createClass({
  render() {
    const { show, onClose, dare } = this.props
   return   (
<div>
<Modal show={show} className="modal fade" id="takeModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">


      <div className="modal-body">
        <h2>Take on this challenge?</h2>
        <br />
        <br />
        <p>Your Capital One account will be credited <span id="takeModalValue">{dare ? dare.total_amount : 0}</span> once the challenge has been completed</p>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-default" onClick={onClose}>Close</button>
        <button type="button" className="btn btn-primary">Take</button>
      </div>

</Modal>
</div>
    )

  }
})
