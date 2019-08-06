import React, { Component } from "react";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="time">
        <div className="time-date">
          {new Date(this.props.time.getAttribute("from"))
            .toLocaleTimeString()
            .slice(0, 5)}
        </div>
        <div className="time-temperature">
          <strong>
            {`${this.props.time.children[0].children[0].getAttribute(
              "value"
            )} °C`}
          </strong>
        </div>
      </div>
    );
  }
}

export default Time;
