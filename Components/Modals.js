import React from 'react'
import $ from 'jquery'

export default React.createClass({
  render() {
   return   (
<div>
<div className="modal fade" id="takeModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">

      <div className="modal-body">
        <h2>Take on this challenge?</h2>
        <br />
        <br />
        <p>Your Capital One account will be credited <span id="takeModalValue">$50.00</span> once the challenge has been completed</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Take</button>
      </div>
    </div>
  </div>
</div><div className="modal fade" id="fundModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">

      <div className="modal-body">
        <h2>Help fund this challenge?</h2>
        <br />
        <br />
        <p>I'd like to add $<input type="text" className="form-control modal-input" id="fundModalValue" size="3"></input> to this challenge</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Fund</button>
      </div>
    </div>
  </div>
</div>
</div>
    )

  }
})
