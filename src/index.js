import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './css/style.css'
import Home from './ui/pages/Dashboard'
import Tasks from './ui/pages/Tasks'
import AddTask from './ui/pages/AddTask'
import Settings from './ui/pages/Settings'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Settings} exact path="/settings" />
        <Route component={Tasks} exact path="/tasks" />
        <Route component={AddTask} exact path="/AddTask" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
