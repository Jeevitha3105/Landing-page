import React from 'react'
import "../../styles/Home.css";

export default function Works() {
  return (
    <div className="works">
    <div className='works-text'>
      <h1><span style={{color:"#DE9439"}}>SOME OF</span> OUR WORKS</h1>
      <p>Elevate your spaces with Vedar Designs & Interior Fitouts L.L.C. Experience the fusion</p>
      <div className="line"></div>
    </div>

    <div className="cards-div">
      <div className="card1 card">
        <div>
          KITCHEN DESIGNS
        </div>
      </div>

      <div className="card2 card">
        <div>
          BEDROOM DESIGNS
        </div>
      </div>

      <div className="card3 card">
        <div>
          LIVING DESIGNS
        </div>
      </div>

      <div className="card4 card">
        <div>
          DINING DESIGNS
        </div>
      </div>
    </div>
  </div>
  )
}
