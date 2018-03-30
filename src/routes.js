import React from 'react'

import { Switch, Route } from 'react-router-dom'

import login from './components/login'
import dashboard from './components/dashboard'
import wizard1 from './components/wizard/wizard1'

export default (
    <Switch>
      <Route path='/' component={login} exact />
      <Route path='/dashboard' component={dashboard} />
      <Route path='/wizard1' component={wizard1} />
    </Switch>
 )
