import React, { Component } from "react";
import "./howWeWork.css";
import one from "./pics/digitONE.JPG";
class HowWeWork extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center", color: "#002f5f" }}>
          <strong>How we work</strong>
        </h3>
        <p style={{ textAlign: "center" }}>Simply.Collaboratively.Endlessly</p>
        {/* <br /> */}
        {/* <br /> */}

        <div class="row">
          {/* <img src={one} alt="Step 1" className="stepicon" /> */}
          <div class="col-sm-4">
            <h4 style={{ textAlign: "center", color: "#002f5f" }}>
              <strong>Step 1:</strong>
            </h4>
            <h4 style={{ color: "#e30514" }}>We get to know your business</h4>
            <p>
              One of our consultants will visit you to understand your
              business'challenges and needs.Whenever it's Health & Safety or HR
              & Employment Law you need support with,we're the experts.
            </p>
          </div>

          <div class="col-sm-4">
            <h4 style={{ textAlign: "center", color: "#002f5f" }}>
              <strong>Step 2:</strong>
            </h4>
            <h4 style={{ color: "#e30514" }}>We get you back on track</h4>
            <p>
              We'll get you up-to-date with the latest legislation by reviewing
              or creating all your essential contracts,handbooks,systems and
              policies.
            </p>
          </div>

          <div class="col-sm-4">
            <h4 style={{ textAlign: "center", color: "#002f5f" }}>
              <strong>Step 3:</strong>
            </h4>
            <h4 style={{ color: "#e30514" }}>We're here for you 24/7</h4>
            <p>
              Whether you need expert advice,help during a crisis or a friendly
              ear,our industry leading experts are here for you 24/7.We'll also
              give you access to 100s of fact sheets and online tools,too.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HowWeWork;
