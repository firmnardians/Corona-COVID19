import React, { Component } from "react";

export class Anti extends Component {
  render() {
    return (
      <>
        <div className="card_app">
          <div className="card_content_daily">
            <div className="card_content_title">
              <h1>Cara pencegahan</h1>
              <p>Beberapa tips untuk menghindari virus corona.</p>
            </div>
            <div className="card_anti">
              <ul>
                <li>Mencuci tangan dengan benar</li>
                <li>Menggunakan masker</li>
                <li>Menjaga daya tahan tubuh</li>
                <li>Tidak pergi ke negara terjangkit</li>
                <li>Minum vitamin C</li>
                <li>
                  Hindari menyentuh mata, hidung, dan mulut dengan tangan yang
                  tidak dicuci
                </li>
                <li>Konsumsi gizi seimbang, perbanyak sayur dan buah</li>
                <li>Rajin olahraga dan istirahat cukup</li>
                <li>Jangan mengonsumsi daging yang tidak masak</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Anti;
