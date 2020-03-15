import React, {useState, useEffect} from 'react'
import Footer from '../Footer/footer'
import "../style.css"
import Home from '../HomePage/home'
var carbon = require('./carbon.PNG')
var ikea = require('./ikea.png')
var flight = require('./flight1.PNG')
var chat = require('./chat.PNG')
const Projects = () =>{


return(
    <React.Fragment>
    <div className="projects">

        <div className="card">
            <img src={flight} alt="Avatar" style={{width:"100%"}}></img>
            <div class="container">
                <h4><b>KTH FLIGHT VISUALIZATION</b></h4>
                <p></p>
            </div>
        </div>

        <div className="card">
            <img src={ikea} alt="Avatar" style={{width:"100%"}}></img>
            <div class="container">
                <h4><b>IKEA MANUAL CONCEPT</b></h4>
                <p></p>
            </div>
        </div>

        <div className="card">
            <img src={carbon} alt="Avatar" style={{width:"100%"}}></img>
            <div class="container">
                <h4><b>CARBON CALCULATOR</b></h4>
                <p></p>
            </div>
        </div>

        <div className="card">
            <img src={chat} alt="Avatar" style={{width:"100%"}}></img>
            <div class="container">
                <h4><b>CLASSROOM CHAT</b></h4>
                <p></p>
            </div>
        </div>

    </div>
    <Footer></Footer>
    </React.Fragment>
  )}
  export default Projects;