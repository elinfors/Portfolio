import React, {useState, useEffect} from 'react'
import {withRouter, NavLink, Link } from 'react-router-dom'
import './footer.css'
import '../style.css'
const Footer = () => {
return (
    <nav
      id='navBar'
      className='navbar navbar-expand-lg navbar-light bg-light'
    >   
    <div id="footer">
        <p id="copyright">
        ©2019 by Elin Forsberg
        </p>
        <h1 id='FooterLeft'>
          forsbergselin@gmail.com
        </h1>
        </div>
      </nav>
      
)}

export default withRouter(Footer)