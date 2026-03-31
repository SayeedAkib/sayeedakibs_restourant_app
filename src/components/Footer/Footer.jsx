import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="logo1" src={assets.logo} alt="" />
            <p>"Hungry Seekers was established in 1/1/2025.Our main goal is to kill the hunger for the ones who are ready to feast."</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>TALK WITH US</h2>
            <p>Md. Sayed Bin Anwar (Akib)</p>
            <h3>EMAIL</h3>
            <p>mdsayeedbinanwarakib@gmail.com</p>
            <p>akibsayeed175@gmail.com</p>
            <h3>CONTACT NO.</h3>
            <p>01793356708</p>
            <p>01886789175</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
