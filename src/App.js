import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Navbar from './components/navbar';
import TicTacToe from './components/tictactoe';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/tictactoe" component={TicTacToe}/>
        </div>
      </Router>
    );
  }
}

export default App;
