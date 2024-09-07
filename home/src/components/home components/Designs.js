import React from "react";
import "../../styles/Home.css";
import { IoIosArrowRoundForward } from "react-icons/io";


export default function Designs() {
  return (
    <div className="designs">
    <div className="text">
      <h1>
        <span style={{ color: "#DF9843" }}>OUR SOLUTION</span> FOR YOUR
        PROBLEMS
      </h1>
      <p>
        Elevate your spaces with Cedar Designs Interior Fitouts L.L.C.
        Experience the fusion of your aspirations with our expertise,
        creating interiors that speak volumes. Your space, our dedication.
      </p>
    </div>

    <div className="design-items">
      <div className="a">
        <div className="item">
          <p>Living room designs</p>
          <div>
            <IoIosArrowRoundForward className="arrow-icon" />
          </div>
        </div>
      </div>
      <div className="b">
        <div className="item">
          <p>Kitchen designs</p>
          <div>
            <IoIosArrowRoundForward className="arrow-icon" />
          </div>
        </div>
      </div>
      <div className="c">
        <div className="item">
          <p>Bedroom designs</p>
          <div>
            <IoIosArrowRoundForward className="arrow-icon" />
          </div>
        </div>
      </div>
      <div className="d">
        <div className="item">
          <p>Office designs</p>
          <div>
            <IoIosArrowRoundForward className="arrow-icon" />
          </div>
        </div>
      </div>
      <div className="e">
        <div className="item">
          <p>Dining designs</p>
          <div>
            <IoIosArrowRoundForward className="arrow-icon" />
          </div>
        </div>
      </div>
      <div className="f">
        <span style={{ fontSize: "45px", color: "white" }}>10+</span>
        <p>interior designs</p>
        <div>
          <IoIosArrowRoundForward className="arrow-icon" />
        </div>
      </div>
    </div>
  </div>
  )
}
