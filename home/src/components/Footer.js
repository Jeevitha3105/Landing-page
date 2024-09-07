import React from 'react'
import footerImg from '../assets/footer.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import logo from "../assets/logo.png";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
        <div className='footer'>
            <div className='footer-banner'>
                <div className='footer-img'>
                    <img src={footerImg}/>
                </div>
                <div className='rec-box'>

                </div>
                <div className='form .rotating-border'>
                    <h2>GET A FREE QUOTATION</h2>
                    <input placeholder='Enter your name' type='text'/>
                    <input placeholder='Enter phone number' type='number'/>
                    <input placeholder='Project subject' type='text'/>
                    <input placeholder='Enter email' type='email'/>
                    <input placeholder='Enter location' type='text'/>
                    <div className="get-quote">
                        <p>GET QUOTATION</p>
                        <div>
                        <IoIosArrowRoundForward className="arrow-icon" />
                        </div>
                    </div>
                </div>
            </div>

            <hr style={{margin:"40px", border: "1px solid grey"}}/>

            <div className='footer-navs'>
                <div className='sec-1'>
                    <div className="logo-section">
                        <div>
                            <img src={logo} alt="logo" />
                            <p style={{color:"white"}}>CEDAR INTERIORS</p>
                        </div>
                    </div>
                    <p className='para'>Elevate your spaces with Cader Designs & Interior Fitouts L.L.C. Experience the fusion of your aspirations with our expertise, creating interiors that speak volumes. Your space, our dedication – a partnership that transforms imagination into reality.</p>
                </div>
                <div className='sec-2'>
                    <h2>QUICK LINKS</h2>
                    <p>Home</p>
                    <p>Services</p>
                    <p>About Us</p>
                    <p>Blogs & Stories</p>
                </div>
                <div className='sec-3'>
                    <h2>CONTACT</h2>
                    <div>
                        <IoLocationSharp className='contact-icon'/>
                        <p>7th Avenue, Naibi street <br />
                        Pallakad, Kerala, INDIA - 682028</p>
                    </div>
                    <div>
                        <FaPhoneAlt className='contact-icon'/>
                        <p>+91 940  098  9363</p>
                    </div>
                    <div>
                        <FaMessage className='contact-icon'/>
                        <p>office@caderdesigns.in</p>
                    </div>
                </div>

                <div className='sec-4'>
                    <h2>Get connected with us</h2>
                    <div>
                        <FaInstagram className='social-icon'/>
                        <FaFacebookF className='social-icon'/>
                        <FaTwitter className='social-icon'/>
                    </div>

                    <h2>STAY TUNED!</h2>
                    <div>
                        <input placeholder='enter your email' type='email'/>
                        <button>Contact</button>
                    </div>
                </div>
            </div>

            <div className='foot-tab'>
                 <div>© 2016-2024 . All Rights Reserved</div>
                 <div className='creator'>Website by Spartan Technologies</div>
                 <div>Privacy Policy | Terms & Condition</div>
            </div>
        </div>
    </>
  )
}
