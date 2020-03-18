import React, { Component } from "react";
import CovidInTheWorld from "../Graph/CovidInTheWorld";
import CovidByState from "../Graph/CovidByState";
import CovidDaily from "../Graph/CovidDaily";
import About from "../Card/About";
import Anti from "../Card/Anti";
import CovidRecovered from "../Graph/CovidRecovered";

class Home extends Component {
  render() {
    return (
      <>
        <div className="data_flex">
          <div className="card_grid">
            <CovidInTheWorld />
          </div>

          <div className="card_grid">
            <CovidByState />
          </div>
        </div>

        <div className="data_flex">
          <div className="width_30">
            <Anti />
            <About />
          </div>
          <div className="width_40">
            <CovidDaily />
          </div>
          <div className="width_30">
            <CovidRecovered />
          </div>
        </div>
        {/* <div className="card_center">
     
        </div> */}
      </>
    );
  }
}
export default Home;
