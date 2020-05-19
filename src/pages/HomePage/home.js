import React, {useState, useEffect} from 'react'
//import TopMenu from '../TopMenu/TopMenu'
import '../style.css'
import { useRef, useLayoutEffect } from 'react'
import pdf from './Elin Forsberg.pdf'
import foto from './CV-FOTO.png'
import Projects from '../Projects/projects'
import history from '../../history'
import { useHistory } from "react-router-dom";
import scrollToComponent from 'react-scroll-to-component';
import Footer from "../Footer/footer"
import Skills from "../Skills/skills"
const HomeScreen = () => {

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


    return (
        <React.Fragment>
          
            <div id="intro" className="intro" ref={myRef3}>
                <img id="intro_img" src={foto}></img>
                <h1>ELIN FORSBERG</h1>
                <div className="button_container_icons">
                  <a href="#">
                <i class="fab fa-linkedin"></i>
                </a>
                <a href="#">
                <i class="fab fa-github-square"></i>
                </a>
                <a  href="mailto:forsbergselin@gmail.com" target="_blank">
                <i class="fas fa-envelope-square"></i>
                </a>
                </div>
                
                <div className="description">
                A soon graduating M.Sc. student in Interactive Media Technology. Passionate about service- and user experience design, as well as the technology behind it. 
                I'm interested in making digital products accessible and valueable for users and I am passionate about defining problems to solve through iterative design processes.
                </div>
                <div className="button_container">
                  {/*<button className="button" onClick={() => Redirect1()}>PROJECTS</button>-->
                    <button className="button" onClick={() => Redirect2()}>ABOUT ME</button>*/}
                    <button className="button sticky" onClick={executeScrollProjects}>PROJECTS</button>
                    <button className="button sticky" onClick={executeScrollSkills}>SKILLS</button>
                    <button className="button sticky" onClick={executeScrollAbout}>ABOUT</button> {/*onClick={executeScroll2}*/}
                   <form method="get" action={pdf}  target="_blank">
                        <button className="button" type="submit">DOWNLOAD CV</button>
                  </form>
                </div>
                
            </div>
            <div className="row">
              <div className="column left">
              <div ref={myRef1} className="skillsContainer">
                  <Skills/>
                </div>
                <div ref={myRef} className="projectsContainer">
                <Projects/>
                </div> 
                <div ref={myRef2} className="aboutContainer">
                  <h1>ABOUT CONTAINER</h1>
                </div>
              </div>
              <div className="column right">
                <button className="button2 up" onClick={executeScrollUp}>
                  <i class="fas fa-chevron-circle-up"></i>
                </button>
              </div>
            </div>
            <div className="row">
              <Footer/>
            </div>

          </React.Fragment>
    )
}
export default HomeScreen;