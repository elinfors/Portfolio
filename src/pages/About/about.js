import React, {useState, useEffect} from 'react'
import Footer from '../Footer/footer'
import pdf from './Elin Forsberg CV.pdf'
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
              
              </p>
              <p className="aboutContent">
              I see myself as a communication between users, technology and design. During my education I have explored a wide range of technologies, strategies and problems to solve - from sustainability to e-learning.
              To me, human-centered design is the most important aspect of digitalization and I believe in a user centric digital future,
              both to ensure good user experiences and for creating value- and growth for any business.
              </p>

              <p className="aboutContent">
              I am currently pursuing a Master’s of Science in Interactive Media Technology at KTH - Royal Institute of Technology in Stockholm, Sweden, 
              and I plan to graduate in June 2021.
              </p>
              
            
              <div className="aboutContentCV">
                <p>
              Want to know more about my previous experiences?
              </p>
                <form method="get" action={pdf}  target="_blank">
                    <button className="buttonCV" type="submit">
                   <p className="cvText">DOWNLOAD CV</p>
                    <i id="cvbutton" className="fas fa-arrow-circle-down"></i>
                    
                    </button>
              </form>
              </div>
             

          </div>

        </div>
      </div>


    </React.Fragment>
  )}
  export default About;