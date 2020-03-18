import React, { Component } from "react";
import axios from "axios";

export class CovidRecovered extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recoveredCountry: []
    };
  }

  getRecoveredCountry = () => {
    axios.get("https://covid19.mathdro.id/api/recovered").then(res => {
      this.setState({
        recoveredCountry: res.data
      });
    });
  };

  componentDidMount() {
    this.getRecoveredCountry();
  }
  render() {
    return (
      <>
        <div className="card_app">
          <div className="card_content_daily">
            <div className="card_content_title">
              <h1>Berhasil sembuh</h1>
              <p>Bangga jika teman kita masih bisa terobati.</p>
            </div>

            {this.state.recoveredCountry.map((item, index) => {
              return (
                <div key={index} className="card_recovered">
                  <h3 className="color_recovered">{item.countryRegion}</h3>
                  <p>
                    {item.provinceState === null
                      ? ""
                      : `Pada provinsi ${item.provinceState}`}{" "}
                    berhasil sembuh dengan jumlah {item.recovered} orang.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default CovidRecovered;
