import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function Testimonial1() {
  const testimonial = {
    slidesPerView: "auto",
    spaceBetween: 60,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next-e",
      prevEl: ".swiper-button-prev-e",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <div className="home-one-testimonial mb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title1 text-center">
              <span>Testimonial</span>
              <h2>What Our Visitors Say</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Swiper {...testimonial} className="swiper testimonial-slider-1">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-wrrap">
                  <img src="assets/images/icons/left-quote.svg" alt="" />
                  <div className="content">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.{" "}
                    </p>
                  </div>
                  <div className="author-review-area d-flex justify-content-between align-items-center flex-erap">
                    <div className="authot-area d-flex align-items-center">
                      <div className="author-img">
                        <img
                          src="assets/images/bg/avatar_1.jpg" className="rounded-pill"
                          alt=""
                        />
                      </div>
                      <div className="author-name-deg">
                        <h4>Maria Harrison</h4>
                        <p>#1 Top Strikes</p>
                        <div className="review">
                          <ul className="stars d-flex align-items-center">
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="review">
                      <ul className="stars d-flex align-items-center">
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide  ">
                <div className="testimonial-wrrap">
                  <img src="assets/images/icons/left-quote.svg" alt="" />
                  <div className="content">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.{" "}
                    </p>
                  </div>
                  <div className="author-review-area d-flex justify-content-between align-items-center flex-erap">
                    <div className="authot-area d-flex align-items-center">
                      <div className="author-img">
                        <img
                          src="assets/images/bg/avatar_1.jpg" className="rounded-pill"
                          alt=""
                        />
                      </div>
                      <div className="author-name-deg">
                        <h4>Lorena Benom</h4>
                        <p>#4 Top Strike</p>
                        <div className="review">
                          <ul className="stars d-flex align-items-center">
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="review">
                      <ul className="stars d-flex align-items-center">
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="row align-items-center pt-80">
          <div className="col-lg-4">
            <div className="swiper-btn-left">
              <div className="btns swiper-button-prev-e">
                <svg
                  width={26}
                  height={13}
                  viewBox="0 0 26 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.26821 12.5247C7.57342 12.4319 7.74572 12.1194 7.66696 11.807C7.64727 11.7142 6.82514 10.8695 5.21536 9.26803L2.79823 6.86094L14.1996 6.85117L25.6059 6.83652L25.7437 6.73399C25.8176 6.68028 25.916 6.54357 25.9554 6.43127C26.0194 6.25062 26.0145 6.21156 25.9407 6.0602C25.8964 5.96743 25.7979 5.85025 25.7241 5.80143C25.5961 5.71842 25.0693 5.71354 14.1947 5.69889L2.79823 5.68913L5.19075 3.30645C6.51008 1.99793 7.6128 0.865182 7.63742 0.791944C7.76049 0.474579 7.63742 0.176744 7.3322 0.0497979C6.9876 -0.0917957 7.05652 -0.150386 3.8468 3.03791C1.82843 5.03976 0.843853 6.05044 0.824161 6.14321C0.80447 6.21645 0.80447 6.33363 0.824161 6.41175C0.843853 6.49964 1.8235 7.50544 3.81727 9.49263C6.34763 12.0071 6.9876 12.6077 7.11067 12.5686C7.12052 12.5686 7.18944 12.5442 7.26821 12.5247Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="contents">
              <p>We always keep them happy</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="swiper-btn-right">
              <div className="btns swiper-button-next-e">
                <svg
                  width={26}
                  height={14}
                  viewBox="0 0 26 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.0947 0.759911C18.7901 0.852686 18.6181 1.16519 18.6967 1.47769C18.7164 1.57046 19.5369 2.4152 21.1437 4.01677L23.5562 6.42402L12.1765 6.43379L0.791783 6.44844L0.654204 6.55098C0.580501 6.60469 0.48223 6.74141 0.442921 6.85372C0.379045 7.03438 0.383959 7.07344 0.457662 7.22481C0.501884 7.31759 0.600155 7.43477 0.673858 7.4836C0.80161 7.56661 1.32736 7.57149 12.1814 7.58614L23.5562 7.59591L21.1682 9.97874C19.8514 11.2873 18.7508 12.4202 18.7262 12.4934C18.6034 12.8108 18.7262 13.1086 19.0309 13.2356C19.3748 13.3772 19.306 13.4358 22.5096 10.2473C24.5242 8.24532 25.5069 7.23457 25.5266 7.1418C25.5462 7.06856 25.5462 6.95137 25.5266 6.87324C25.5069 6.78535 24.5291 5.77948 22.5391 3.79216C20.0136 1.27749 19.3748 0.676902 19.252 0.715965C19.2421 0.715965 19.1733 0.74038 19.0947 0.759911Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial1;
