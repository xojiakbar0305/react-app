import React from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom'
import './App.css'

//load componets
import Header from './components/header/header'
import Section from './components/section/section'

function App() {
    return (
        <Router>
            <Header />
            <Section />
        </Router>
    )
}

export default App
