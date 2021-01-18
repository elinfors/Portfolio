import React, {useState, useEffect} from 'react'
import "./kollin.css"
import '../projectStyle.css'

import history from '../../history'
import { useHistory } from "react-router-dom";

import Footer from "../Footer/footer"
var kollin = require('./KollinBanner.png')
const Kollin = () =>{
    let history = useHistory();

    const RedirectBack = () =>{

        history.push("/");
        console.log("clicked")
      }
      const RedirectCourse = () =>{

        history.push("/coursearch");
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
            <div className="page">

                <div className="box5">
                    <div className="headlineBox">
                        <i class="fas fa-chevron-left" onClick={()=>{RedirectCourse()}}></i>
                        <div className="headline">
                        Kollin
                        </div>
                        <i class="fas fa-chevron-right" onClick={()=>{RedirectFlight()}}></i>
                    </div>
                        <div className="words">
                            <div>
                                UX Design
                            </div>
                            <div>
                            |
                            </div>
                            <div>
                                User Research
                            </div>
                            <div>
                            |
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
                                        <p>Designer</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-users"></i>
                                        <p>3</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-wrench"></i>
                                        <p></p>
                                    </div>
                        </div>

                        <div className="projectDesc">
                            Project Description
                        </div>
                        <div className="projectDesc">
                            Problem
                        </div>
                        <div className="projectText">
                            <ul>
                    <li> Students found it difficult to find information about the course offerings at KTH.</li>
                        <li>Once found, the course information was solely presented through text and a full understanding of course content and structure was restricted.
                    </li>
                    <li> Students found it difficult to get an overview of their education. 
                    </li>
                        </ul>
                        </div>
                        <div className="projectDesc">
                            Solution
                        </div>
                        <div className="projectText">

                        The design and development of an interactive visualization tool for customization and personalization of KTH students’ educational paths
                        </div>
                        <div className="projectDesc">
                            Design Process
                        </div>
                        <div className="projectText">

                        The design and development of an interactive visualization tool for customization and personalization of KTH students’ educational paths
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
