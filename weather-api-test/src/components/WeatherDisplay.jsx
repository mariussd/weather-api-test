import React, { Component } from "react";
import "./weatherDisplay.css";

class WeatherDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="weather-display-container">
        <span>{`From: ${this.props.from}`} </span>
        <span>{`To: ${this.props.to}`} </span>
        <span>{`Temperature: ${this.props.temperature} C`}</span>
      </div>
    );
  }
}

export default WeatherDisplay;
