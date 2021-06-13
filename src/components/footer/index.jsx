import React from "react";
import "./footer.css"
function Footer() {
  return (
    <footer>
      <div display='flex' justifyContent="space-between" alignItems="center" className="footer-container">
        <div className="footer-head">
          <img src='./asset/Group 225.png' alt="" />
          <p className="footer-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          <br /> elit, sed do eiusmod tempor
          </p>
          <div alignSelf="flex-start" className="footer-line1"></div>
          <p className="footer-copyright"> © Copyright 2020 Nature </p>
        </div>
        <div className="footer-info">
          <h3 className="info-head">Information</h3>
          <div className="footer-line2"></div>
          <ul className="info-list">
            <li className="info-items">
              <li className="info-item">About Us</li>
              <li className="info-item">Products</li>
              <li className="info-item">Contact Us</li>
              <li className="info-item">Terms of Service</li>
            </li>
            <li className="info-items">
              <li className="info-item">About Us</li>
              <li className="info-item">Products</li>
            </li>
          </ul>
        </div>
        <div className="socials">
          <h3 className="follow">Follow Us</h3>
          <div alignSelf="flex-start" className="footer-line2"></div>
          <ul className="socials-items">
            <li className="socials-item"><img src='./asset/Group 99.png' alt="" /></li>
            <li className="socials-item"><img src='./asset/Group 100.png' alt="" /></li>
            <li className="socials-item"><img src='./asset/twitter logo.png' alt="" /></li>
            <li className="socials-item"><img src='./asset/Group 105.png' alt="" /></li>
          </ul>
        </div>


      </div>

    </footer>



  );
}

export default Footer;
