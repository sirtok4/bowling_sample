import Link from "next/link";
import React from "react";

function Bannere1() {
  
  return (
    <div className="hero-style1">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 px-0">
          <div className="hero-video">
            <video autoPlay loop="loop" muted preload="auto">
              <source src="https://demo.egenslab.com/download/hotel-room-2021-11-03-20-39-09-utc.mp4" type="video/mp4" />
            </video>
            <div className="hero-content">
              <h4>To Visit Our</h4>
              <h1>Hotelina Resort.</h1>
            </div>
            <div className="scroll-dowm">
              <a href="#about-area"><img src="assets/images/icons/scroll-down.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Bannere1;
