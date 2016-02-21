import React from 'react'
import { authenticate, routes } from '../src/actions'
import classNames from 'classnames';

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
  render() {
    var displayDo = (this.state.displayDo ? "block" : "none");
    var displayCreate = (this.state.displayCreate ? "block" : "none");
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
          <button className="btn btn-lg btn-primary active" id="do" onClick={this.handleSwitch}>DO</button>
        </div>
        <div style={{display: displayDo}}>Hello Do</div>
        <div style={{display: displayCreate}}>Hello Create</div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
</div>
    )

  }
})











