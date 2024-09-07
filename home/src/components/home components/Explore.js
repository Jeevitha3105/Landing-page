import React from "react";
import "../../styles/Home.css";
import story1 from "../../assets/home/story1.png";
import story2 from "../../assets/home/story2.png";
import story3 from "../../assets/home/story3.png";

export default function Explore() {
  return (
    <div className="explore">
    <div className="explore-text content">
      <div>BUILD YOUR DREAM CEDAR</div>
      <h1>Explore stories</h1>
      <p>Elevate your spaces with W7 Designs & Interior Fitouts L.L.C. Experience the fusion of your aspirations with our expertise, creating interiors that speak volumes. Your space, our dedication.</p>
    </div>

    <div className="story-cards-div"> 
        <div className="story-card">
          <div className="story-card-img">
            <img src={story1}/>
          </div>
          <div className="story-card-text">
            <p>1.Top 10 Interior Design Trends to Transform Your Space in 2024</p>
          </div>
        </div>

        <div className="story-card">
          <div className="story-card-img">
            <img src={story2}/>
          </div>
          <div className="story-card-text">
            <p>2.The Art of Minimalism: How to Achieve a Clutter-Free Home</p>
          </div>
        </div>

        <div className="story-card">
          <div className="story-card-img">
            <img src={story3} />
          </div>
          <div className="story-card-text">
            <p>3.The Ultimate Guide to Choosing the Perfect Furniture for Your Space</p>
          </div>
        </div>
    </div>
  </div>
  )
}
