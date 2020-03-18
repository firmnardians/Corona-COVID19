import React, { Component } from "react";
import axios from "axios";

import { Doughnut } from "react-chartjs-2";

class CovidInTheWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: "",
      recovered: "",
      deaths: ""
    };
  }
  covidInTheWorld = () => {
    const baseURL = "https://covid19.mathdro.id/api";
    axios
      .get(baseURL)
      .then(res => {
        // console.log(res);
        this.setState({
          confirmed: res.data.confirmed.value,
          recovered: res.data.recovered.value,
          deaths: res.data.deaths.value
        });
      })
      .catch(err => {
        if (err) {
          alert("Sepertinya koneksi internet kamu terputus.");
        }
      });
  };

  componentDidMount() {
    this.covidInTheWorld();
  }
  render() {
    const confirmedValue = this.state.confirmed;
    const recoveredValue = this.state.recovered;
    const deathsValue = this.state.deaths;
    const totalReported = confirmedValue + recoveredValue + deathsValue;

    const graph = {
      //   labels: ["Confirmed", "Recovered", "Deaths"],
      datasets: [
        {
          data: [confirmedValue, recoveredValue, deathsValue],
          backgroundColor: ["#f1b811", "#00cc98", "#ff4f4f"],
          hoverBackgroundColor: ["#f1b811", "#00cc98", "ff4f4f"]
        }
      ]
    };
    return (
      <>
        <div className="card_app">
          <div className="card_content">
            <div className="card_content_title">
              <h1>Data Covid-19 di dunia</h1>
              <p>Keseluruhan total kasus yang dilaporkan.</p>
            </div>

            <div className="data_flex">
              <div className="card_grid width_80">
                <Doughnut data={graph} />
                <div className="card_total">
                  <h2 className="text_center mg-20">
                    {totalReported}
                    <p> Total yang di laporkan </p>
                  </h2>
                </div>
              </div>
              <div className="card_grid width_20">
                <div className="data_corona">
                  <h2>{this.state.confirmed}</h2>
                  <h3 className="color_confirmed">Dikonfirmasi</h3>
                  <h2>{this.state.recovered}</h2>
                  <h3 className="color_recovered">Sembuh</h3>
                  <h2>{this.state.deaths}</h2>
                  <h3 className="color_deaths">Kematian</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default CovidInTheWorld;
