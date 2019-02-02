import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from '~/src/containers/pages/Home'

export default () => {
  return(
    <Router hashType="noslash">
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  )
}
