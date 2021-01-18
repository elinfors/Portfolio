import React, {useState, useEffect} from 'react'
import "./projects.css"
import history from '../../history'
import { useHistory } from "react-router-dom";
import Home from '../HomePage/home'
var carbon = require('./carbon2.png')
var ikea = require('./ikea.png')
var flight = require('./flight2.png')
var chat = require('./chat.PNG')
var rect1 = require('./Rectangle1.png')
var course = require('./Coursearch.png')
var trip = require('./Tripdoodler2.png')
var frontread = require('./Frontread2.png')
var nearby = require('./Nearby2.png')
var kollin = require('./Kollin3.png')
var flight = require('./Flight.png')

const Projects = () =>{
    let history = useHistory();

    const RedirectCoursearch = () =>{

        history.push("/coursearch");
        console.log("clicked")
      }
      const RedirectTripDoodler = () =>{

        history.push("/tripdoodler");
        console.log("clicked")
      }
      const RedirectFrontread = () =>{

        history.push("/frontread");
        console.log("clicked")
      }
      const RedirectNearby = () =>{

        history.push("/nearby");
        console.log("clicked")
      }
      const RedirectKollin = () =>{

        history.push("/kollin");
        console.log("clicked")
      }
      const RedirectFlight = () =>{

        history.push("/flight");
        console.log("clicked")
      }

return(
    <React.Fragment>
    <div className="projects">
        <div className="title">
            RECENT PROJECTS
        </div>
        <div className="subTitle">
            Here are some of my selected projects made as a student and project employed.
        </div>

        <div className='projRow'>
            <div className='projCol' onClick={() => RedirectTripDoodler()}>
                <img  className = "image" src={trip} alt="Avatar"></img>
                    <div className="overlay"></div>

                            <div className="text">
                                <p>APP DESIGN</p>
                                <p className="hoverHeadline">Tripdoodler</p>
                                <p className="hoverText">Design of mobile application for rating and sharing sustainable travel experiences</p>
                                <button className="readMoreButton">READ MORE</button>
                            </div>

               
            </div>
            <div className='projCol' onClick={()=>{RedirectFrontread()}}>
            <img  className = "image" src={frontread} alt="Avatar"></img>
                    <div className="overlay"></div>

                        <div className="text">
                            <p>CONCEPT DESIGN</p>
                            <p className="hoverHeadline">Frontread</p>
                            <p className="hoverText">Redesign and gamification of e-learning platform</p>
                            <button className="readMoreButton">READ MORE</button>
                            </div>
                        
            </div>
            </div>
            <div className='projRow'>
            <div className='projCol' onClick={()=>{RedirectNearby()}}>
            <img  className = "image" src={nearby} alt="Avatar"></img>
                    <div className="overlay"></div>

                        <div className="text">
                            <p>APP DESIGN AND DEVELOPMENT</p>
                            <p className="hoverHeadline">NearBy</p>
                            <p className="hoverText">Design and development of mobile application for self registration of meals during online treatment for eating disorders</p>
                            <button className="readMoreButton">READ MORE</button>
                            </div>
            </div>

    
            <div className='projCol' onClick={() => RedirectCoursearch()}>
            <img  className = "image" src={course} alt="Avatar"></img>
                    <div className="overlay"></div>

                        <div className="text">
                            <p>WEB DESIGN AND DEVELOPMENT</p>
                            <p className="hoverHeadline">Coursearch</p>
                            <p className="hoverText">Design and development of an interactive visualization tool for course search and customization of KTH students’ educational paths </p>
                            <button className="readMoreButton">READ MORE</button>
                            </div>
            </div>
            </div>
            <div className='projRow'>
            <div className='projCol' onClick={()=>{RedirectKollin()}}>
            <img  className = "image" src={kollin} alt="Avatar"></img>
                    <div className="overlay"></div>

                        <div className="text">
                            <p>UX DESIGN</p>
                            <p className="hoverHeadline">Kollin onboarding</p>
                            <p className="hoverText">Design of onboarding experience for new users of Kollin.io</p>
                            <button className="readMoreButton">READ MORE</button>
                            </div>
            </div>
            <div className='projCol' onClick={()=>{RedirectFlight()}}>
            <img  className = "image" src={flight} alt="Avatar"></img>
                    <div className="overlay"></div>

                        <div className="text">
                            <p>DATA VISUALIZATION</p>
                            <p className="hoverHeadline">Flight Visualization</p>
                            <p className="hoverText">A visualization tool to help employees and other stakeholders at KTH to make better decisions regarding their flying habits</p>
                            <button className="readMoreButton">READ MORE</button>
                            </div>
           
            </div>
            

        </div>
        <div className='projRow'>
            <div className='projCol' onClick={()=>{RedirectFlight()}}>
            <img  className = "image" src={ikea} alt="Avatar"></img>
                    <div className="overlay"></div>

                        <div className="text">
                            <p>INTERACTION DESIGN</p>
                            <p className="hoverHeadline">IKEA Assembly</p>
                            <p className="hoverText">Redesign and digitalization of IKEA paper instructions for assembling furniture</p>
                            <button className="readMoreButton">READ MORE</button>
                            </div>
           
            </div>
        </div>




{/*
        <div className="card" >

            <div className="imgDiv">
            <img  className = "image1" src={course} alt="Avatar"></img>
            </div>
            <div className="projectDescription">
            <div className="projectTitle">
                Coursearch
            </div>
            <div className="projectText">
            Design and development of an interactive visualization tool for course search and customization of KTH students’ educational paths.
             </div>
                <button className='readMoreButton' onClick={() => RedirectCoursearch()}>READ MORE</button>
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
          
           
            
        </div>

        <div className="card">
       
        <div className="imgDiv">
            <img className = "image1" src={carbon} alt="Avatar"></img>
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
           
        </div>
                */}

        

    </div>
    </React.Fragment>
  )}
  export default Projects;

  //<div className="overlay"></div>
//<div className="text">Description of work</div>