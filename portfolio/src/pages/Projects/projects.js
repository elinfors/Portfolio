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
        <div>
    <h2>RECENT PROJECTS</h2>
    </div>
        <div className="card">
            <img  className = "image" src={flight} alt="Avatar" style={{width:"100%"}}></img>
            <div className="overlay"></div>
                <div className="text">Description of work</div>
        </div>

        <div className="card">
            <img className = "image" src={ikea} alt="Avatar" style={{width:"100%"}}></img>
            <div className="overlay"></div> 
                <div className="text">Description of work</div>
        </div>

        <div className="card">
            <img className = "image" src={carbon} alt="Avatar" style={{width:"100%"}}></img>
            <div className="overlay"></div>
            <div className="text">Description of work</div>
        </div>

        <div className="card">
            <img className = "image" src={chat} alt="Avatar" style={{width:"100%"}}></img>
            <div className="overlay"></div>
            <div className="text">Description of work</div>
        </div>

        

    </div>
    </React.Fragment>
  )}
  export default Projects;