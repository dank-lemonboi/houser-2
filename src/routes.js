import React from 'react'

import { Switch, Route } from 'react-router-dom'

import login from './components/login'
import dashboard from './components/dashboard'
import wizard1 from './components/wizard/wizard1'
import wizard2 from './components/wizard/wizard2'
import wizard3 from './components/wizard/wizard3'
import wizard4 from './components/wizard/wizard4'
import wizard5 from './components/wizard/wizard5'

export default (
    <Switch>
      <Route exact path='/' component={login} />
      <Route path='/dashboard' component={dashboard} />
      <Route path='/wizard1' component={wizard1} />
      <Route path='/wizard2' component={wizard2} />
      <Route path='/wizard3' component={wizard3} />
      <Route path='/wizard4' component={wizard4} />
      <Route path='/wizard5' component={wizard5} />
    </Switch>
 )
