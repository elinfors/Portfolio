import React, {useState, useEffect} from 'react'
import "./tripdoodler.css"
import history from '../../history'
import { useHistory } from "react-router-dom";
import Footer from "../Footer/footer"


var feed = require('./feed.png')
var detail = require('./detail.png')
var profile = require('./profile.png')
var rate = require('./rate.png')


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
                    <div className="videoDiv">
                        <div>
                            <video className="Tripvideo"autoPlay muted loop>
                                <source src='/videos/TripVid.mp4' type="video/mp4"></source>
                            </video>
                        </div>
                        <div className="infoIcons1"> 
                        
                            <div className="infoDivHead">
                                <p style={{fontSize:'10px'}}>COURSE</p>
                                <p>UX Design Prototyping</p>
                            </div>
                            <div className="infoDiv">
                                <i className="fas fa-user-tag"></i>
                                <p>Designer</p>
                            </div>
                            <div className="infoDiv">
                                <i className="fas fa-users"></i>
                                <p>4</p>
                            </div>
                            <div className="infoDiv">
                                <i className="fas fa-wrench"></i>
                                <p>Lean Canvas, User Story Map, Micro Interactions, User Validation</p>
                            </div>
                            <div className="infoDiv">
                                
                                <p>This project was carried out in collaboration with Tripdoodler, a startup company for sustainable travel planning. </p>
                            </div>
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
                        <li>Search in the TripDoodler community for trip ideas from friends or travelers you follow based on sustainability and/or regular travel parameters</li>
                    </ul>
                </div>
                <div className="projectDesc">
                    Problem
                </div>
                <div className="problem">
                    <ul>
                    <li>There is no existing solution for rating sustainable travel experiences on the TripDoodler platform</li>
                    <li>It is difficult to interpret ratings, and travelers can’t trust ratings of travels/parts of travels when they are based only on personal experiences of unknown people</li>
                    <li>TripDoodlers existing platform does not support mobile use</li>
                    </ul>
                </div>
                 <div className="projectDesc">
                    Solution
                </div>

                <div className="solution">
                <ul>
                    <li>Mobile-application for travellers on-the-go</li>

                    <li>Seamless rating of post-travel experiences</li>

                    <li>Social community and profiles</li>

                    <li>Search function so travellers can easily search for travel items that has been rated by people in their community</li>
                </ul>
                <div className="tripSolution">
                    <div className="imageCard">
                    <img className="tripImage" src={feed}></img>
                    <div style={{height:'20%'}}>
                    <p>Community</p>
                    <p>The app helps users create a community so that they no longer have to plan travels all on their own.</p>
                    </div>
                    </div>
                    <div className="imageCard">
                    <img className="tripImage" src={detail}></img>
                    <div style={{height:'20%'}}>
                    <p>Rating of travel items</p>
                    <p>Ratings from the user's community will be the first to show. That way the user gets sustainable recommendations from people that they trust.</p>
                    </div>
                    </div>
                    <div className="imageCard">
                    <img className="tripImage" src={profile}></img>
                    <div style={{height:'20%'}}>
                    <p>Profile</p>
                    <p>All travel plans, saved items, and ratings, collected in one place. Users can also choose to "trust" other travellers, adding reliability to the ratings.</p>
                    </div>
                    </div>
                    <div className="imageCard">
                    <img className="tripImage" src={rate}></img>
                    <div style={{height:'20%'}}>
                    <p>Easy rating</p>
                    <p>Ratings of travel items are based on fixed, sustainability parameters. That way we all speak the same language. </p>
                    </div>
                    </div>
                    
                </div>

                </div>
                <div className="projectDesc">
                    Design Process
                </div>
                <div className="design process">

                In order to understand the problem from the client’s point of view, we met with the CEO over an online, semi-structured interview. From the interview it was clear that the core problem Tripdoodler had was how to design the rating of travels, and how they should be shared in a user’s community. The web platform that was under construction did not yet have such functionalities.  Some questions that arose were:
                <ul>
                <li>What is sustainable travel? What does Tripdoodler define as sustainable?</li>
               <li>How can the sustainable ratings of travels be user-driven, yet reliable?</li> 
                <li>How can we incorporate trust in the ratings, so that they function as inspiration for more sustainable travel choices?</li>
                <li>How can we make users of Tripdoodler make sustainable choices when they are already on a trip?</li>
                </ul>
                Because of time constraints,  we chose to work with fast, iterative UX-prototyping, focusing on creating an MVP. Instead of spending much more time on researching the problem we began to sketch initial ideas as low-fi wireframes in Figma. 

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
