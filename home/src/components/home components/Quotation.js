import React from "react";
import "../../styles/Home.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import HorizontalSlider from "../sliders/HorizontalSlider";


export default function Quotation() {
  return (
    <>
    <div className="main-quote">
        <div className="img-main-div">
          <div className="bg-div"></div>
          <div className="img-div">
            {/* <img src={quoteImg} alt="img" /> */}
            <HorizontalSlider />
          </div>
        </div>

        <div className="form-div">
          <div className="tag">Tag Line - Place Holder</div>
          <h1>
            <span style={{ color: "#DF9843" }}>Get a Free</span> Quotation
          </h1>
          <div className="input-fields">
            <div>
              <input placeholder="Enter Your Name" type="text" />
              <input placeholder="Enter Company Name" type="text" />
            </div>
            <div>
              <input placeholder="Enter Email ID" type="email" />
              <input placeholder="Enter Phone Number" type="number" />
            </div>
            <div className="select-div">
              <span>Your Resquesting as</span>
              <select>
                <option>DIRECTER</option>
              </select>
            </div>
          </div>
          <div className="get-quote">
            <p>GET QUOTATION</p>
            <div>
              <IoIosArrowRoundForward className="arrow-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
