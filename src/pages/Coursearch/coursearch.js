import React, {useState, useEffect} from 'react'
import "./coursearch.css"
import "../projectStyle.css"
import history from '../../history'
import { useHistory } from "react-router-dom";
import arrow from "./back_arrow.png"
import q from "./q.png"
import discovery from "./discovery.png"
import Footer from "../Footer/footer"
import coursearch1 from "./coursearch1.png"
import pdf from './KTH Coursearch Project Report .pdf'

var course = require('./CourseSolution.png')
//var video = require('../../CoursearchDemo.mp4')

const Coursearch = () =>{
    let history = useHistory();

    const RedirectBack = () =>{

        history.push("/");
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

      
      return(
        <React.Fragment>
            <div className="menu sticky back">
                {/*<img onClick={() => RedirectBack()} className="back_arrow"src={arrow}></img>*/}
                <button onClick={() => RedirectBack()}  className="back_button">Home</button>
            </div> 
            <div className="page">

                <div className="box4">
                    <div className="headlineBox">
                        <i class="fas fa-chevron-left" onClick={()=>{RedirectNearby()}}></i>
                        <div className="headline">
                        Coursearch
                        </div>
                        <i class="fas fa-chevron-right" onClick={()=>{RedirectKollin()}}></i>
                    </div>
                        <div className="words">
                            <div>
                                Web Development
                            </div>
                            <div>
                            </div>
                            <div>
                                Visualization
                            </div>
                            <div>
                            </div>
                            <div>
                                Data Processing
                            </div>

                        </div>
                       
                </div>
                
                <div className="projectContent">

                    <div className="mediaDiv">
                   {/* <div className="centervideodiv">
                            <video className="Coursevideo" muted loop controls>
                                <source src={video} type="video/mp4"></source>
                            </video>
                        </div>*/}
                        <img className="solutionImg"src={course}></img>


                    </div>
                    <div className="descriptionDiv">
                        <div className="infoIcons">
                                <div className="infoDivHead">
                                        <p style={{fontSize:'15px'}}>DATA VISUALIZATION</p>
                                        <p className="projectName">Coursearch</p>
                                    </div>
                                    <div className="infoDivButtons">
                                        <a href="https://coursearch-d578e.web.app/" target="_blank">
                                            <button className="projectButton">COURSEARCH TOOL</button>
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
                                        <p>2</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-wrench"></i>
                                        <p>Figma, React.js, D3.js, Github, Kopps API</p>
                                    </div>
                                    <div className="infoDiv">
                                        <p>This project was conducted as an individual course at KTH with the goal of helping students at KTH plan and customize their educational path.
                                        </p>
                                    </div>
                        </div>

                        <div className="projectDesc">
                            Project Description
                        </div>
                        <div className="projectText">
                            Together with another master student, a web application
                           for course search and the possibility of creating a personalized education 
                            overview was designed and developed, using interactive visualizations.
                            The application was developed using React.js and D3.js and resulted in two main features - a course search visualization 
                            with filtering options and a study plan for customizing the students’ educational path.
                        </div>
                        <div className="projectDesc">
                            Problem
                        </div>
                        <div className="projectText">
                            <ul>
                    <li> Students found it difficult to find information about the course offerings at KTH</li>
                        <li>Once found, the course information was solely presented through text and a full understanding of course content and structure was restricted
                    </li>
                    <li>The course search hd insufficient filtering options</li>
                    <li> Students found it difficult to get an overview of their education
                    </li>
                        </ul>
                        </div>
                        <div className="projectDesc">
                            Solution
                        </div>
                        <div className="projectText">
                        To address the problem of finding information about KTH course offerings and suitable courses, an interactive bubble chart was created. 
                        The bubble chart has different levels of information, where courses from each department and school are grouped together. Through the filtering
                        functionality, students can search for courses based on several requirements such as level, language, campus, period, as well as by free text.
                        </div>
                        <div className="projectText">
                        The visualization of courses lets the students explore all courses at KTH, not only the ones bound to a certain school and/or department. 
                        This way, students can find elective courses that they are interested in, and that complement and/or fit their programme. 
                        A more customized education is thus easier to achieve, where students get to be involved in their learning process. 
                        </div>
                        <div className="projectText">
                        To enable an overview of a student's education, a study plan visualization was created. Here, the students can add their bachelor courses automatically
                        and their master courses manually using the search funtionality. The students gets the opportunity to explore the composition of courses and subjects
                        and see if the education is going in the direction of their wishes. 
                        </div>
                        <div className="projectDesc">
                            Design Process
                        </div>
                        <div className="projectText">
                        The design phase was initiated with a literature review and a pre-study survey in order to gain knowledge about 
                        the problem and of what tools that could be used to solve it. The literature review was conducted in order to find a solid ground for all the design choices and visual structures. 
                        This resulted in insights regarding which visual structures to use for different functionalities and data, while the user study was conducted with the aim to gain insights about the 
                        users’ thoughts of the current course-website. 

                        </div>
                        <div className="projectText">
                        When all data from the pre-study was collected and analyzed, we had a brainstorming session to 
                        figure out the best way to solve the issues that arose in the pre-study. The “best way” was based on 
                        previous research in the field of information visualization and the brainstorming was in the form of concept sketching with the purpose of generating a lot of ideas. 
                        The design was then created in Figma and was based on the answers from the survey, 
                        the insights from related work, visualization theory and the sketches made during brainstorming.
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
    export default Coursearch;

    {/*In the pursuit of an engineering degree at KTH, the possibility for students to get an overview of their education, to find suitable elective courses and to customize their education to their interests is limited. 
                In other words, there is a need for an improved tool to replace the deficient course search functionality on the current KTH website.

               In collaboration with researchers in the division of Media Technology and Interaction Design, another KTH student and I decided to carry out a project to design and develop a tool for educational overview and easy course search. */}
