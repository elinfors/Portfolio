import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Router from './Router'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import Footer from "./pages/Footer/footer"

function App() {
  return (
      <BrowserRouter>
        <div className='App'>
          <Router />
          
        </div>
     
      </BrowserRouter>
    
  );
}

export default App;
