import React, {useState, useEffect} from 'react'
//import "../style.css"
import "./tripdoodler.css"
import history from '../../history'
import { useHistory } from "react-router-dom";

import Footer from "../Footer/footer"


const TripDoodler = () =>{
    let history = useHistory();

    const RedirectBack = () =>{

        history.push("/");
        console.log("clicked")
      }
      const RedirectFrontread = () =>{

        history.push("/frontread");
        console.log("clicked")
      }
      const RedirectFlight = () =>{

        history.push("/flight");
        console.log("clicked")
      }


    return(
        <React.Fragment>
            <div className="menu sticky back">
                {/*<img onClick={() => RedirectBack()} className="back_arrow"src={arrow}></img>*/}
                <button onClick={() => RedirectBack()}  className="back_button">BACK</button>
            </div> 
            <div className="tripPage">

                <div className="box4">
                <div className="headlineBox">
                        <i class="fas fa-chevron-left" onClick={()=>{RedirectFlight()}} ></i>
                        <div className="headline">
                        Tripdoodler
                        </div>
                        <i className="fas fa-chevron-right" onClick={()=>{RedirectFrontread()}}></i>
                    </div>
                        <div className="words7">
                            <div>
                                UX Design
                            </div>
                            <div>
                            |
                            </div>
                            <div>
                                Interactive Prototyping
                            </div>
                            <div>
                            |
                            </div>
                            <div>
                                Figma
                            </div>
                        </div>
                       
                </div>
                
                <div className="projectContent">
                <div className="infoIcons1"> 
                
                            <div className="infoDiv">
                                <p>Course</p>
                                <p>UX Design Prototyping</p>
                            </div>
                            <div className="infoDiv">
                                <i class="fas fa-user-tag"></i>
                                <p>Designer</p>
                            </div>
                            <div className="infoDiv">
                                <i class="fas fa-users"></i>
                                <p>4</p>
                            </div>
                            <div className="infoDiv">
                                <i class="fas fa-wrench"></i>
                                <p>Lean Canvas, User Story Map, Micro Interactions, User Validation</p>
                            </div>
                           

                        </div>

                <div className="projectDesc">
                    Project Description
                </div>
                <div className="problem">
                    Tripdoodler is developing a planning travel tool with a sustainable focus that enables travelers to collect, 
                    plan, and share travel with their community. By rethinking what travel planning is, their goal is to create 
                    a new global standard that will change the travel industry where sustainability is a natural part of all future travel choices. 
                </div>
                <div className="problem">
                    Our team was given the assignment to create the UX and UI for:
                    <ul>
                        <li>Post-travel user-driven rating of experiences based on set sustainability parameters</li>
                        <li>Sharing past travel plans with friends in TripDoodler.</li>
                        <li>Copying items of shared trip plans from other users to your own dashboard, and create a new plan based on it.</li>
                        <li>Search in the TripDoodler community for trip ideas from friends or travelers you follow based on sustainability and/or regular travel parameters</li>
                    </ul>
                </div>
                <div className="projectDesc">
                    Problem
                </div>
                <div className="problem">
                    <ul>
                        <li> Students found it difficult to find information about the course offerings at KTH.</li>
                        <li>Once found, the course information was solely presented through text and a full understanding of course content and structure was restricted.</li>
                        <li> Students found it difficult to get an overview of their education. </li>
                    </ul>
                </div>
                 <div className="projectDesc">
                    Solution
                </div>
                <div className="solution">

                The design and development of an interactive visualization tool for customization and personalization of KTH students’ educational paths
                </div>
                <div className="projectDesc">
                    Design Process
                </div>
                <div className="design process">

                The design and development of an interactive visualization tool for customization and personalization of KTH students’ educational paths
                </div>
                </div>



           
            
            </div>
            <div className="row">
              <Footer/>
            </div>
           
        </React.Fragment>
    )

}
    export default TripDoodler;

    {/*In the pursuit of an engineering degree at KTH, the possibility for students to get an overview of their education, to find suitable elective courses and to customize their education to their interests is limited. 
                In other words, there is a need for an improved tool to replace the deficient course search functionality on the current KTH website.

               In collaboration with researchers in the division of Media Technology and Interaction Design, another KTH student and I decided to carry out a project to design and develop a tool for educational overview and easy course search. */}
