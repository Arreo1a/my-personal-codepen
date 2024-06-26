import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

import CraneSVG from "./Crane.svg";

function WCDrywallCrane() {
  return (
    <div className="WCDrywallCrane">
      <div className="craneSection">
        <img src={CraneSVG} alt="" className="craneImg" />
        <div className="ctaBtnContainer">
          <Link className="ctaBtn">Call to Action</Link>
        </div>
      </div>

      <div className="whyChooseUsSection">
        <div className="whyChooseUsSectionContainer">
          <div className="sectionTitle">Why choose us</div>

          <div className="infoContainer">
            <div className="infoBlock">
              <div className="infoBlockNumber">140</div>
              <div className="infoBlockText">satisfied customers</div>
            </div>
            <div className="infoBlock">
              <div className="infoBlockNumber">2.5k</div>
              <div className="infoBlockText">works completed</div>
            </div>
            <div className="infoBlock">
              <div className="infoBlockNumber">20</div>
              <div className="infoBlockText">years of experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WCDrywallCrane;
