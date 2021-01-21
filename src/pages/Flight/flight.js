import React, {useState, useEffect} from 'react'
import "./flight.css"
import '../projectStyle.css'
import history from '../../history'
import { useHistory } from "react-router-dom";

import Footer from "../Footer/footer"
var flight = require('./FlightSolution2.png')

const Flight = () =>{
    let history = useHistory();

    const RedirectBack = () =>{

        history.push("/");
        console.log("clicked")
      }
      const RedirectKollin = () =>{

        history.push("/kollin");
        console.log("clicked")
      }
      const RedirectTripdoodler = () =>{

        history.push("/tripdoodler");
        console.log("clicked")
      }

      

      return(
        <React.Fragment>
            <div className="menu sticky back">
                {/*<img onClick={() => RedirectBack()} className="back_arrow"src={arrow}></img>*/}
                <button onClick={() => RedirectBack()}  className="back_button">Home</button>
            </div> 
            <div className="page">

                <div className="box6">
                    <div className="headlineBox">
                        <i class="fas fa-chevron-left" onClick={()=>{RedirectKollin()}}></i>
                        <div className="headline">
                        KTH Flight Tool
                        </div>
                        <i class="fas fa-chevron-right" onClick={()=>{RedirectTripdoodler()}}></i>
                    </div>
                        <div className="words">
                            <div>
                                Web Development
                            </div>
                            <div>
                            |
                            </div>
                            <div>
                                Visualization
                            </div>
                            <div>
                            |
                            </div>
                            <div>
                                Data Processing
                            </div>

                        </div>
                       
                </div>
                
                <div className="projectContent">

                    <div className="mediaDiv">
                       
                    <div className="mediaDiv">
                    <div className="centervideodiv">
                    <iframe className="Flightvideo" src="https://www.youtube.com/embed/vYf_7MLFkKw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                    </iframe>
                    
                        </div>
                        <img className="solutionImg"src={flight}></img>


                    </div>

                    </div>
                    <div className="descriptionDiv">
                        <div className="infoIcons">
                                <div className="infoDivHead">
                                        <p style={{fontSize:'15px'}}>INFORMATION VISUALIZATION</p>
                                        <p className="projectName">KTH Flight Tool</p>
                                    </div>
                                    <div className="infoDivButtons">
                                        <a href="https://flight-kth.firebaseapp.com/visualization" target="_blank">
                                            <button className="projectButton">FLIGHT TOOL</button>
                                        </a>
                                        <a href="https://github.com/elinfors/flight" target="_blank">
                                            <button className="projectButton">GITHUB REPOSITORY</button>
                                        </a>

                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-user-tag"></i>
                                        <p>Project Manager, Designer and Developer</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-users"></i>
                                        <p>5</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-wrench"></i>
                                        <p>D3.js, React.js, Github, Figma, Firebase, Python</p>
                                    </div>
                                    <div className="infoDiv">
                                        <p>
                                    This project was conducted as a part of the course Information Visualization at KTH, in collaboration with the research team behind the <a href="https://www.kth.se/sv/hct/mid/research/sustainability/projects/flight-1.920661" target="_blank">flight project</a> at KTH.
                                    A visualization tool was developed with the purpose of helping employees and other stakeholders at KTH to make better decisions regarding their flying habits.
                                    </p>
                                    </div>
                        </div>

                        <div className="projectDesc">
                            Mentions
                        </div>
                        <div className="projectText">
                        <p><a className="aHrefLink" href="https://www.kth.se/aktuellt/nyheter/hur-ska-vi-resa-efter-pandemin-1.984910" target="_blank">KTH Article: "Hur ska vi resa efter pandemin?"</a>
                        </p>
                        <p>
                        <a className="aHrefLink" href="https://danielpargman.blogspot.com/2020/03/flight-visualization-tools.html" target="_blank">Blogpost about the project by KTH researcher Daniel Pargman</a>
                        </p>
                        </div>
                        <div className="projectDesc">
                            Project Description
                        </div>
                        <div className="projectText">
                            The purpose pf the project was to enable researchers at different departments to discover patterns in their flying habits, 
                            and we were given multiple, large datasets to work with. Since we collaborated with a research team at KTH, we needed to regard their needs 
                            and requirements throughout the project. By processing and analyzing the datasets, several different visual structures were used to present 
                            the data in an interactive way. By using this tool, KTH can start analyzing patterns to find out the reason for flying - and most importantly - how to possibly reduce it and reach the 9% goal.
                        </div>
                        <div className="projectDesc">
                            Problem
                        </div>
                        <div className="projectText">
                        At KTH, where 75-80% of its budget goes to research, employees fly a lot. The emissions from 
                        flying were 18 090 tonnes of CO2 year 2016 and 92.5% of these emissions came from travels linked to 
                        flights performed within the service. Therefore, KTH has set a goal of reducing 
                        their flight emissions with 9% each year and the first step to take is to get to know how KTH flies.
                        </div>
                        <div className="projectDesc">
                            Solution
                        </div>
                        <div className="projectText">
                        This flight visualization tool includes an interactive barchart with filter options to see number of flights per month during three years. The tool also shows where these flights 
                        have gone by showing a map and a doughnut chart. If the researchers want to know the distribution among them, they can look at the vertical bar chart to find out who has travelled and how much.
                        This way, the employees and other stakeholders at KTH can find patterns and trends in their flying. 
                        The tool helps to ask the right questions by presenting:
                        <ul>
                            <li>When the employees have traveled</li>
                            <li>Where they have traveled to</li>
                            <li>Who has traveled and how much</li>
                        </ul>


                        
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
    export default Flight;

    {/*In the pursuit of an engineering degree at KTH, the possibility for students to get an overview of their education, to find suitable elective courses and to customize their education to their interests is limited. 
                In other words, there is a need for an improved tool to replace the deficient course search functionality on the current KTH website.

               In collaboration with researchers in the division of Media Technology and Interaction Design, another KTH student and I decided to carry out a project to design and develop a tool for educational overview and easy course search. */}
