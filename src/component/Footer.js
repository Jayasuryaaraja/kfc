import React from 'react'
import './Footer.css'
import Footkfc from '../images/Footkfc.svg'
import Footgoogle from '../images/Footgoogle.svg'
import Footaple from '../images/Footaple.svg'

const Footer = () => {
  return (
    <div>
        <div class="footer">
        <div class="footer1">
        <div class="footimg">
        <img src={Footkfc} alt=".."/>
        </div>
        <div class="fotlist">
        <ul>
            <li>KFC India</li>
            <li>About KFC</li>
            <li>KFC care</li>
            <li>Carrers</li>
            <li>Our Golden Past</li>
        </ul>
        <ul>
            <li>Legal</li>
            <li>Terms and Conditions</li>
            <li>Privacy and policy</li>
            <li>Disclaminar</li>
            <li>Caution Note</li>
        </ul>
        <ul>
            <li>KFC Food</li> 
            <li>Menu</li>
            <li>Order Lookup</li>
            <li>Gift Card</li>
            <li>Nutrition & Allergian</li>
        </ul>
        <ul>
            <li>Support</li>
            <li>Get Help</li>
            <li>Contact Us</li>
            <li>KFC Feedback</li>
            <li>Privacy and Policy</li>
        </ul>
        </div>
        <div class="floct">
        <i class='bx bxs-location-plus'></i>
        </div>
        <div clas="fotkind">
        <h5>Find a KFC</h5>
        </div>
        <div class="footer2">
        <img src={Footgoogle} alt=".."/>
        <img src={Footaple} alt=".."/>
      </div>
        
    </div>

    <div class="para">
        <p>Copyright © KFC Corporation 2024 All rights reserved</p>
        </div>
        <div class="ikon">
        <i class='bx bxl-instagram'></i>
        <i class='bx bxl-facebook-circle'></i>
        <i class='bx bxl-twitter'></i>
        </div>
    </div>
    </div>
  )
}

export default Footer