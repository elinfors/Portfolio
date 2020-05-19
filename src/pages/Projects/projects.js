import React, {useState, useEffect} from 'react'
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
        <div className="projectsHeadline">
            <h2>RECENT PROJECTS</h2>
        </div>
        <div className="card" >
            <div className="imgDiv">
            <img  className = "image" src={flight} alt="Avatar" style={{width:"80%"}}></img>
            </div>
           {/*} <div className="overlay"></div>
                <div className="text">Description of work</div>*/}
            <div className="projectDescription">
            <div className="projectTitle">
                FLIGHT VISUALIZATION TOOL
            </div>
            <div className="projectText">
            A visualization of KTH researchers flight pattern on department level. A tool for analyzing when and where they fly, in order for the departments to take action and reduce their flying. 
            This project was part of the course Information Visualization at KTH, in collaboration with the project FLIGHT. 
             </div>
             <button className='readMoreButton'>READ MORE</button>
             </div>
           
            
        </div>
        

        <div className="card">
        <div className="projectDescription">
        <div className="projectTitle">
                IKEA ASSEMBLY CONCEPT
            </div>
            <div className="projectText">
            A visualization of KTH researchers flight pattern on department level. A tool for analyzing when and where they fly, in order for the departments to take action and reduce their flying. 
            This project was part of the course Information Visualization at KTH, in collaboration with the project FLIGHT. 
             </div>
             <button className='readMoreButton'>READ MORE</button>
             </div>
           
            <img className = "image" src={ikea} alt="Avatar" style={{width:"40%", paddingLeft:'30px', paddingRight:'30px'}}></img>
          
            {/*} <div className="overlay"></div>
                <div className="text">Description of work</div>*/}
        </div>

        <div className="card">
        <div className="imgDiv">
            <img className = "image" src={carbon} alt="Avatar" style={{width:"80%"}}></img>
            </div>
            <div className="projectDescription">
            <div className="projectTitle">
                CARBON CALCULATOR
            </div>
            <div className="projectText">
            A visualization of KTH researchers flight pattern on department level. A tool for analyzing when and where they fly, in order for the departments to take action and reduce their flying. 
            This project was part of the course Information Visualization at KTH, in collaboration with the project FLIGHT. 
             </div>
             <button className='readMoreButton'>READ MORE</button>
             </div>
            {/*} <div className="overlay"></div>
                <div className="text">Description of work</div>*/}
        </div>


        

    </div>
    </React.Fragment>
  )}
  export default Projects;