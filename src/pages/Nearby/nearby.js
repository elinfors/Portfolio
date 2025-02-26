import React, {useState, useEffect, useRef} from 'react'
//import "../style.css"
import "./nearby.css"
import "../projectStyle.css"
import history from '../../history'
import { useHistory } from "react-router-dom";
import Footer from "../Footer/footer"
import pdf from './Project Report - NearBy.pdf'
import ScrollArrow from '../ScrollArrow'

var video = require('../../nearbyMovie.mp4')
var solution=require('./NearbySolution.png')
var survey = require('./NearbySurvey.png')
var logo = require('../HomePage/EFlogoWhite.png')
var flow = require('./Flow.png')
const Nearby = () =>{

    const scrollToRef = (ref) => window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'     
    })   
    
      
        const descRef = useRef(null)
        const executeScroll = () => {scrollToRef(descRef)}

    let history = useHistory();

    const RedirectBack = () =>{

        history.push("/");
        console.log("clicked")
      }

      const RedirectCourse = () =>{

        history.push("/coursearch");
        console.log("clicked")
      }

      const RedirectTripDoodler = () =>{

        history.push("/tripdoodler");
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
      const RedirectIkea = () =>{

        history.push("/ikea");
        console.log("clicked")
      }



      return(
        <React.Fragment>
            
            <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'rgb(22 22 22)', height:'5%'}}>
          <a class="navbar-brand" onClick={()=> RedirectBack()}><img src={logo} style={{height:'40px', cursor:"pointer"}}></img></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectBack()} style={{color:'#ffffff'}}>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectTripDoodler()} style={{color:'#ffffff'}}>Tripdoodler</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectCourse()} style={{color:'#ffffff'}}>Coursearch</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectNearby()} style={{color:'#ffffff'}}>NearBy</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectKollin()} style={{color:'#ffffff'}}>Kollin</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectFlight()} style={{color:'#ffffff'}}>KTH Flight Tool</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectIkea()} style={{color:'#ffffff'}}>Ikea Assembly</a>
              </li>
            </ul>
          </div>
        </nav>
            <div className="page">

                <div className="box3">
                    <div className="headlineBox">
                        <div className="arrowDiv">
                        <i class="fas fa-chevron-left" onClick={()=>{RedirectCourse()}}></i>
                        <p>Previous project</p>
                        </div>
                        <div className="headline">
                        NearBy
                        </div>
                        <div className="arrowDiv">
                        <i class="fas fa-chevron-right" onClick={()=>{RedirectKollin()}}></i>
                        <p>Next project</p>
                        </div>
                    </div>
                        <div className="words">
                            <div>
                                Designing and developing a mobile application for self-registration of meals during an online treatment for eating disorders
                            </div>
                           

                        </div>
                        <div className="arrowDown">

                            <i onClick={()=>{executeScroll()}} class="fas fa-chevron-down"></i>

                            </div>
                       
                </div>
                
                <div className="projectContent">

                    <div className="descriptionDiv" ref={descRef}>
                        <div className="header">
                        <div className="infoIcons">
                                <div className="infoDivHead">
                                        <p style={{fontSize:'15px'}}>ADVANCED PROJECT IN MEDIA ENGINEERING</p>
                                        <p className="projectName">NearBy App</p>
                                    </div>
                                    <div className="infoDivButtons">
                                        <a href="https://appetize.io/app/f5dgtkgkya5xefzh3dyfqpa3g8?device=iphone11pro&scale=75&orientation=portrait&osVersion=13.3&deviceColor=black" target="_blank">
                                            <button className="projectButton">IOS SIMULATOR</button>
                                        </a>
                                        <a href="https://github.com/elinfors/NARArepo" target="_blank">
                                            <button className="projectButton">GITHUB REPOSITORY</button>
                                        </a>
                                        <form className="downloadForm" method="get" action={pdf}  target="_blank">
                                                <button className="projectButtonDownload" type="submit">PROJECT REPORT
                                                <i id="downloadIcon" className="fas fa-arrow-circle-down"></i>
                                                </button>
                                        </form>

                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-user-tag"></i>
                                        <p>Designer and developer</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-users"></i>
                                        <p>3</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-wrench"></i>
                                        <p>Figma, React Native, Firebase Authorization, Cloud Firestore, Github </p>
                                    </div>
                                    <div className="infoDiv">
                                    This project was conducted in the course Advanced Project in Digital Media Engineering at DTU (Technical University of Denmark), 
                                    in collaboration with Stockholm's Center for Eating Disorders and their online treatment initiative NÄRA. 
                                    </div>

                                    
                        </div>
                        {/*
                        <div className="centervideodiv">
                            <video className="Nearbyvideo" muted loop controls>
                                <source src={video} type="video/mp4"></source>
                            </video>
                        </div>*/}
                        </div>

                        <div className="projectDesc">
                            Project Description
                        </div>
                        <div className="projectText">
                        As a result of long waiting queues for patients seeking treatment for eating disorders, 
                        several clinics have invested in digital treatments. One such online treatment is NÄRA, 
                        an initiative by Stockholm Center for Eating Disorders, where a central part of the treatment is for patients to daily 
                        register and reflect upon all their meals and other behaviors connected to the eating.

                        </div>
                        <div className="projectText">
                        This project addresses how self-tracking of meals during online treatment for 
                        eating disorders can be improved to increase the user experience and motivation, 
                        while ensuring the quality of the treatment. Based on literature on personal informatics and human behavior, 
                        a native application was designed and developed as a minimal viable product (MVP).
                        </div>
                        <div className="projectDesc">
                            Problem
                        </div>
                        <div className="projectText">
                            <ul>
                                <li>The current platform for the registration is inadequate as a successful self-tracking tool</li>
                                <li>Patients don't register their meals in connection to their meal-time</li>
                                <li>Patients find their current meal-registration complicated and time-consuming</li>
                        
                            </ul>

                        </div>
                        <div className="projectText">
                            An important aspect to regard during the project was the balance between the user experience and the quality of the treatment. 
                            Therefore, the project was conducted in close collaboration with experts at Stockholm's Center for Eating Disorders to ensure that the 
                            final delivery fullfilled the requirements of the treatment. 
                        </div>
                        <div className="projectDesc">
                            Design Process
                        </div>
                        <div className="projectText">
                            The design phase of the application consisted of a literature review, a pre-study survey, stakeholder interviews, sketching and prototyping, and user testing.
                        </div>
                        <div className="projectText">
                            Because of the sensitive user group and resulting privacy issues it was difficult to find patients for user research. 
                            To get a first understanding of the problems with the current platform for self-registration we sent out a survey to friends,
                             family and other communities on social media. The survey gave us an initial understanding of the needs and goals from the patients' point of view. 
                        <img className="processImg" src={survey}></img>
                        </div>
                        <div className="projectText">
                            The next step was to gain knowledge about the online treatment - how it works, what the main goals- and difficulties are.  
                            It was also important in this step to understand what functionalities from the current solution that needed to be kept in 
                            our project as key requirements. To do this, we initiated a collaboration with clinicians responsible for the online treatment NÄRA. 
                            Online interviews and discussions, as well as prototype evaluations, were held every other week to ensure that the project was
                            going in the right direction.   
                        </div>
                        <div className="projectText">
                        When the gathered information and data were collected and analyzed, a brainstorming session was conducted. 
                        This to define the requirements that could be determined from the findings in the pre-study. 
                        The requirements were divided into 4 categories: 
                        <ul>
                            <li>Food registration</li>
                            <li>Reflection</li>
                            <li>Flow/ Layout/ Structure</li>
                            <li>Extra features</li>
                        </ul>
                        </div>
                        <div className="projectText">
                        A user flow was mapped out based on the requirements in order to create a natural flow in the app, and to make the sketching and design of wireframes easier.
                        <img className="processImg" src={flow}></img>
                        </div>
                        <div className="projectText">
                        An initial design in form of a clickable prototype was created in Figma to work as a blueprint 
                        for the MVP that was later created during the development phase.
                        </div>
                        <a href="https://www.figma.com/proto/J4DSTAFq8MHOb93VdLlCzW/NearBy?node-id=296%3A4&scaling=scale-down" target="_blank">
                             <button className="prototypeButton">GO TO PROTOTYPE</button>
                        </a>
                        <div className="projectText">
                        A qualitative user testing was conducted with the aim to gain insight into how users 
                        perceive and move through the prototype. The user testing was in the form of a 
                        think-aloud usability test of the clickable prototype together with a semi-structured interview.
                        user tests were conducted with users that had no previous experience with online treatments for 
                        eating disorders, hence the user experience was the parameter that was tested. 
                        The users were instructed to perform tasks throughout the prototype, 
                        thus examining the user flow, what was apparent, and what could be improved.
                        </div>
                        <div className="projectDesc">
                            Solution
                        </div>
                        <div className="projectText">
                            In order to solve the above problems, we designed and developed a mobile application with three major functionalities: 
                            <ul>
                                <li>Step-by-step registration of meals and compensations</li>
                                <li>Reflection form with preset parameters</li>
                                <li>An overview page with statistics and previous registrations</li>
                                <li>Dynamic list of meals depending on the editable meal plan</li>
                                <li>Notification option</li>
                                <li>System-generated feedback on registration rate and compensations (for further development)</li>
                            </ul>
                        </div>
                        <img className="processImg"src={solution}></img>

                        </div>
                        
                </div>



           
            
            </div>
            <div className="ScrollContainer">
                <ScrollArrow/>
                </div>
            <div className="row">
              <Footer/>
            </div>
           
        </React.Fragment>
    )

}
    export default Nearby;

    {/*In the pursuit of an engineering degree at KTH, the possibility for students to get an overview of their education, to find suitable elective courses and to customize their education to their interests is limited. 
                In other words, there is a need for an improved tool to replace the deficient course search functionality on the current KTH website.

               In collaboration with researchers in the division of Media Technology and Interaction Design, another KTH student and I decided to carry out a project to design and develop a tool for educational overview and easy course search. */}
