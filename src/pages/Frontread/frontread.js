import React, {useState, useEffect} from 'react'
//import "../style.css"
import "./frontread.css"
import "../projectStyle.css"
import history from '../../history'
import { useHistory } from "react-router-dom";
import Footer from "../Footer/footer"
import pdf from './Frontread Project - Report.pdf'

var goal = require('./goal.png')
var feedback = require('./feedback.png')
var overview = require('./overview.png')
var progress = require('./progress.png')
var theme1 = require('./theme1.png')
var theme2 = require('./theme2.png')
 var logo = require('../HomePage/EFlogoWhite.png')


const Frontread = () =>{
    let history = useHistory();

    const RedirectBack = () =>{

        history.push("/");
        console.log("clicked")
      }

      const RedirectTripdoodler = () =>{

        history.push("/tripdoodler");
        console.log("clicked")
      }
      const RedirectNearby = () =>{

        history.push("/nearby");
        console.log("clicked")
      }


    return(
        <React.Fragment>
           
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

                <div className="box2">
                    <div className="headlineBox">
                        <i class="fas fa-chevron-left" onClick={()=>{RedirectTripdoodler()}}></i>
                        <div className="headline">
                        Frontread
                        </div>
                        <i class="fas fa-chevron-right" onClick={()=>{RedirectNearby()}}></i>
                    </div>
                        <div className="words">
                            <div>
                                E-learning
                            </div>
                            <div>
                            
                            </div>
                            <div>
                                Gamification
                            </div>
                            <div>
                            
                            </div>
                            <div>
                                Product Development
                            </div>
                        </div>
                       
                </div>
                
                <div className="projectContent">

                    <div className="mediaDiv">
                        <img className="solutionImg"src={goal}></img>
                        <img className="solutionImg"src={overview}></img>
                        <img className="solutionImg"src={feedback}></img>
                        <img className="solutionImg"src={theme2}></img>
                        <img className="solutionImg"src={theme1}></img>
                        <img className="solutionImg"src={progress}></img>

                    </div>
                    <div className="descriptionDiv">
                        <div className="infoIcons">
                                    <div className="infoDivHead">
                                        <p style={{fontSize:'15px'}}>E-LEARNING AND GAMIFICATION</p>
                                        <p className="projectName">Frontread Redesign</p>
                                    </div>
                                    <div className="infoDivButtons">
                                        <a href="https://www.figma.com/proto/DWhBQ3syZcrgP6rVPIKk1V/Frontread?node-id=17%3A19&scaling=min-zoom" target="_blank">
                                            <button className="projectButton">VIEW WIREFRAMES</button>
                                        </a>
                                        <form method="get" action={pdf}  target="_blank">
                                                <button className="projectButtonDownload" type="submit">PROJECT REPORT
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
                                        <p>3</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-wrench"></i>
                                        <p>Figma, Design Thinking, Double Diamond, PACT-analysis, Participatory Evaluation, Proto Personas</p>
                                    </div>
                                    <div className="infoDiv">

                                        <p>This project was part of a course in e-learning and entrepreneurship at DTU, Danish Technical University, in collaboration with the e-learning company <a className="aHrefLink" href="https://www.frontread.com/en/" target="_blank">Frontread</a>. </p>


                                    </div>
    
                        </div>

                        <div className="projectDesc">
                            Project Description
                        </div>
                        <div className="projectText">
                        Frontread provides an e-learning platform for school students with the purpose of practising and improving reading speed and is currently being used by more than 150 000 students in over 800 schools. The aim of the project was to redesign the e-learning platform, so that students would become more self-driven and motivated without needing support and help from teachers. 

                        </div>
                        <div className="projectDesc">
                            Problem
                        </div>
                        <div className="projectText">
                        Although Frontread is a success story, they were looking for possibilities to make the training on the platform independent of teachers and more self-driven by students. They were also interested in increasing the students’ motivation to practise their reading speed and their engagement on the platform. 

                        </div>
                        <div className="projectDesc">
                            Solution
                        </div>
                        <div className="projectText">
                        We redesigned the platform and integrated motivational features and gamification elements. By using theory of human behavior, e-learning, gamification and several learning theories such as self-regulation theory and self-determination theory, we found goal-setting, personalized feedback, relatable content and non-repetitiveness to be important factors to increase autonomy and motivation. The final delivery was a mockup prototype that consisted of two main parts, an exercise part and a personal dashboard. In our design, students can set their own individual goals with the training and get personal feedback on their progress in relation to the goals. They also get to select a theme for the different training modules to make the experience of the platform more personalized, less repetitive and by unlocking new themes along the training the student also gets something to work for. 

                        </div>
                        <div className="projectDesc">
                            Design Process
                        </div>
                        <div className="projectText">
                        A design thinking approach was used to structure the project in an iterative manner, whereas the Double Diamond method was applied to divide the design process into the four phases Discover, Define, Develop and Deliver. A challenge with this design process was that we didn’t have access to students using the platform, making it difficult to test and evaluate design ideas. Instead, we used methods like participatory user testing, qualitative stakeholder interviews, a PACT-analysis and proto-personas to try to understand and emphasize with the users of the platform. Please feel free to download the project report to read more about the process. 
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
    export default Frontread;

    {/*In the pursuit of an engineering degree at KTH, the possibility for students to get an overview of their education, to find suitable elective courses and to customize their education to their interests is limited. 
                In other words, there is a need for an improved tool to replace the deficient course search functionality on the current KTH website.

               In collaboration with researchers in the division of Media Technology and Interaction Design, another KTH student and I decided to carry out a project to design and develop a tool for educational overview and easy course search. */}
