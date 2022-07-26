import React from 'react'
import {NavLink } from "react-router-dom";
import './Style.css';

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
  <a class="navbar-brand" id='net'>Netflix</a>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <NavLink to="/Home"  className="nav-link" style={{color:'white'}}>Home</NavLink>

        </li>
        <li class="nav-item">
        <NavLink to="/About"  className="nav-link" style={{color:'white'}}>About</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/MovieList"  className="nav-link"style={{color:'white'}} >Movies</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/Login"  className="nav-link"style={{color:'white'}} >Login</NavLink>
        </li>
       </ul> </div>
  </div>
</nav>
  )
}

export default Nav
