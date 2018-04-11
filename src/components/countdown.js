import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Countdown extends Component {

  render() {
    var currentTime = new Date();
    return (
        <div> The current date is { currentTime.toString() } </div>
    )
  }

}

export default Countdown;