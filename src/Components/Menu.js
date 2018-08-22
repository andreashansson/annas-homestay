import React from 'react';

const Menu = (props) => {
  return (
    <div className="menu-container">
    <div><img src="test.jpg" /></div>
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
