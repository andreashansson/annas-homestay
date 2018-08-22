import React, { Component } from 'react';
import './css/App.css';
import Menu from './Components/Menu';
import Main from './Components/Main';


class App extends Component {

  constructor() {
    super();
    this.state = {
      all_rooms: null,
      error: null,
      dev: true,
      view: "home"
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
        console.log(result.rooms);
        this.setState({
          all_rooms: result.roomss
        });
      },
      (error) => {
        console.log(error);
        this.setState({
          error: error
        });
      }
    )
  }

  changeview = (newView) => {
    this.setState({
      view: newView
    });
  }


  render() {
    if (this.state.error != null) {
      return (
        <div className="app-container">
          <span>{this.state.error.message}</span>
        </div>
      )
    }
    else {
      return (
        <div className="app-container">
          <Menu homeview={this.homeview} picturesview={this.picturesview} changeview={this.changeview} />
          <Main view={this.state.view} />
        </div>
      )
    }
  }
}

export default App;
