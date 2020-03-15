import React, {useState, useEffect} from 'react'
//import TopMenu from '../TopMenu/TopMenu'
import '../style.css'
import { useRef, useLayoutEffect } from 'react'
import pdf from './Elin Forsberg.pdf'
import foto from './CV-FOTO.png'
import Footer from '../Footer/footer'
import history from '../../history'
import { useHistory } from "react-router-dom";

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

    return (
        <React.Fragment>
            <div id="intro" className="intro">
                <img id="intro_img" src={foto}></img>
                <h1>ELIN FORSBERG</h1>
                <div className="description">
                A soon graduating student with M.Sc. in Interactive Media Technology. Passionate about service- and user experience design, as well as the technology behind it. 
                I'm interested in making digital products accessible and valueable for users and I believe that sustainability must take a bigger place in digital development.
                </div>
                <div className="button_container">
                  <button className="button" onClick={() => Redirect1()}>PROJECTS</button>
                    <button className="button" onClick={() => Redirect2()}>ABOUT ME</button>
                    <button className="button">CONTACT</button>
                    <form method="get" action={pdf}  target="_blank">
                        <button className="button" type="submit">DOWNLOAD CV</button>
                    </form>
                </div>
            </div>
            <Footer/>
          </React.Fragment>
    )
}
export default HomeScreen;