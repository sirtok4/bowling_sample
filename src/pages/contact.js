import React from "react";
import Breadcrum from "../components/common/Breadcrum";
import Layout from "../components/Layout/Layout";

function contact() {
  return (
    <Layout>
      <Breadcrum pageName="Contact Us" pageTitle="Contact Us" />
      <div className="contact-page mb-120  overflow-hidden">
        <div className="container-fluid px-0">
          <div className="row mb-120 g-4 ">
            <div className="col-lg-6">
              <div className="address-area ">
                <div className="section-title mb-50">
                  <h2>Contact Us If You Have More Questions.</h2>
                </div>
                <ul className="address-list">
                  <li>
                    <div className="text">
                      <h4>Location</h4>
                      <p>
                        168/170, Ave 01,Old York Drive Rich Mirpur, Dhaka,
                        Bangladesh
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="text">
                      <h4>Phone</h4>
                      <a href="tel:+012-3456-789102">+012-3456-789102</a> <br />
                      <a href="tel:+012-3456-789102">+012-3456-789102</a>
                    </div>
                  </li>
                  <li>
                    <div className="text">
                      <h4>Email</h4>
                      <a href="mailto:info@example.com">
                        info@example.com{" "}
                      </a>{" "}
                      <br />
                      <a href="mailto:support@example.com">
                        support@example.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48330.162702269045!2d-74.29798882771155!3d40.792034138683825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ab00d85ee855%3A0x93a15ba40269dd0!2sWest%20Orange%2C%20NJ%2007052%2C%20USA!5e0!3m2!1sen!2sbd!4v1658243800106!5m2!1sen!2sbd"
                  height={500}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2>Have Any Questions</h2>
              </div>
              <form>
                <div className="row g-4">
                  <div className="col-lg-4">
                    <div className="form-inner">
                      <input type="text" placeholder="Enter your name" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-inner">
                      <input type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-inner">
                      <input type="text" placeholder="Querry" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner">
                      <textarea
                        placeholder="Your message"
                        cols={30}
                        rows={10}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 d-flex justify-content-center">
                    <div className="form-inner">
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default contact;
