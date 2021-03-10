import React, {useState, useEffect} from 'react'
import '../projectStyle.css'
import './ikea.css'
import history from '../../history'
import { useHistory } from "react-router-dom";
import pdf from './ikeaWorkbook.pdf'
import Footer from "../Footer/footer"
var ikea = require('./IkeaSolution.png')
var videoIkea = require('../../IKEAvideo.mp4')
const Ikea = () =>{
    let history = useHistory();

    const RedirectBack = () =>{

        history.push("/");
        console.log("clicked")
      }
      const RedirectTripdoodler = () =>{

        history.push("/tripdoodler");
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
                <button onClick={() => RedirectBack()}  className="back_button">Home</button>
            </div> 
            <div className="page">

                <div className="box7">
                    <div className="headlineBox">
                        <i class="fas fa-chevron-left" onClick={()=>{RedirectFlight()}}></i>
                        <div className="headline">
                        Ikea Assembly
                        </div>
                        <i class="fas fa-chevron-right" onClick={()=>{RedirectTripdoodler()}}></i>
                    </div>
                        <div className="words">
                            <div>
                                Interaction Design
                            </div>
                            <div>
                            
                            </div>
                            <div>
                                User Research
                            </div>

                        </div>
                       
                </div>
                
                <div className="projectContent">

                    <div className="mediaDiv">
                    <div className="centervideodiv">
                
                            <video className="Ikeavideo" muted loop controls>
                                <source src={videoIkea} type="video/mp4"></source>
                            </video>
            
                    </div>
                      <img className="solutionImg"src={ikea}></img>


                    </div>
                    <div className="descriptionDiv">
                        <div className="infoIcons">
                                <div className="infoDivHead">
                                        <p style={{fontSize:'15px'}}>MEDIA TECHNOLOGY AND INTERACTION DESIGN</p>
                                        <p className="projectName">Ikea Assembly</p>
                                    </div>
                                    <div className="infoDivButtons">
                                    <form method="get" action={pdf}  target="_blank">
                                                <button className="projectButtonDownload" type="submit">GET THE WORKBOOK
                                                <i id="downloadIcon" className="fas fa-arrow-circle-down"></i>
                                                </button>
                                        </form>
                                    </div>
            

                                    <div className="infoDiv">
                                        <i class="fas fa-user-tag"></i>
                                        <p>Designer</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-users"></i>
                                        <p>5</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-wrench"></i>
                                        <p>Figma, InVision</p>
                                    </div>
                                    <div className="infoDiv">
                                       <p>This project was part of a course in Media Technology and Interaction Design under the theme "Media at Home".
                                        </p>
                                    </div>
                        </div>

                        <div className="projectDesc">
                            Project Description
                        </div>
                        <div className="projectText">
                        Ikea Assembly is a redesign- and digital version of the traditional Ikea furniture manual. 
                        An interactive prototype of the final solution was built using Figma and InVision. 
                        
                        </div>
                        <div className="projectDesc">
                            Problem
                        </div>
                        <div className="projectText">
                            The current Ikea manual has had the same design 
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
                            The project resulted in an interactive prototype, where users could assemble an IKEA furniture through an instructive, animated video. 
                            The solution includes intuitive process/step overview, gives recommendations along the way and the full list of equipment is always accessible for the user. 
                            The video plays when a user holds the button, and can be rewinded if the user misses something. 

                      
                        </div>
                        <div className="projectDesc">
                            Design Process
                        </div>
                        <div className="projectText">
                            This project strictly followed the four stages in the double diamond design process: discover, define, develop and deliver. During the discover
                            phase five people got to assemble a simple stool "Marius" from IKEA using the original paper manual. By letting them think out loud followed by
                            semi-structured interviews, insights about what was clear and unclear with the manual were discovered. For example, all participants described the manual as "clear", but no one managed to assemble it properly. 

                        </div>
                        <div className="projectText">
                        The define phase consisted of analysing the user research to find patterns and creating a persona. Four key insights were found: 
                        <ul>
                            <li>It should be a fun experience to assemble a furniture</li>
                            <li>The process should be clear with no room for mistakes early in the assembling</li>
                            <li>The manual should have a smooth flow so that the user understands in what order everything should be done</li>
                            <li>Inspiring look and feel of the manual</li>

                        </ul>
                       
                        </div> 
                        <div className="projectText">
                        Following, the develop phase consisted of brainstorming ideas using different methods such as state of the art analysis and several methods from 
                        Amesterdam Media Lab. Also, we created low-fi wireframes, three parallell designs and analyzed their pros and cons. 
                        </div>
                        <div className="projectText">
                            Follwing the design method allowed for really finding pain points and experimenting with brainstorming methods. The final devlivery should have been 
                            tested on users but because of time limits it was not possible.
                            </div>
                        <div className="projectText">
                            Download the workbook for more details about the design process!
                        <form method="get" action={pdf}  target="_blank">
                                <button className="projectButtonDownload" type="submit"> DOWNLOAD WORKBOOK</button>
                        </form>
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
    export default Ikea;

    {/*In the pursuit of an engineering degree at KTH, the possibility for students to get an overview of their education, to find suitable elective courses and to customize their education to their interests is limited. 
                In other words, there is a need for an improved tool to replace the deficient course search functionality on the current KTH website.

               In collaboration with researchers in the division of Media Technology and Interaction Design, another KTH student and I decided to carry out a project to design and develop a tool for educational overview and easy course search. */}
