import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/home/home'
import NovoLead from './components/novoLead/novoLead'
import VerLeads from './components/verLeads/verLeads'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/novoLead" component={NovoLead} />
      <Route path="/verLeads" component={VerLeads} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))