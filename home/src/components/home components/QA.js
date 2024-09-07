import React from "react";
import "../../styles/Home.css";
import { IoIosArrowDown } from "react-icons/io";

export default function QA() {
  return (
    <div className="QA">
    <div className="content">
      <div>QUESTIONS & ANSWERS</div>
      <h1>Come let’s clear your doubts & queries</h1>
      <p>Experience the ultimate getaway at our luxurious design, where every detail is designed to offer you unparalleled comfort and  relaxation. Nestled in a  stunning  location,</p><br />
      <p>Experience the ultimate getaway at our luxurious resort, where every detail is designed to offer.</p>
    </div>

    <div className="accordion">
      <div>
        <p>Can your company handle commercial projects?</p>
        <IoIosArrowDown className="icon-down"/>
      </div>

      <div>
        <p>Are your electrical engineers experienced?</p>
        <IoIosArrowDown className="icon-down"/>
      </div>

      <div>
        <p>What types of industries electrical solutions for?</p>
        <IoIosArrowDown className="icon-down"/>
      </div>

      <div>
        <p>Do you offer a transportation?</p>
        <IoIosArrowDown className="icon-down"/>
      </div>
    </div>
  </div>
  )
}
