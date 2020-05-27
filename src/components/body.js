import React, { Component } from "react";
import "./body.css";
import ssi from "./pics/ssi.jpg";
import leaf from "./pics/idea1.png";
import banner1 from "./pics/banner-1.png";
import banner2 from "./pics/banner-2.jpg";
import eqhse1 from "./pics/images.jpg";
import HowWeWork from "./howWeWork";
import Whtwedo from "./whtWeDo";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: [
        "Announcement1",
        "Announcement2",
        "Announcement3",
        "Announcement4",
        "Announcement5",
      ],
      trainings: [
        "Construction Safety",
        "Construction Supervisor",
        "Basic Firefighting Training",
        "IOSH Managing Safely Certification",
        "Certified scaffolders training",
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <div class="row mainRow">
          <div class="col-sm contentBar">
            <Whtwedo />
            <br />
            <br />
            <br />
            <HowWeWork />
            <div class="ar3">
              <h3 style={{ color: "#002f5f" }}>
                <strong>
                  Progress your career with our first class training
                </strong>
              </h3>
            </div>

            <div class="card-deck ar4">
              <div class="card">
                <img class="card-img-top" src={ssi} alt="Card image cap" />
                <div class="card-body">
                  {/* <h5 class="card-title">Free Resources</h5> */}
                  <a
                    href="#"
                    class="stretched-link cardlinksfont onlinksHover"
                    style={{ color: "#002f5f" }}
                  >
                    <strong>Diplomas</strong>
                  </a>
                </div>
              </div>

              <div class="card">
                <img class="card-img-top" src={ssi} alt="Card image cap" />
                <div class="card-body">
                  {/* <h5 class="card-title">IOSH Managing Safely</h5> */}
                  <a
                    href="#"
                    class="stretched-link cardlinksfont onlinksHover"
                    style={{ color: "#002f5f" }}
                  >
                    <strong>IOSH Managing Safely</strong>
                  </a>
                </div>
              </div>

              <div class="card">
                <img class="card-img-top" src={ssi} alt="Card image cap" />
                <div class="card-body">
                  {/* <h5 class="card-title">NEBOSH Qualifications</h5> */}
                  <a
                    href="#"
                    class="stretched-link cardlinksfont onlinksHover"
                    style={{ color: "#002f5f" }}
                  >
                    <strong>NEBOSH Qualifications</strong>
                  </a>
                </div>
              </div>
            </div>

            <div class="card-deck ar5">
              <div class="card">
                <img class="card-img-top" src={ssi} alt="Card image cap" />
                <div class="card-body">
                  {/* <h5 class="card-title">Diplomas</h5> */}
                  <a
                    href="#"
                    class="stretched-link cardlinksfont onlinksHover"
                    style={{ color: "#002f5f" }}
                  >
                    <strong>Free Resources</strong>
                  </a>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={ssi} alt="Card image cap" />
                <div class="card-body">
                  {/* <h5 class="card-title">Online Training Courses</h5> */}
                  <a
                    href="#"
                    class="stretched-link cardlinksfont onlinksHover"
                    style={{ color: "#002f5f" }}
                  >
                    <strong>Online Training Courses</strong>
                  </a>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={ssi} alt="Card image cap" />
                <div class="card-body">
                  {/* <h5 class="card-title">Remote Audits and Consultancy</h5> */}
                  <a
                    href="#"
                    class="stretched-link cardlinksfont onlinksHover"
                    style={{ color: "#002f5f" }}
                  >
                    <strong>Remote Audits and Consultancy</strong>
                  </a>
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-center">
              <a class="btn allCoursesbtn" href="#" role="button">
                <strong>View all Courses</strong>
              </a>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
