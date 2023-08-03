import React from 'react';
import './header.css';
import logo from '../Image/Logo & Mark Dark.png'
import Button from "../Navigation/button";


function Header (props) {
  return (
    <header>
      <div className="headerContent">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Landing Page</h1>
        </div>
        <nav>
          <ul>
            <li className={props.homeActive}>
              <a href="/">Home</a>
            </li>
            <li className={props.aboutActive}>
              <a href="/about-us">About us</a>
            </li>
            <li className={props.coursesActive}>
              <a href="/courses">Courses</a>
            </li>
            <li className={props.contactActive}>
              <a href="/#contact-us">Contact</a>
            </li>
          </ul>
        </nav>
        <Button url="login" buttonText="Login" />
      </div>
    </header>
  );
}

export default Header;
