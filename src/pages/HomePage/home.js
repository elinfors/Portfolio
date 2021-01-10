import React, {useState, useEffect} from 'react'
import '../style.css'
import { useRef, useLayoutEffect } from 'react'
import pdf from './Elin Forsberg.pdf'
import foto from './cvfoto.jpg'
import arrow from './arrow.png'
import Projects from '../Projects/projects'
import About from '../About/about'
import history from '../../history'
import { useHistory } from "react-router-dom";
import scrollToComponent from 'react-scroll-to-component';
import Footer from "../Footer/footer"
import Contact from "../Contact/contact"
import Navbar from "../Navbar/navbar"
import Skills from "../Skills/skills"
import useCollapse from 'react-collapsed';
const HomeScreen = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  let history = useHistory();
    
  /*const [showOverlay, setShowOverlay] = useState(
    showOverlay ? 'display' : 'none'
  )*/
  const Redirect1 = () =>{

    history.push("/projects");
  }
  const Redirect2 = () =>{

    history.push("/about");
  }

  const scrollToRef = (ref) => window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth'     
})   

  
    const myRef = useRef(null)
    const myRef1 = useRef(null)
    const myRef2 = useRef(null)
    const myRef3 = useRef(null)

    const executeScrollProjects = () => {scrollToRef(myRef)}
    const executeScrollSkills = () => {scrollToRef(myRef1)}
    const executeScrollAbout = () => {scrollToRef(myRef2)}
    const executeScrollUp = () => {scrollToRef(myRef3)}

    const hamburger = () =>{
        var menu = document.getElementById("menu");
  
        console.log(menu.className)
        if (menu.className === "menu sticky") {
          menu.className += " responsive";

        } else {
          menu.className = "menu sticky";
        }
        console.log(menu.className)
      
    }



    return (
        <React.Fragment>
          {/*
          <div className="row">
          <div className="topnav" id="myTopnav">
              <button onClick={executeScrollUp} className="top_active">Home</button>
              <button onClick={executeScrollProjects}>Projects</button>
              <button onClick={executeScrollAbout}>About</button>
              <button>Contact</button>
          </div>
          </div>
          */}
          {/*
          <div className="menu sticky" id="menu">
          <p className="navName">Elin Forsberg</p>
          <a href="#" id="close" className="close" onClick = {()=>{hamburger()}}>
            <i class="fas fa-times fa-xs"></i>
            </a>
            <div className="button_container">
                <button className="button sticky active" onClick={executeScrollUp}>Home </button>
                <button className="button sticky" onClick={executeScrollProjects}>Projects</button>
                <button className="button sticky" onClick={executeScrollAbout}>About</button>
                <form method="get" action={pdf}  target="_blank">
                    <button className="button" type="submit">Download CV</button>
              </form>
            </div>
            <a href="#" id="icon" className="icon" onClick = {()=>{hamburger()}}>
              <i className="fa fa-bars"></i>
            </a>
            
            
          </div>
        */ }
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#f0f0f0'}}>
          <a class="navbar-brand" onClick={executeScrollUp}>ELIN</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" onClick={executeScrollUp}>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link"  onClick={executeScrollProjects}>Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={executeScrollAbout}>About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>






          
          <div className="headerRow" ref={myRef3}>

              


              <div id="intro" className="intro" >

                
                  <p className="name">ELIN FORSBERG</p>
                  <div className="introRow">
                    <div className="words2">
                      <div>
                          UX Designer
                      </div>
                      <div>
                        |
                      </div>
                      <div>
                          Web Developer
                      </div>
                      <div>
                        |
                      </div>
                      <div>
                          MSc Student
                      </div>
      
                  </div>
                    
                    <button className="discoverButton" onClick={executeScrollProjects}>
                      DISCOVER
                    </button>
                  </div>
                  <div className="getInTouch">
                    Want to get in touch?
                  </div>
                    <div className="button_container_icons">
                      <a href="https://www.linkedin.com/in/elinfors/">
                    <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/elinfors">
                    <i className="fab fa-github-square"></i>
                    </a>
                    <a  href="mailto:forsbergselin@gmail.com" target="_blank">
                    <i className="fas fa-envelope-square"></i>
                    </a>
                    </div>
                  </div>
            </div>


                
            
            <div className="row" ref={myRef}>
      
             {/*} <div ref={myRef1} className="skillsContainer">
                  <Skills/>
                  </div>*/}

                  <div className="projectsContainer">
                  <Projects/>
                  </div>
              </div>

                <div className="row" ref={myRef2}>
                <div className="aboutContainer">
                  <About/>
                </div>
                </div>
                <div className="row">
                <Contact/>
                </div>
            
            
            <div className="rowFooter">
              <Footer/>
            </div>

          </React.Fragment>
    )
}
export default HomeScreen;