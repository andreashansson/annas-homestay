import React from 'react';

const Main = (props) => {

  if (props.view == "home") {
    return (
      <div className="main-container">
        Home
      </div>
    )
  }
  if (props.view == "booking") {
    return (
      <div className="main-container">
        Booking
      </div>
    )
  }
  if (props.view == "pictures") {
    return (
      <div className="main-container">
        Pictures
      </div>
    )
  }
  if (props.view == "about_us") {
    return (
      <div className="main-container">
        About us
      </div>
    )
  }
  if (props.view == "contact") {
    return (
      <div className="main-container">
        Contact
      </div>
    )
  }
}

export default Main;
