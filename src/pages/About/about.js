import React, {useState, useEffect} from 'react'
import Footer from '../Footer/footer'
import "./about.css"
var aboutImage = require('./cvfoto.jpg')


const About = () =>{


return(
    <React.Fragment>
      <div className="aboutSection">
        <div className="about">
          <div className="aboutImage">
          <img className="cvfoto" src={aboutImage}></img>
          </div>
          <div className="aboutText">
            <p>ABOUT ME</p>
              <p className="aboutTitle"> 
            Curious MSc student at KTH, digitalization enthusiast and designer.
            </p>
            <p className="aboutContent">
              I have, for as long as I can remember, been torn between my creativity and analytical mindset. 
              Studying Interactive Media Technology at KTH allowed me to combine them and a whole new world of technology and design opened up. 
              During my education I have explored a wide range of technologies, strategies and problems to solve - from sustainability to e-learning.
              To me, human-centered design is the most important aspect of digitalization and I believe in a user centric digital future,
              both to ensure good user experiences and for creating value- and growth for any business.
              
              </p>
              <p className="aboutContent">
              I am a driven person who works in structured, efficient and goal-oriented ways, while always staying curious and open. 
              
              </p>
              <p className="aboutContent">
              I am currently pursuing a Master’s of Science in Interactive Media Technology at KTH - Royal Institute of Technology in Stockholm, Sweden, 
              and I plan to graduate in June 2021.
              </p>
              
            
              <p className="aboutContent">
              Do you wish to know more about my previous experiences?
              </p>

          </div>

        </div>
      </div>


    </React.Fragment>
  )}
  export default About;