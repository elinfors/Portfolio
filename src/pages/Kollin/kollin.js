import React, {useState, useEffect} from 'react'
import "./kollin.css"
import '../projectStyle.css'
import history from '../../history'
import { useHistory } from "react-router-dom";

import Footer from "../Footer/footer"
var kollin = require('./KollinSolution.png')
var logo = require('../HomePage/EFlogoWhite.png')
const Kollin = () =>{
    let history = useHistory();

    const RedirectBack = () =>{

        history.push("/");
        console.log("clicked")
      }
      const RedirectNearby = () =>{

        history.push("/nearby");
        console.log("clicked")
      }

      const RedirectFlight = () =>{

        history.push("/flight");
        console.log("clicked")
      }

      

      return(
        <React.Fragment>
            {/*<div className="menu sticky back">
                
                <button onClick={() => RedirectBack()}  className="back_button">Home</button>
      </div> */}              
      
      <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'rgb(22 22 22)', height:'5%'}}>
          <a class="navbar-brand" onClick={()=> RedirectBack()}><img src={logo} style={{height:'40px'}}></img></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectBack()} style={{color:'#ffffff'}}>Home</a>
              </li>
            </ul>
          </div>
        </nav>


            <div className="page">

                <div className="box5">
                    <div className="headlineBox">
                    <div className="arrowDiv">
                        <i className="fas fa-chevron-left" onClick={()=>{RedirectNearby()}}></i>
                        <p>Previous project</p>
                        </div>
                        <div className="headline">
                        Kollin
                        </div>
                        <div className="arrowDiv">
                        <i className="fas fa-chevron-right" onClick={()=>{RedirectFlight()}}></i>
                        <p>Next project</p>
                        </div>
                    </div>
                        <div className="words">
                            <div>
                                UX Design
                            </div>
                            <div>
                            
                            </div>
                            <div>
                                User Research
                            </div>
                            <div>
                            
                            </div>
                            <div>
                                Onboarding
                            </div>

                        </div>
                       
                </div>
                
                <div className="projectContent">

                    <div className="mediaDiv">
                        <img className="solutionImg"src={kollin}></img>


                    </div>
                    <div className="descriptionDiv">
                        <div className="infoIcons">
                                <div className="infoDivHead">
                                        <p style={{fontSize:'15px'}}>UX DESIGN</p>
                                        <p className="projectName">Kollin</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-user-tag"></i>
                                        <p>UX Designer</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-wrench"></i>
                                        <p>Figma</p>
                                    </div>
                                    <div className="infoDiv">
                                       <p>This UX project was conducted as a consultancy employment for <a className="aHrefLink" href="https://kollin.io" target="_blank" >Kollin</a>, an e-learning platform that makes studying for exams easier for 
                                        higher education students.
                                        </p>
                                    </div>
                        </div>

                        <div className="projectDesc">
                            Project Description
                        </div>
                        <div className="projectText">
                        I was hired to help design the onboarding of a new version of Kollin's website to improve user experience for an upcoming launch. The project involved 
                        user research, competitor analysis, user story mapping, creating low-fi mockups and user evaluation. 
                        In collaboration with developers, the new onboarding was implemented and released in the new beta-version.

                        
                        </div>
                        <div className="projectDesc">
                            Problem
                        </div>
                        <div className="projectText">
                            Kollin struggled with getting new users to understand their value proposition, and they wanted to increase the conversion rate and the time
                            spent on the platform. During extensive qualitative, semi-structured, think-aloud interviews several problems were found:
                            <ul>
                            <li> 
                                    Users did not understand what Kollin offered
                                </li>
                                <li> 
                                    Users accidently entered the wrong courses fron the start page
                                </li>
                                <li>
                                    Users did not understand what they would get if they signed up and paid for a course
                                </li>
                            </ul>
                        </div>
                        <div className="projectDesc">
                            Solution
                        </div>
                        <div className="projectText">

                        The project resulted in a more clear onboarding process where the users could find a relevant course at the 
                        top of the landing page. Also, the key offers that Kollin provides is clearly communicated through the landing page,
                        so that there is no question about what Kollin actually is. Also, in every course that the user can try for free there is a 
                        banner on top of the page with information about what is unlocked upon registration and payment. 
                        </div>
                        <div className="projectDesc">
                            Design Process
                        </div>
                        <div className="projectText">
                            To understand, and emphasize with, how new users perceived Kollin, 
                            a discover phase was initiated with think-aloud user tests combined with semi-structured interviews. 
                            The goal of the user tests was to understand how users that were unfamiliar with Kollin interacted with the platform. 
                            The discover phase gave valuable insights that were analyzed through a thematic analysis method. 
                            The key insights were then defined and transferred into simple low-fi mockups through brainstorming sessions and competitive analysis. 
                            The mockups were shown to users and then iterated on. Because of time constraints with the new launch the deidng process had to be shortened 
                            and implemented without further testing. However, the design was implemeted and the new platform launched with success, where new users 
                            found the platform easy to understand and the value proposition was clear upon the home page. 
                        </div>
                </div>
                </div>



           
            
            </div>
            <div className="row">
              <Footer/>
            </div>
           
        </React.Fragment>
    )


}
    export default Kollin;

    {/*In the pursuit of an engineering degree at KTH, the possibility for students to get an overview of their education, to find suitable elective courses and to customize their education to their interests is limited. 
                In other words, there is a need for an improved tool to replace the deficient course search functionality on the current KTH website.

               In collaboration with researchers in the division of Media Technology and Interaction Design, another KTH student and I decided to carry out a project to design and develop a tool for educational overview and easy course search. */}
