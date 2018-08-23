import React from 'react';
import logo from '../images/toymachine-logo.png';
import '../css/Menu.css';

const Menu = (props) => {
  return (
    <div className="menu-container">
      <div className="logo-container"><img src={logo} /></div>
      <ul>
        <li onClick={props.changeview.bind(this, "home")}><a href="#" className="link">Home</a></li>
        <li onClick={props.changeview.bind(this, "booking")}><a href="#" className="link">Book</a></li>
        <li onClick={props.changeview.bind(this, "pictures")}><a href="#" className="link">Pictures</a></li>
        <li onClick={props.changeview.bind(this, "about_us")}><a href="#" className="link">About us</a></li>
        <li onClick={props.changeview.bind(this, "contact")}><a href="#" className="link">Contact</a></li>
      </ul>
    </div>
  )
}

export default Menu;
