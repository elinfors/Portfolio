import React, {useState, useEffect} from 'react'
import Footer from '../Footer/footer'
//import "../style.css"
import './skills.css'
const tools = require("./tools.png")


const Skills = () =>{


return(
    <React.Fragment>
        <div className="skillBox">
            <div className='skillSet'>
                Explaining skills in short
            </div>
            <div className="skillsContainer">
            <div className="skill">
            <img src={tools} ></img>
                <div>UX-Design</div>
            </div>
            <div className="skill">
                <div>Frontend Development</div>
            </div>
            <div className="skill">
                FRAMEWORKS
            </div>

            </div>
        </div>

    </React.Fragment>
  )}
  export default Skills;