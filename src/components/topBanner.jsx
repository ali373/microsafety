import React, { Component } from "react";
import "./topBanner.css";
class Topbanner extends Component {
  state = {};
  render() {
    return (
      <div class="container-fluid bck">
        <div class="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-4">
            <p>Let the journey to the greatness begin</p>
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-4">
            <p>info@safesolutions.com | +965-23928344</p>
          </div>
          <div className="col-sm-1"></div>
        </div>
        {/* <div class="container">
            <p>Let the journey to the greatness begin</p>
            <span>
              <p>info@safesolutions.com | +965-23928344</p>
            </span>
          </div>*/}
      </div>
    );
  }
}

export default Topbanner;
