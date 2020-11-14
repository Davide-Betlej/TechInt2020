import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import Items from './items'
import './index.css';
import App from './App';
import About from './About'
import reportWebVitals from './reportWebVitals';
import Notfound from './NotFound'

  const routing = (
    <Router>
      <div>
        <h1>React Router Example</h1>
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={
               {color:'red'}
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={
               {color:'green'}
            }>About</NavLink>
          </li>
          <li>
            <NavLink to="/items" exact activeStyle={
               {color:'pink'}
            }>Items</NavLink>
          </li>
        </ul>
        <Switch>
           <Route exact path="/" component={App} />
           <Route path="/about" component={About} />
           <Route path="/items" component={Items} />
           <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

reportWebVitals();