import React, { Component } from "react";
import axios from "axios";

class CovidDaily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daily: []
    };
  }

  getDailyAPI = () => {
    const baseURL = "https://covid19.mathdro.id/api/daily";
    axios.get(baseURL).then(res => {
      // console.log("daily", res);
      this.setState({
        daily: res.data
      });
    });
  };

  componentDidMount() {
    this.getDailyAPI();
  }
  render() {
    return (
      <>
        <div className="card_app">
          <div className="card_content_daily">
            <div className="card_content_title">
              <div className="data_flex">
                <h1>Update Terbaru</h1>
              </div>
              <p>Laporan terbaru kasus Covid-19.</p>
              <p>
                {" "}
                format tanggal:<i> tahun/bulan/hari</i>
              </p>
            </div>

            {this.state.daily.reverse().map(item => {
              const date = item.reportDateString;

              return (
                <div key={item.objectid} className="card_recent">
                  <div className="data_date">
                    <h4>{date}</h4>
                  </div>
                  <div className="data_flex">
                    <div className="card_grid ">
                      <h4 className="text_center color_confirmed">
                        Dikonfirmasi: {item.totalConfirmed}
                      </h4>
                    </div>
                    <div className="card_grid">
                      <h4 className="text_center color_recovered">
                        Sembuh: {item.totalRecovered}
                      </h4>
                    </div>
                  </div>
                  <div className="mt-20">
                    <p className="color_grey">
                      Total {item.mainlandChina} kasus di China dan{" "}
                      {item.otherLocations} di negara lain
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default CovidDaily;
