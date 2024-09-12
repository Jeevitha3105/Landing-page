import React from "react";
import "../../styles/Home.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import package1 from "../../assets/home/package1.png";
import package2 from "../../assets/home/package2.png";

export default function Package() {
  return (
    <div className="package">
    <div className="package-text">
      <h1>
        <span style={{ color: "#DF9843" }}>PACKAGE OFFERS </span> FOR US
      </h1>
      <p>
        Elevate your spaces with Vedar Designs & Interior Fitouts L.L.C.
        Experience the fusion
      </p>
      <div className="line"></div>
    </div>

    <div className="package-item">
      <div className="item-1">
        <div className="img">
          <img src={package1}/>
        </div>
        <div className="list">
          <h2>
            5.25LAKH ONLY{" "}
            <span style={{ textDecoration: "line-through", fontSize:"12px" }}>7.8LAKH</span>
          </h2>
          <div className="list-item">
            <TiTick className="tick"/>
            <p>2 Wardrobe</p>
          </div>
          <div className="list-item">
            <TiTick className="tick"/>
            <p>2 Dressing Table</p>
          </div>
          <div className="list-item">
            <TiTick className="tick"/>
            <p>6 Seater Sofa Set</p>
          </div>
          <div className="list-item">
            <TiTick className="tick"/>
            <p>2 Cots/Bed Frames</p>
          </div>
          <div className="list-item">
            <TiTick className="tick"/>
            <p>TV Unit with Paneling</p>
          </div>
          <div className="list-item">
            <TiTick className="tick"/>
            <p>Dining Table with 4 Chair</p>
          </div>
          <div className="list-item">
            <TiTick className="tick"/>
            <p>Modular Kitchen with Basic Accessories</p>
          </div>
          <div className="item-btn">
            <p>NEED SERVICES</p>
            <div>
              <IoIosArrowRoundForward className="arrow-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="item-1">
        <div className="img">
          <img src={package2}/>
        </div>
        <div className="list">
          <h2>
            5.25LAKH ONLY{" "}
            <span style={{ textDecoration: "line-through", fontSize:"12px"}}>7.8LAKH</span>
          </h2>
          <div className="list-item">
            <TiTick className="tick"/>
            <p>2 Wardrobe</p>
          </div>
          <div className="list-item">
            <TiTick className="tick"/>
            <p>2 Dressing Table</p>
          </div>
          <div className="list-item">
            <TiTick className="tick"/>
            <p>6 Seater Sofa Set</p>
          </div>
          <div className="list-item">
            <TiTick className="tick"/>
            <p>2 Cots/Bed Frames</p>
          </div>
          <div className="list-item">
            <TiTick className="tick"/>
            <p>TV Unit with Paneling</p>
          </div>
          <div className="list-item">
            <TiTick className="tick"/>
            <p>Dining Table with 4 Chair</p>
          </div>
          <div className="list-item">
            <TiTick className="tick"/>
            <p>Modular Kitchen with Basic Accessories</p>
          </div>
          <div className="item-btn">
            <p>NEED SERVICES</p>
            <div>
              <IoIosArrowRoundForward className="arrow-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
