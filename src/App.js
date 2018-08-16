import React, { Component } from 'react';
import './css/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      all_rooms: null,
      error: null,
      dev: true
    }
  }

  componentDidMount() {
    if (this.state.dev) {
      var serverURL = "http://localhost:8000/api";
    }
    else {
      var serverURL = "/api";
    }
    fetch(serverURL, {method: "GET"}).then(res => res.json()).then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
        this.setState({
          error: error
        });
      }
    )
  }

  render() {
    console.log(this.state);
    if (this.state.error != null) {
      return (
        <div>
          <span>{this.state.error.message}</span><br /><span>Trying to run in dev but dev is false?</span>
        </div>
      )
    }
    else {
      return (
        <div>Success!</div>
      )
    }
  }
}

export default App;
