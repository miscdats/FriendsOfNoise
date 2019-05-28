import React from 'react'
import { Route } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom';
import { PrivateRoute } from '../../_components';

import Home from './../Home'
import Signup from './../Signup'
import Signin from './../Signin'
import About from './../About'
import Calendar from './../Calendar'
import Profile from './../Profile'
import Membership from './../Membership'

const Router = () => (


  <Router history={window.history}>
    <PrivateRoute exact path='/' component={Home}/>
    <Route path='/signup' component={Signup}/>
    <Route path='/signin' component={Signin}/>
    <Route path='/about'  component={About}/>
    <Route path='/calendar'   component={Calendar}/>
    <Route path='/profile'    component={Profile}/>
    <Route path='/membership' component={Membership}/>
  </Router>
)

export default Router;
