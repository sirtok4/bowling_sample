import React, { useState } from "react";
import Link from "next/link";
import Select from "react-select";
import Breadcrum from "../components/common/Breadcrum";
import Layout from "../components/Layout/Layout";
import RoomFeatures from "../components/roomSuitsDetails/RoomFeatures";
import SummarOffer from "../components/roomSuitsDetails/SummarOffer";
import roomdata from "../data/rooms_data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function RoomSuitsDetails() {
  const [startDate1, setStartDate1] = useState(false);
  const [startDate2, setStartDate2] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "Person 1", label: "Person 1" },
    { value: "Person 2", label: "Person 2" },
    { value: "Person 3", label: "Person 3" },
    { value: "Person 4", label: "Person 4" },
    { value: "Person 5", label: "Person 5" },
    { value: "Person 6", label: "Person 6" },
  ];

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 5,
      zIndex: 2,
    }),
    control: (provided) => ({
      ...provided,
      height:45 ,
      width: "100%",
      maxWidth: "450px",
      border: "0px solid red",
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: "#fff",
      outline: "none",
      boxShadow: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#1C171D",
    }),
    container: (provided) => ({
      ...provided,
      width: "100%",
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#3caa9f",
      top: "10px"
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      position:"relative !important",
      top: "2px"
    }),
  };
  const roomsuitsSlider = {
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next-m",
      prevEl: ".swiper-button-prev-m",
    },
  };
  const roomSlide = {
    slidesPerView: "auto",
    spaceBetween: 40,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next-n",
      prevEl: ".swiper-button-prev-n",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <Layout>
      <Breadcrum
        pageName="Room & Suits Details"
        pageTitle="Room & Suits Details"
      />
      <div className="room-suits-details-page pt-120 mb-120">
        <div className="container">
          <div className="row mb-120">
            <div className="col-lg-8">
              <Swiper
                {...roomsuitsSlider}
                className="swiper room-details-slider mb-30"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="rooms-imeges">
                      <img
                        className="img-fluid"
                        src="assets/images/bg/room-dt-1.png"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="rooms-imeges">
                      <img
                        className="img-fluid"
                        src="assets/images/bg/room-dt-1.png"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                </div>
                <div className="swiper-btns d-flex align-items-center justify-content-between">
                  <div className="swiper-button-prev-m">
                    <i className="bi bi-chevron-left" />
                  </div>
                  <div className="swiper-button-next-m">
                    <i className="bi bi-chevron-right" />
                  </div>
                </div>
              </Swiper>
              <RoomFeatures />
            </div>
            <div className="col-lg-4">
              <div className="widget-area2">
                <div className="widget-title">
                  <h5>Book Your Room</h5>
                </div>
                <div className="single-widgets booking-widgets">
                  <div className="wp-block-text__inside-wrapper ">
                    <i className="bx bx-user" />
                    <input type="text" placeholder="Your Full Name" />
                  </div>
                  <div className="wp-block-text__inside-wrapper ">
                    <i className="bx bx-envelope" />
                    <input type="email" placeholder="Your Email" />
                  </div>
                  <div className="wp-block-text__inside-wrapper ">
                    <i className="bx bx-phone-call" />
                    <input type="text" placeholder="Phone" />
                  </div>
                  <div className="wp-block-text__inside-wrapper select-items">
                    <i className="bi bi-person" />
                    <Select
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            padding: 0,
                            width: 350,
                            colors: {
                              ...theme.colors,
                              primary25: "#f6f6f6",
                              primary: "#3caa9f",
                            },
                          })}
                          styles={customStyles}
                          components={{
                            IndicatorSeparator: () => null,
                          }}
                          width="230px"
                          menuColor="#333"
                          defaultValue={selectedOption}
                          options={options}
                          placeholder="Person"
                        />
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="searchbox-input date-picker-input input__list">
                        <ReactDatePicker
                          selected={startDate1}
                          onChange={(date) => setStartDate1(date)}
                          placeholderText="Check In"
                          className="claender"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="searchbox-input date-picker-input input__list">
                        <ReactDatePicker
                          selected={startDate2}
                          onChange={(date) => setStartDate2(date)}
                          placeholderText="Check Out"
                          className="claender"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="wp-block-text__inside-wrapper ">
                    <textarea placeholder="Note (If Any)" defaultValue={""} />
                  </div>
                  <div className="wp-block-text__inside-wrapper submit-btn">
                    <button type="submit">Book Now</button>
                    </div>
                </div>
              </div>
              <div className="widget-area2">
                <div className="widget-title">
                  <h5>Summer Offer </h5>
                </div>
                <div className="single-widgets Post-widgets">
                  <SummarOffer
                    image="assets/images/bg/room-st-1.png"
                    title="Donec imperdiet estan ultrices sollicitudi."
                    price="$79.00"
                  />
                  <SummarOffer
                    image="assets/images/bg/room-st-2.png"
                    title="San Francisco Goldenc Gateden Bridge."
                    price="$66.00"
                  />
                  <SummarOffer
                    image="assets/images/bg/room-st-3.png"
                    title="inibus mi, et tincidui odion Donec eu."
                    price="$74.00"
                  />
                  <SummarOffer
                    image="assets/images/bg/room-st-4.png"
                    title="Vestibulum luctus hel neque et blandit."
                    price="$44.00"
                  />
                  <SummarOffer
                    image="assets/images/bg/room-st-5.png"
                    title="Mauris vitae nibh null Morbi convallis."
                    price="$34.00"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="section-title d-flex align-items-center justify-content-between mb-50">
              <h2>Related Room</h2>
              <div className="swiper-btn d-flex align-items-center">
                <div className="btns swiper-button-prev-n">
                  <svg
                    width={26}
                    height={13}
                    viewBox="0 0 26 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.26821 12.5247C7.57342 12.4319 7.74572 12.1194 7.66696 11.807C7.64727 11.7142 6.82514 10.8695 5.21536 9.26803L2.79823 6.86094L14.1996 6.85117L25.6059 6.83652L25.7437 6.73399C25.8176 6.68028 25.916 6.54357 25.9554 6.43127C26.0194 6.25062 26.0145 6.21156 25.9407 6.0602C25.8964 5.96743 25.7979 5.85025 25.7241 5.80143C25.5961 5.71842 25.0693 5.71354 14.1947 5.69889L2.79823 5.68913L5.19075 3.30645C6.51008 1.99793 7.6128 0.865182 7.63742 0.791944C7.76049 0.474579 7.63742 0.176744 7.3322 0.0497979C6.9876 -0.0917957 7.05652 -0.150386 3.8468 3.03791C1.82843 5.03976 0.843853 6.05044 0.824161 6.14321C0.80447 6.21645 0.80447 6.33363 0.824161 6.41175C0.843853 6.49964 1.8235 7.50544 3.81727 9.49263C6.34763 12.0071 6.9876 12.6077 7.11067 12.5686C7.12052 12.5686 7.18944 12.5442 7.26821 12.5247Z" />
                  </svg>
                </div>
                <div className="btns swiper-button-next-n">
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
            <Swiper {...roomSlide} className="swiper room-dt-slider">
              <div className="swiper-wrapper">
                {roomdata.map((data) => {
                  const {
                    image,
                    id,
                    price,
                    roomTitle,
                    numberOfRooms,
                    numberOfGuest,
                  } = data;
                  return (
                    <SwiperSlide key={id} className="swiper-slide">
                      <div className="single-room">
                        <img className="img-fluid" src={image} alt="" />
                        <div className="background" />
                        <div className="room-content">
                        <div className="price-tag">
                      <span>{price}</span> / Per Night
                      </div>
                          <h3>
                            <Link href="/room-suits-details">{roomTitle}</Link>
                          </h3>
                          <div className="bed-and-person d-flex align-items-center">
                            <div className="bed-qty">
                              <p>
                                <img
                                  src="assets/images/icons/double-bed.svg"
                                  alt=""
                                />
                                {numberOfRooms}
                              </p>
                            </div>
                            <div className="persons">
                              <p>
                                <img
                                  src="assets/images/icons/persons.svg"
                                  alt=""
                                />
                                {numberOfGuest}
                              </p>
                            </div>
                          </div>
                          <div className="book-btn">
                            <Link href="/room-suits-details">
                              <a className="btn--primary2">Book Now</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RoomSuitsDetails;
