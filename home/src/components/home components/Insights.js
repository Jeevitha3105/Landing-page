import React from 'react'
import "../../styles/Home.css";
import review from "../../assets/home/review.png";
import { FaStar } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";

export default function Insights() {
  return (
    <div className="insights">
    <div className="insights-div">
      <div className="insights-text">
        <h1>Powerful Insights</h1>
        <p>Get an insight into the valuable and impactful thoughts direct from our clients.</p>
        <p>REVIEWS & TESTIMONIALS  -</p>
      </div>

      <div className="insights-clients">
        <div>
          <div className="count">89+</div>
          <p>Satisfied Clients worldwide</p>
        </div>
      </div>
    </div>

    <div className="insight-card-div">
      <div className="insight-card">
        <div className="stars">
          <FaStar className="star-icon"/>
          <FaStar className="star-icon"/>
          <FaStar className="star-icon"/>
          <FaStar className="star-icon"/>
          <FaStar className="star-icon"/>
        </div>
        <p className="review">
        Working with [Agency Name] was an absolute absolute pleasure! From concept to completion,they transformed my home into a stunning andfunctional space. Their attention to detail and to bring my vision to life exceeded all expectations.
        </p>

        <div className="review-bottom-sec">
          <div className="reviewer">
            <div className="details">
              <img src={review}/>
              <div>
                <p>Sudeep krishna P</p>
                <p>Thirssur, Kerala</p>
              </div>
            </div>
          </div>

          <div className="quote-icon">
            <FaQuoteLeft />
          </div>
        </div>
      </div>
      
      <div className="insight-card">
        <div className="stars">
          <FaStar className="star-icon"/>
          <FaStar className="star-icon"/>
          <FaStar className="star-icon"/>
          <FaStar className="star-icon"/>
          <FaStar className="star-icon"/>
        </div>
        <p className="review">
        Working with [Agency Name] was an absolute absolute pleasure! From concept to completion,they transformed my home into a stunning andfunctional space. Their attention to detail and to bring my vision to life exceeded all expectations.
        </p>

        <div className="review-bottom-sec">
          <div className="reviewer">
            <div className="details">
              <img src={review}/>
              <div>
                <p>Sudeep krishna P</p>
                <p>Thirssur, Kerala</p>
              </div>
            </div>
          </div>

          <div className="quote-icon">
            <FaQuoteLeft />
          </div>
        </div>
      </div>

      <div className="insight-card">
        <div className="stars">
          <FaStar className="star-icon"/>
          <FaStar className="star-icon"/>
          <FaStar className="star-icon"/>
          <FaStar className="star-icon"/>
          <FaStar className="star-icon"/>
        </div>
        <p className="review">
        Working with [Agency Name] was an absolute absolute pleasure! From concept to completion,they transformed my home into a stunning andfunctional space. Their attention to detail and to bring my vision to life exceeded all expectations.
        </p>

        <div className="review-bottom-sec">
          <div className="reviewer">
            <div className="details">
              <img src={review}/>
              <div>
                <p>Sudeep krishna P</p>
                <p>Thirssur, Kerala</p>
              </div>
            </div>
          </div>

          <div className="quote-icon">
            <FaQuoteLeft />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
