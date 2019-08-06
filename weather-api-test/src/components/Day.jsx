import React, { Component } from "react";
import Time from "./Time";
import "./weatherDisplay.css";

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="day">
        <div className="day-title">
          <strong>
            {this.props.date === new Date().toDateString()
              ? "Today"
              : this.props.date}
          </strong>
        </div>
        <div className="day-time-container">
          {this.props.day.map(time => (
            <Time
              key={`${time.getAttribute("from")} ${this.props.date}`}
              time={time}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Day;
