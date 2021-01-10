import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ScrollToTop from "./scrollToTop"
import HomeScreen from './pages/HomePage/home'
import Projects from './pages/Projects/projects'
import About from './pages/About/about'
import Coursearch from "./pages/Coursearch/coursearch"
import TripDoodler from"./pages/Tripdoodler/tripdoodler"
import Frontread from"./pages/Frontread/frontread"
import Nearby from"./pages/Nearby/nearby"
import Kollin from"./pages/Kollin/kollin"
import Flight from"./pages/Flight/flight"

const Router = () => {
  return (
  
    <Switch>
      <Route exact path='/' component={HomeScreen} />
      <Route exact path='/coursearch' component={Coursearch}/>
      <Route exact path='/tripdoodler' component={TripDoodler}/>
      <Route exact path='/frontread' component={Frontread}/>
      <Route exact path='/nearby' component={Nearby}/>
      <Route exact path='/kollin' component={Kollin}/>
      <Route exact path='/flight' component={Flight}/>
      <Route exact path='/about' component={About}/>
    </Switch>
  )
}

export default Router
