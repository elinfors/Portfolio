import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './pages/HomePage/home'
import Projects from './pages/Projects/projects'
import About from './pages/About/about'

const Router = () => {
  return (

    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/projects' component={Projects}/>
      <Route exact path='/about' component={About}/>
    </Switch>

  )
}

export default Router
