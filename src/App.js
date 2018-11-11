import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import './assets/style/common/reset.less'

const One = Loadable({ loader: () => import('./views/One.js'), loading: () => null });
const Two = Loadable({ loader: () => import('./views/Two.js'), loading: () => null });

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={One} />
          <Route path="/two" component={Two} />
        </Switch>
      </Router>
    );
  }
}

export default App;
