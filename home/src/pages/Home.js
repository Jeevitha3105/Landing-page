import React from 'react'
import { Navbar } from '../components/Navbar'
import { IoIosArrowRoundForward } from "react-icons/io";
import '../styles/Home.css'
import Footer from '../components/Footer';
import ImageSlider from '../components/sliders/ImageSlider';
import banner1 from "../assets/home/banner.png"
import banner2 from "../assets/home/banner2.png"
import banner3 from "../assets/home/banner3.png"
import Quotation from '../components/home components/Quotation';
import Designs from '../components/home components/Designs';
import Package from '../components/home components/Package';
import WhyToChoose from '../components/home components/WhyToChoose';
import Works from '../components/home components/Works';
import Insights from '../components/home components/Insights';
import QA from '../components/home components/QA';
import Explore from '../components/home components/Explore';

export default function Home() {
    const images = [
        banner1,
        banner2,
        banner3,
      ];

  return (
    <>
    <div className='home-div slider-container'>
    <ImageSlider images={images} interval={3000} />
        <Navbar />
        <div className='text-div'>
            <div className='flex-div'>
                <div className='left-text'>
                    <p>W7 INTERIOR DESIGNS</p>
                    <h1>Transform Your Space with cedar’s
                    Expert Design Consulting </h1>
                </div>

                <div className='right-text'>
                    <div className='container'>
                        <p>NEED OUR SERVICE</p>
                        <div>
                            <IoIosArrowRoundForward className='arrow-icon' style={{color:"black"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>

    <div className="main-div">
        <div className="left">
          <div>
            <h2>25+</h2>
            <p>Years of Experience</p>
          </div>
          <div>
            <h2>25+</h2>
            <p>Years of Experience</p>
          </div>
          <div>
            <h2>8049+</h2>
            <p>Sq.ft Projects delivered</p>
          </div>
        </div>

        <div className="right">
          <p>CEDAR INTERIOR DESIGNS</p>
          <h1>Creative solution by professional designers</h1>
        </div>
      </div>

      <hr
        style={{
          color: "rgba(41, 39, 55, 0.13)",
          margin: "0 40px",
          fontSize: "1px",
        }}
      />

    <Quotation />
    <Designs />
    <Package />
    <WhyToChoose />
    <Works />
    <Insights />
    <QA />
    <Explore />
    <Footer />
    </>
  )
}
