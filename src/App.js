import React from 'react'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import Router from './Router'
import ScrollToTop from "./scrollToTop"
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import Footer from "./pages/Footer/footer"

function App() {
  return (
      <HashRouter basename="/portfolio">
      <ScrollToTop>
        <div className='App'>
          <Router/>
          
        </div>
     </ScrollToTop>
      </HashRouter>
    
  );
}

export default App;
