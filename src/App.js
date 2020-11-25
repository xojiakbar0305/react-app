import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Header from './components/header/header'

import section from './components/section/section'
import xizmatlar from './components/xizmatlar/xizmatlar'

function App() {
  return (
    <Router>  
      <Header />  
        <Switch>
          <Route exact path="/" component={section} />
        <Route exact path="/services" component={xizmatlar} />
        </Switch>
    </Router>
  )
}

export default App