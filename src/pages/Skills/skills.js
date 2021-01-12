import React, {useState, useEffect} from 'react'
import Footer from '../Footer/footer'
import "../style.css"
const tools = require("./tools.png")


const Skills = () =>{


return(
    <React.Fragment>
        <div className="skillBox">
            <div className="skill">
            <img src={tools} ></img>
                <div>TOOLS</div>
            </div>
            <div className="skill">
                LANGUAGES
            </div>
            <div className="skill">
                FRAMEWORKS
            </div>
            </div>

    </React.Fragment>
  )}
  export default Skills;