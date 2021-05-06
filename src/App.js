import './App.css';
import React, { Component } from 'react'
import MyNavBar from './components/MyNavBar';
import {Switch, Route } from 'react-router-dom'
import About from './components/About'
import Profile from './components/Profile';
import Home from './components/Home';
import NotFound from './components/NotFound';

class App extends Component {

  state = {
    name: 'Manish'
  }

  render() {
    return (
      <div>
        <MyNavBar />
        {/* Switch is used to select just the first matching route */}
        <Switch>
          {/* Automatically passes the route props to the Home component as well */}
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" component={About} /> */}
          
          {/* If you want to pass props */}

          <Route path="/about" render={ (routerProps) => {

            // {...routeProps} will spread all the key value pairs and send it one by one
            return <About name={this.state.name} {...routerProps}/>
          }} />

          {/* <Route exact path="/profile" component={Profile} /> */}
          {/* Dynamic example */}
          <Route  path="/profile/:name" component={Profile} />
          {/* <Route path="/profile/:name/:age" component={Profile} /> */}

          {/* Always create the 404 route at the last */}
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}


export default App;
