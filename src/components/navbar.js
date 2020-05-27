import React, { Component } from "react";
import "./navbar.css";
import Footer from "./footer";
// import Team from "./pics/team.jpeg";
// import Me from "./pics/me.jpeg";
// import Partner from "./pics/partner.jpeg";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {}; //this state object contains any data that this component needs
    //automatic refactoring of code in vs code in win?
  }
  //how to change toggler color...?
  render() {
    return (
      <div className="mainWrapper">
        <nav
          class="navbar navbar-expand-lg mainWrapper"
          style={{ backgroundColor: "white" }}
        >
          <a class="navbar-brand" className=" fontcolor" href="#">
            <strong>
              Safe<span style={{ color: "#e30514" }}>Solutions</span>
            </strong>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
            aria-controls="collapsibleNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            // style={{ backgroundColor: "black" }}
          >
            <span
              class="navbar-toggler-icon"
              // style={{ backgroundColor: "red" }}
            ></span>
          </button>

          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ml-5">
              <li class="nav-item active">
                <a class="nav-link" href="#" style={{ color: "#002f5f" }}>
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item dropdown tertiaryColor">
                <a
                  class="nav-link dropdown-toggle tertiaryColor onlinkHover"
                  data-toggle="dropdown"
                  href="#"
                  style={{ color: "#002f5f" }}
                >
                  About us
                </a>
                <div class="dropdown-menu dropdownbckgrnd">
                  <a class="dropdown-item navDropdownLinks" href="#">
                    Company
                  </a>
                  <a class="dropdown-item navDropdownLinks" href="#">
                    Team
                  </a>
                  <a class="dropdown-item navDropdownLinks" href="#">
                    Approvals
                  </a>
                  <a class="dropdown-item navDropdownLinks" href="#">
                    Policies
                  </a>
                </div>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle tertiaryColor onlinkHover"
                  data-toggle="dropdown"
                  href="#"
                  style={{ color: "#002f5f" }}
                >
                  Services
                </a>
                <div class="dropdown-menu dropdownbckgrnd">
                  <a class="dropdown-item navDropdownLinks" href="#">
                    Consultancy
                  </a>
                  <a class="dropdown-item navDropdownLinks" href="#">
                    Training
                  </a>
                  <a class="dropdown-item navDropdownLinks" href="#">
                    Audit
                  </a>
                </div>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link tertiaryColor onlinkHover"
                  href="#"
                  style={{ color: "#002f5f" }}
                >
                  Schedule
                </a>
              </li>

              <li class="nav-item dropdown ">
                <a
                  class="nav-link dropdown-toggle tertiaryColor onlinkHover"
                  data-toggle="dropdown"
                  href="#"
                  style={{ color: "#002f5f" }}
                >
                  Verification
                </a>
                <div class="dropdown-menu dropdownbckgrnd">
                  <a class="dropdown-item navDropdownLinks" href="#">
                    Certificate Verification
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link tertiaryColor onlinkHover"
                  href="#"
                  style={{ color: "#002f5f" }}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
