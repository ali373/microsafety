import React, { Component } from "react";
import "./whtWeDo.css";

class Whtwedo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h3 style={{ textAlign: "center", color: "#002f5f" }}>
          <strong>What we do</strong>
        </h3>
        <p style={{ textAlign: "center" }}>
          Safe Solutions is focused on delivering best quality Training and
          provide Consultancy services in Quality, Health, Safety & Environment
          (QHSE)
        </p>
        {/* <br /> */}
        {/* <br /> */}
        <div class="row">
          <div class="col-sm-4">
            <div class="card text-center bckgrncolor">
              <div class="card-body">
                <h4 class="card-title" className="cardHeadText">
                  Training
                </h4>
                <p class="card-text" className="cardPText">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card text-center bckgrncolor">
              <div class="card-body">
                <h4 class="card-title" className="cardHeadText">
                  Consultancy
                </h4>
                <p class="card-text" className="cardPText">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card text-center bckgrncolor">
              <div class="card-body">
                <h4 class="card-title" className="cardHeadText">
                  Auditing
                </h4>
                <p class="card-text" className="cardPText">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Whtwedo;
