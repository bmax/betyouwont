import React from 'react'
import {Modal}from 'react-bootstrap'

export default React.createClass({
  getInitialState() {
    this.initalState = { fundModalValue: '' }
    this.state = this.initalState;
    return this.state;
  },
  render() {
    const { show, onClose, dare, fundHandler, fundHandlerChange } = this.props
    console.log(this.state);
    return (
      <div>
    <Modal show={show} className="modal fade" id="fundModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">

        <div className="modal-body">
          <h2>Help fund this challenge?</h2>
          <br />
          <br />
          <p>I'd like to add $ <input type="text" className="form-control modal-input" id="fundModalValue" onChange={fundHandlerChange} size="3"></input> to this challenge</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" onClick={onClose}>Close</button>
          <button type="button" className="btn btn-primary" onClick={fundHandler}>Fund</button>
        </div>

    </Modal>
    </div>
)
}
});