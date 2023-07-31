import React from "react";
import Link from "next/link";
function Offers1() {
  return (
    <div className="home-one-offers mb-120">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title1 text-center">
            <span>Offers</span>
            <h2>Best Summer Offers</h2>
          </div>
        </div>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-lg-7">
          <div className="scroll-offer">
            <div className="single-offer mb-30">
              <img className="img-fluid" src="assets/images/bg/730_1.jpg" alt="" />
              <div className="content d-flex justify-content-between align-items-center">
                <div className="left-content">
                  <div className="price-tag">
                    <span>RM 50.00</span> / Per Lane
                  </div>
                  <h3><Link href="/booking"><a>Your Birthday with us</a></Link></h3>
                  <ul className="stars d-flex align-items-center">
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-half" /></li>
                  </ul>
                </div>
                <div className="book-btn">
                  <Link href="/booking"><a className="btn--primary2">Book Now</a></Link>
                </div>
              </div>
            </div>
            <div className="single-offer mb-30">
              <img className="img-fluid" src="assets/images/bg/730_2.jpg" alt="" />
              <div className="content d-flex justify-content-between align-items-center">
                <div className="left-content">
                  <div className="price-tag">
                    <span>RM 60.00</span> / Per Lane
                  </div>
                  <h3><Link href="/booking"><a>Halloween Night</a></Link></h3>
                  <ul className="stars d-flex align-items-center">
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                  </ul>
                </div>
                <div className="book-btn">
                <Link href="/booking"><a className="btn--primary2">Book Now</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-9">
          <div className="single-offer2 mb-30">
            <div className="offer-img">
              <img className="img-fluid" src="assets/images/bg/730_2.jpg" alt="" />
            </div>
            <div className="offer-batch">
              <div className="offer">
                <img src="assets/images/icons/offer-bg.svg" alt="" />
                <div className="content">
                  <h4>50%</h4>
                  <span>OFF</span>
                </div>
              </div>
            </div>
            <div className="background" />
            <div className="offer-content">
              <div className="price-tag">
                <span>RM 50.00</span> / Per Lane
              </div>
              <h3><Link href="/booking"><a>Halloween Night</a></Link></h3>
              <div className="bed-and-person d-flex align-items-center">
                <div className="bed-qty">
                  <p><img src="assets/images/icons/double-bed.svg" alt="" /> 2 Double Bed</p>
                </div>
                <div className="persons">
                  <p><img src="assets/images/icons/persons.svg" alt="" />6  Guest</p>
                </div>
              </div>
              <div className="book-btn">
              <Link href="/booking"><a className="btn--primary2">Book Now</a></Link>
              </div>
            </div>
          </div>
          <div className="single-offer2 mb-30">
            <div className="offer-img">
            <img className="img-fluid" src="assets/images/bg/730_1.jpg" alt="" />
            </div>
            <div className="offer-batch">
              <div className="offer">
                <img src="assets/images/icons/offer-bg.svg" alt="" />
                <div className="content">
                  <h4>50%</h4>
                  <span>OFF</span>
                </div>
              </div>
            </div>
            <div className="background" />
            <div className="offer-content">
              <div className="price-tag">
                <span>RM 50.00</span> / Per Lane
              </div>
              <h3><Link href="/booking"><a>Your Birthday with us</a></Link></h3>
              <div className="bed-and-person d-flex align-items-center">
                <div className="bed-qty">
                  <p><img src="assets/images/icons/double-bed.svg" alt="" /> 2 Double Bed</p>
                </div>
                <div className="persons">
                  <p><img src="assets/images/icons/persons.svg" alt="" />6  Guest</p>
                </div>
              </div>
              <div className="book-btn">
              <Link href="/booking"><a className="btn--primary2">Book Now</a></Link>
              </div>
            </div>
          </div>
          {/* <div className="offer-banner d-flex align-items-center">
            <div className="left-banner">
              <span className="vector" />
              <h5>Get 20% Off Of 1st Book!</h5>
              <span>Use Coupon Code</span>
              <p>BOOK-NOW-0256</p>
            </div>
            <div className="right-banner">
              <h3>This</h3>
              <h3 className="sammer">Summer</h3>
              <h3 className="offer">Offer</h3>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Offers1;
