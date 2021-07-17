import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='nav-container'>
      <Link className='ui-link' to={'/general-principles'}>General Principles</Link>
      <Link className='ui-link' to={'/golden-rule'}>Golden Rule of 3</Link>
      <Link className='ui-link' to={'/f-pattern'}>F-Pattern</Link>
      <Link className='ui-link' to={'/z-pattern'}>Z-Pattern</Link>
      <Link className='ui-link' to={'/neumorphism'}>Neumorphism</Link>
      <Link className='ui-link' to={'/glassmorphism'}>Glassmorphism</Link>
      <Link className='ui-link' to={'/flat-ui'}>Flat UI</Link>
      <Link className='ui-link' to={'/material-ui'}>Material UI</Link>
    </div>
  );
}

export default NavBar;
