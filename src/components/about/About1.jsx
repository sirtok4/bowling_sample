import React from "react";

function About1() {
  return (
    <div className="home-one-about pt-120 pb-120">
    <img className="about-vector" src="assets/images/bg/h1-about-bg.png" alt="" />
    <div className="container">
      <div className="row align-items-center pt-40 mb-40">
        <div className="col-lg-6">
          <div className="about-content">
            <div className="section-title1">
              <span>The Best Rates in Town</span>
              <h2>Enjoy The Best Bowling Experience</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
            <div className="author-area d-flex align-items-center">
              <div className="author-img" style={{    width: 70}}>
                <img className="img-fluid rounded-pill" src="assets/images/bg/avatar_1.jpg" alt="" />
              </div>
              <div className="author-details">
                <h5>Manager</h5>
                <h4 style={{margin:0}}>Emilia Green</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-img">
            <img className="img-fluid" src="assets/images/bg/636.jpg" alt="" />
            <div className="reviews">
              <h2>4.5</h2>
              <ul className="stars d-flex align-items-center">
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-half" /></li>
              </ul>
              <span>68 Reviews</span>
              <img className="img-fluid d-block mx-auto" src="assets/images/bg/trip-advisor-logo-png.png" width={120} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default About1;
