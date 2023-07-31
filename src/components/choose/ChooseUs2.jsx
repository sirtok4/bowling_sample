import React from "react";
import Link from "next/link";
function ChooseUs2() {
  return (
    <div className="home-two-choose mb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="choose-left">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="choose-img one">
                    <img src="assets/images/bg/choose-1.png" alt="choose-img" />
                  </div>
                  <div className="choose-img two">
                    <img src="assets/images/bg/choose-2.png" alt="choose-img" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="choose-img three">
                    <img src="assets/images/bg/choose-3.png" alt="choose-img" />
                  </div>
                  <div className="choose-img four">
                    <img src="assets/images/bg/choose-4.png" alt="choose-img" />
                  </div>
                </div>
              </div>
              <div className="tripadvisor-icon">
                <img src="assets/images/icons/tripadvisor-icon.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="section-title2">
              <span>Why Choose Us</span>
              <h2>We Give The Best Hotel Facilities.</h2>
              <img src="assets/images/icons/section-bg.svg" alt="" />
              <p>
                Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni
                sceisuen the aucan ligula. Orci varius natoque penatibus ethemen
                magnis discustent parturient monte nascete ridiculus
                musclineorto elementum oneni sceisuen the aucan ligula. Orci
                nellentesque habitant forminy morbine.
              </p>
            </div>
            <div className="choose-feature">
              <ul>
                <li>
                  <img src="assets/images/icons/check.svg" alt="check" /> 24
                  hour Services
                </li>
                <li>
                  <img src="assets/images/icons/check.svg" alt="check" />{" "}
                  Swiming Pool
                </li>
                <li>
                  <img src="assets/images/icons/check.svg" alt="check" /> Free
                  WiFi
                </li>
                <li>
                  <img src="assets/images/icons/check.svg" alt="check" />{" "}
                  Fitness Zone
                </li>
                <li>
                  <img src="assets/images/icons/check.svg" alt="check" /> Kid
                  Gaming Zone
                </li>
                <li>
                  <img src="assets/images/icons/check.svg" alt="check" /> Locker
                  Room
                </li>
                <li>
                  <img src="assets/images/icons/check.svg" alt="check" /> Room
                  cleaning
                </li>
                <li>
                  <img src="assets/images/icons/check.svg" alt="check" /> Safe
                  &amp; Secure
                </li>
              </ul>
              <Link href="/hotel-facilities">
                <a className="btn--primary3">Explore Feature</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs2;
