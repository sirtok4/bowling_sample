import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <footer>
  <div className="container">
    <div className="footer-top">
      <div className="row g-4 justify-content-start">
        <div className="col-lg-4 order-lg-0 order-2">
          <div className="footer-items footer-about">
            <h4>Best rates in town</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <div className="footer-btn">
              {/* <a href="#">About Us</a> */}
              <a href="#">Book Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="footer-items social-area">
            <span className="dot1" />
            <span className="dot2" />
            <div className="text-center fw-bold h3" style={{color: '#fff'}}>Your Logo Here</div>
            <div className="footer-logo text-center">
              {/* <img src="assets/images/logo-vertical.png" alt="" /> */}
              <p>Bowling Slogan</p>
              <span />
            </div>
            <div className="footer-social">
              <ul className="social-link d-flex align-items-center justify-content-center">
                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-sm-end justify-content-center">
          <div className="footer-items contact ">
            <h4>Contacts</h4>
            <div className="hotline mb-30">
              <div className="hotline-icon" style={{marginRight: 10}}><i className="bx bx-phone" /></div>
              <div className="hotline-info">
                <h6 className="mb-10"><a href="tel:+60123456789">+60 123 456 789</a></h6>
                <h6><a href="tel:+60123456789">+60 123 456 789</a></h6>
              </div>
            </div>
            <div className="email mb-30">
              <div className="hotline-icon" style={{marginRight: 10}}><i className="bx bx-envelope" /></div>
              <div className="email-info">
                <h6 className="mb-10"><a href="mailto:info@example.com">info@example.com</a></h6>
                <h6><a href="mailto:info@support.com">info@support.com</a></h6>
              </div>
            </div>
            <div className="email">
              <div className="hotline-icon" style={{marginRight: 10}}><i className="bx bx-map" /></div>
              <div className="email-info">
                <h6 className="mb-10"><a>123/456, Address 123</a></h6>
                <h6><a>Kuala Lumpur, Malaysia</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-mdl">
      <div className="quick-menu">
        <ul>
          <li><Link href="/"><a>About Us</a></Link></li>
          <li><Link href="/"><a>Book Now</a></Link></li>
          <li><Link href="/"><a>Terms &amp; Conditions</a></Link></li>
          <li><Link href="/"><a>Contact Us</a></Link></li>
        </ul>
      </div>
    </div>
    <div className="footer-btm">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-6">
            <div className="devlopar-area">
              <p>Copyright 2022 <a href="#">Bowling Company</a> | All rights reserved</p>
            </div>
          </div>
          <div className="col-xl-6 d-flex justify-content-xl-end justify-content-center">
            <div className="payment-mathort">
              <ul>
                <li>Pay with us:</li>
                <li><a href="#"><img src="assets/images/bg/visa.png" height={20} alt="" /></a></li>
                <li><a href="#"><img src="assets/images/bg/mastercard.png" height={30} alt="" /></a></li>
                <li><a href="#"><img src="assets/images/bg/paypal.png" alt="" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
