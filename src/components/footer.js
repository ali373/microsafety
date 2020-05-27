import React, { Component } from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialIcon } from "react-social-icons";

export default class Footer extends Component {
  componentDidMount() {}
  render() {
    return (
      <div class="container-fluid">
        <div className="row display: flex primaryBackground footerMainDiv">
          <div className="col-md-1"></div>

          <div className="col-md-4">
            <strong style={{ color: "#e30514" }}>Contact Us</strong>
            <br />
            <p className="tinyTxt inlineDisplay">
              (021) 111 222 444 <br />
              info@SafeSolutions.org
              <br />
              Microsafety, East Maqwa, Kuwait City, Kuwait.
            </p>
          </div>

          <div className="col-md-4">
            <strong style={{ color: "#e30514" }}>Connect with us</strong>

            <br />
            <SocialIcon
              network="twitter"
              url="https://www.twitter.com"
              fgColor="white"
              bgColor="#002f5f"
              className="s_icons"
            />
            <SocialIcon
              network="facebook"
              url="https://www.facebook.com"
              fgColor="white"
              bgColor="#002f5f"
              className="s_icons"
            />
            <SocialIcon
              network="linkedin"
              url="https://www.linkedin.com"
              fgColor="white"
              bgColor="#002f5f"
              className="s_icons"
            />

            <SocialIcon
              network="instagram"
              url="https://www.instagram.com"
              fgColor="white"
              bgColor="#002f5f"
              className="s_icons"
            />
          </div>

          <div className="col-md-2">
            <strong style={{ color: "#e30514" }}>Quick Links</strong>

            <br />
            <a href="/" className="footerLink">
              Events
            </a>
            <br />
            <a href="/" className="footerLink">
              Partnerships
            </a>
            <br />
            <a href="/" className="footerLink">
              Help Center(FAQ)
            </a>
            <br />

            <br />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    );
  }
}
