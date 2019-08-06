import React, { Component } from "react";
import axios from "axios";
import WeatherDisplay from "../WeatherDisplay";
import "./weatherContainer.css";

class WeatherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:
        "https://api.met.no/weatherapi/locationforecast/1.9/?lat=59.6691636&lon=10.6586429",
      data: null
    };
  }

  componentDidMount() {
    let parser = new DOMParser();

    axios.get(this.state.url).then(result => {
      console.log(result);
      this.setState({
        data: [
          ...parser
            .parseFromString(result.data, "text/xml")
            .getElementsByTagName("time")
        ]
      });
    });
  }

  makeAllWeatherComponents = () => {
    let components = this.state.data;

    let temperatureComponents = this.state.data.filter(
      component =>
        component.children[0].children[0] &&
        component.children[0].children[0].nodeName === "temperature"
    );

    console.log(temperatureComponents);

    let tmp = components[0].children[0].children[0].getAttribute("value");
    console.log("tmp", tmp);

    return temperatureComponents.map(component => (
      <WeatherDisplay
        to={this.makePresentableDate(new Date(component.getAttribute("to")))}
        from={this.makePresentableDate(
          new Date(component.getAttribute("from"))
        )}
        temperature={
          component.children[0].children[0]
            ? component.children[0].children[0].getAttribute("value")
            : ""
        }
      />
    ));
  };

  makePresentableDate = date => {
    let day = date.toDateString();
    let time = date.toLocaleTimeString();
    return `${day} ${time}`;
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="weather-container">
        {this.state.data == null ? "Hehey" : this.makeAllWeatherComponents()}
      </div>
    );
  }
}

export default WeatherContainer;
