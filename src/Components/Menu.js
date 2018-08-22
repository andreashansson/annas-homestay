import React from 'react';
import logo from '../images/toymachine-logo.png';

const Menu = (props) => {
  return (
    <div className="menu-container">
      <div className="logo-container"><img src={logo} /></div>
      <ul>
        <li className="link" onClick={props.changeview.bind(this, "home")}>Home</li>
        <li className="link" onClick={props.changeview.bind(this, "booking")}>Book</li>
        <li className="link" onClick={props.changeview.bind(this, "pictures")}>Pictures</li>
        <li className="link" onClick={props.changeview.bind(this, "about_us")}>About us</li>
        <li className="link" onClick={props.changeview.bind(this, "contact")}>Contact</li>
      </ul>
    </div>
  )
}

export default Menu;
