import React, {useState, useEffect} from 'react'
import {withRouter, NavLink, Link } from 'react-router-dom'
import './navbar.css'
import '../style.css'
const Navbar = () => {


return (
    <div className="topnav" id="myTopnav">
        <a href="#home" className="active">Home</a>
        <a href="#news">Projects</a>
        <a href="#contact">About</a>
        <a href="#about">Contact</a>
</div>
      
)}

export default withRouter(Navbar)