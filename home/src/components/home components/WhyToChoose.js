import React from "react";
import "../../styles/Home.css";
import { SlLayers } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import { RiProgress3Line } from "react-icons/ri";
import { SiTicktick } from "react-icons/si";
import image from "../../assets/home/image 50.png";

export default function WhyToChoose() {
  return (
    <div className="whyToChose">
    <div className="text">
        <div>
          <p>CEDAR FOR YOU</p>
          <h1>
          Why To Choose <span style={{ color: "#DF9843" }}>Cedar Designs</span>
          </h1>
        </div>

        <p>
          Elevate your spaces with Cedar Designs Interior Fitouts L.L.C.
          Experience the fusion of your aspirations with our expertise,
          creating interiors that speak volumes. Your space, our dedication.
        </p>
      </div>

      <div className="total-div">
        <div className="why-text-div">
          <div className="sub-div">
            <div className="border">
              <SlLayers />
            </div>
            <p>TRANSPARENCY</p>
          </div>

          <div className="sub-div">
            <div className="border">
              <CiStar />
            </div>
            <p>DEDICATION</p>
          </div>

          <div className="sub-div">
            <div className="border">
              <RiProgress3Line />
            </div>
            <p>PROGRESSIVE</p>
          </div>

          <div className="sub-div">
            <div className="border">
              <SiTicktick />
            </div>
            <p>TRUSTABILITY</p>
          </div>
        </div>

        <div className="why-img-div">
          <img src={image} alt=""/>
        </div>
      </div>
  </div>
  )
}
