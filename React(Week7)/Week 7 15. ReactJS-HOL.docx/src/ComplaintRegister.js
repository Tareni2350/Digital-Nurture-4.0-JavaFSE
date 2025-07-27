import React, { Component } from 'react';

class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: '',
      complaint: '',
      NumberHolder: Math.floor(Math.random() * 100) + 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    var msg = 'Thanks ' + this.state.ename + '\nYour Complaint was Submitted.\nTransaction ID is: ' + this.state.NumberHolder;
    alert(msg);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1 style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Register your complaints here!!!</h1>
        <form onSubmit={this.handleSubmit} style={{ textAlign: 'center' }}>
          <div>
            <label style={{ marginRight: 20 }}>Name:</label>
            <input
              type="text"
              name="ename"
              value={this.state.ename}
              onChange={this.handleChange}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label style={{ marginRight: 2 }}>Complaint:</label>
            <textarea
              name="complaint"
              value={this.state.complaint}
              onChange={this.handleChange}
              rows={2}
              cols={25}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;