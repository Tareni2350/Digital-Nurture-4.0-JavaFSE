import React, { Component } from 'react';

class CountPeople extends Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0,
      c: 0 // unused, can be removed
    };
  }

  updateEntry() {
    this.setState((prevState) => {
      return { entrycount: prevState.entrycount + 1 };
    });
  }

  updateExit() {
    this.setState((prevState) => {
      return { exitcount: prevState.exitcount + 1 };
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <button onClick={() => this.updateEntry()} style={{ backgroundColor: 'lightgreen', marginRight: '20px' }}>
          Login
        </button>
        {this.state.entrycount} People Entered!!!

        <button onClick={() => this.updateExit()} style={{ backgroundColor: 'lightgreen', marginLeft: '40px' }}>
          Exit
        </button>
        {this.state.exitcount} People Left!!!
      </div>
    );
  }
}

export default CountPeople;