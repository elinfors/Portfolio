import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Router from './Router'
import ScrollToTop from "./scrollToTop"
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import Footer from "./pages/Footer/footer"

function App() {
  return (
      <BrowserRouter>
      <ScrollToTop>
        <div className='App'>
          <Router/>
          
        </div>
     </ScrollToTop>
      </BrowserRouter>
    
  );
}

export default App;
