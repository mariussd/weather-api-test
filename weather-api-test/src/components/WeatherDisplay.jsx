import React, { Component } from "react";
import Day from "./Day";
import "./weatherDisplay.css";

class WeatherDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { days: {} };
  }

  concatTemperaturesInOneDay = temperatures => {
    let temperaturesSortedByDay = {};
    temperatures.forEach(element => {
      let fromDate = new Date(element.getAttribute("from")).toDateString();
      if (temperaturesSortedByDay[fromDate]) {
        temperaturesSortedByDay[fromDate].push(element);
      } else {
        temperaturesSortedByDay[fromDate] = [];
        temperaturesSortedByDay[fromDate].push(element);
      }
    });

    return temperaturesSortedByDay;
  };

  componentDidMount() {
    this.setState({
      days: this.concatTemperaturesInOneDay(this.props.temperatureComponents)
    });
  }

  render() {
    return (
      <div className="weather-display-container">
        {Object.keys(this.state.days)
          .sort((a, b) => {
            return new Date(a) - new Date(b);
          })
          .map(day => (
            <Day key={day} day={this.state.days[day]} date={day} />
          ))}
      </div>
    );
  }
}

export default WeatherDisplay;
