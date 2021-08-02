import React from 'react'
import '../App.css';
import { Link}from "react-router-dom";
import logo from '../images/logo-1.jpg'
const Nav = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <div className="container-fluid">
 
      <img src={logo} alt="" width="200px" height="80px"/>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navItems justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color: "#42d113"}}>Home</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link" to="about" style={{color: "#42d113"}}>About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="kitchen" style={{color: "#42d113"}}>Kitchen Ware</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="bathroom" style={{color: "#42d113"}}>Bathroom Ware</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="decor" style={{color: "#42d113"}}>Decor</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="contact" style={{color: "#42d113"}}>Contact Us</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
       </>
       
    )
}

export default Nav
