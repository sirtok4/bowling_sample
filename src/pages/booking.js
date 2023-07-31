'use client'
import React, { useState, useEffect } from "react";
// import Link from "next/link";
import Select from "react-select";
import Breadcrum from "../components/common/Breadcrum";
import Layout from "../components/Layout/Layout";
import RoomFeatures from "../components/roomSuitsDetails/RoomFeatures";
// import SummarOffer from "../components/roomSuitsDetails/SummarOffer";
// import roomdata from "../data/rooms_data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {pallete} from '../utils/keys'
import { MoonLoader } from "react-spinners";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Booking() {
  const [startDate1, setStartDate1] = useState(false);
  const [Guests, setGuests] = useState(null);
  const [HowLong, setHowLong] = useState(null);
  const [StartTime, setStartTime] = useState(null);
  const [PriceTotal, setPriceTotal] = useState(0);
  const [LaneQty, setLaneQty] = useState();
  const [IsProcessing, setIsProcessing] = useState(false)
  const options = [
    { value: 1, label: "1 Hour" },
    { value: 2, label: "2 Hours (Popular)" },
    { value: 3, label: "3 Hours" },
    { value: 4, label: "4 Hours" },
    { value: 5, label: "5 Hours" },
    { value: 6, label: "6 Hours" },
    { value: 7, label: "7 Hours" },
  ]
  , lanesOptions = [
    { value: 1, label: "1 Lane" },
    { value: 2, label: "2 Lanes" },
    { value: 3, label: "3 Lanes" },
    { value: 4, label: "4 Lanes" },
    { value: 5, label: "5 Lanes" },
    { value: 6, label: "6 Lanes" },
  ]
  , guestOptions = Array.from({length: 72}, (_, index) => {return {value: index + 1, label: index + 1}})
  , customStyles = {
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
      color: pallete.placeholder,
      fontWeight: 'normal'
    }),
    container: (provided) => ({
      ...provided,
      width: "100%",
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: pallete.primary,
      top: "8px",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      position:"relative !important",
      top: "2px"
    }),
  }
  , roomsuitsSlider = {
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
  }
  , offerTimeOptions = [
    { value: 1, label: "10:00 AM", price: 180},
    { value: 2, label: "10:30 AM", price: 180 },
    { value: 3, label: "11:00 AM", price: 180 },
    { value: 4, label: "11:30 AM", price: 180 },
    { value: 5, label: "12:00 AM", price: 180 },
    { value: 6, label: "12:30 AM", price: 180 },
    { value: 7, label: "1:00 PM", price: 180 },
    { value: 8, label: "1:30 PM", price: 180 },
    { value: 9, label: "2:00 PM", price: 180 },
    { value: 10, label: "2:30 PM", price: 180 },
    { value: 11, label: "3:00 PM", price: 180 },
    { value: 12, label: "3:30 PM", price: 180 },
    { value: 13, label: "4:00 PM", price: 180 },
    { value: 14, label: "4:30 PM", price: 215 },
    { value: 15, label: "5:00 PM", price: 250 },
    { value: 16, label: "5:30 PM", price: 250 },
    { value: 17, label: "6:00 PM", price: 250 },
    { value: 18, label: "6:30 PM", price: 250 },
    { value: 19, label: "7:00 PM", price: 250 },
    { value: 20, label: "7:30 PM", price: 250 },
    { value: 21, label: "8:00 PM", price: 250 },
    { value: 22, label: "8:30 PM", price: 250 },
    { value: 23, label: "9:00 PM", price: 250 },
    { value: 24, label: "9:30 PM", price: 250 },
    { value: 25, label: "10:00 PM", price: 250 },
    { value: 26, label: "10:30 PM", price: 250 },
    { value: 27, label: "11:00 PM", price: 250 },
  ]
  , BookingComponent = () => {
    return <div className="widget-area2">
      <div className="widget-title"><h5>Book a Lane</h5></div>
      <div className="single-widgets booking-widgets">
      <div className="mb-2">
        <label className="fw-bold mb-1" style={{fontSize: 18}}>What Date?</label>
        {/* <p className="text">Most guests book 2 hours to ensure they have the best experience.</p> */}
      </div>
      <div className="searchbox-input date-picker-input input__list">
        <ReactDatePicker
          minDate={new Date("07-01-2023")} maxDate={new Date("07-01-2024")} selected={startDate1} onChange={(date) => setStartDate1(date)} dateFormat='dd/MM/y' className="claender" placeholderText="Date" 
        />
      </div>
      {/* Guests */}
      <div className="mb-2">
        <label className="fw-bold mb-1" style={{fontSize: 18}}>Number of Guests?</label>
        <p className="text">In order to ensure we have the appropriate number of resources reserved for your group, please tell us how many people are expected.</p>
      </div>
      <div className="wp-block-text__inside-wrapper select-items">
        <i className="bi bi-people" />
        <Select
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                padding: 0,
                width: 350,
                colors: {
                  ...theme.colors,
                  primary25: "#f6f6f6",
                  primary50: pallete.primary,
                  primary: pallete.primary,
                },
              })}
              styles={customStyles} components={{IndicatorSeparator: () => null,}}
              onChange={setGuests} defaultValue={Guests}
              width="230px" menuColor="#333" placeholder="Guests" options={guestOptions}
            />
      </div>
      {/* Lanes */}
      <div className="mb-2">
        <label className="fw-bold mb-1" style={{fontSize: 18}}>For 6 guests we recommend 2 lanes</label>
        <p className="text">If you want to change the number of lanes please choose below.</p>{/* If your reservation is more than 10 lanes, please call +6012-2310277 */}
      </div>
      <div className="wp-block-text__inside-wrapper select-items"><i className="bi bi-layers" />
        <Select
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                padding: 0,
                width: 350,
                colors: {
                  ...theme.colors, primary25: "#f6f6f6", primary50: pallete.primary, primary: pallete.primary,
                }
              })}
              styles={customStyles} components={{IndicatorSeparator: () => null,}} width="230px" menuColor="#333" placeholder="Lanes"
              defaultValue={LaneQty} options={lanesOptions} 
              onChange={(v) => {
                // setIsProcessing(true)
                setLaneQty(v)
                // setTimeout(() => {setIsProcessing(false)}, 500);
              }}
      /></div>
      {/* How Long */}
      <div className="mb-2">
        <label className="fw-bold mb-1" style={{fontSize: 18}}>How long?</label>
        <p className="text">Most guests book 2 hours to ensure they have the best experience.</p>
      </div>
      <div className="wp-block-text__inside-wrapper select-items"><i className="bi bi-clock" />
        <Select
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                padding: 0,
                width: 350,
                colors: {...theme.colors, primary25: "#f6f6f6", primary50: pallete.primary, primary: pallete.primary}
              })}
              styles={customStyles} components={{IndicatorSeparator: () => null,}}
              width="230px" menuColor="#333" placeholder="Time"
              options={options} onChange={setHowLong}
              defaultValue={HowLong}
        />
      </div>
      {/* Start Time */}
      <div className="mb-1">
        <label className="fw-bold mb-1" style={{fontSize: 18}}>We can offer you the following start times</label>
      </div>
      <div className="row wp-block-tag-cloud g-1 mb-3">
        {offerTimeOptions.map((i, index) => {
          return <div className="col-md-4" key={index}>
            <input type='radio' name="time-start" value={i.value} hidden id={"timestart_"+i.value}
              checked={StartTime == i.value}
              onChange={(e)=>{
                setStartTime(e.target.value)
                // setIsProcessing(true) setTimeout(() => {setIsProcessing(false)}, 400);
              }} />
            <label htmlFor={"timestart_"+i.value} className='d-block'>
              <div className={`box`}>{/* ${i.isSelected && 'selected'} */}
                <div className="main">
                  <div>{i.label}</div>
                  <div className="price">RM {i.price}.00</div>
                </div>
                <div className="avaib" style={{backgroundColor: '#00d500'}} />
              </div>
            </label>
          </div>
        })}
      </div>
      <div className="wp-block-text__inside-wrapper submit-btn"><button type="submit">Confirm Booking</button></div>
    </div>
  </div>
  }
  , calcPriceHours = (startTimeObj, period) => {
    const periodFilters = Array(period).fill(startTimeObj.value).map((n, i) => {
      if (i == 0) return n+i
      return n + (i*2)
    })
    const filtered = offerTimeOptions.filter(i => periodFilters.includes(i.value))
    return filtered.map(i => i.price).reduce((pv, cv) => pv + cv, 0);
  }
  useEffect(() => {
    if (typeof LaneQty ==='object' && LaneQty && StartTime > 0 && typeof HowLong ==='object' && HowLong) {
      setIsProcessing(true)
      const findPrice = offerTimeOptions.find(i => i.value == StartTime)
      const total = calcPriceHours(findPrice, HowLong.value) * LaneQty.value
      setPriceTotal(total)
      setTimeout(() => {
        setIsProcessing(false)
      }, 900);
    }
  }, [LaneQty, StartTime, HowLong])
  return (<Layout price={PriceTotal}>
    {IsProcessing && <div className="loader-box">
      <MoonLoader color={pallete.primary} size={80} aria-label="Loading Spinner" data-testid="loader" title="Loading" />
      <div className="fw-bold h5 mt-3">Calculating...</div>
    </div>}
      <Breadcrum pageName="Booking" pageTitle="Book Now" />
      <div className="room-suits-details-page pt-80 mb-120">
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
                        src="assets/images/bg/856_1.jpg"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="rooms-imeges">
                      <img
                        className="img-fluid"
                        src="assets/images/bg/856_2.jpg"
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
              <BookingComponent />
              <div className="widget-area2 mb-3" style={{marginTop: '6rem'}}>
                <div className="widget-title"><h5>Order Summary</h5></div>
                <div className="row mt-3">
                  <div className="col-xl-6">
                    <div className="h6 fw-normal">Booking</div>
                  </div>
                  <div className="col-xl-6">
                    <div className="h6 text-color-primary text-end">RM {PriceTotal}.00</div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-xl-6">
                    <div className="h6 fw-normal">Discount</div>
                  </div>
                  <div className="col-xl-6">
                    <div className="h6 text-color-primary text-end">RM 0.00</div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-xl-6">
                    <div className="h6 fw-normal">Total</div>
                  </div>
                  <div className="col-xl-6">
                    <div className="h6 text-color-primary text-end">RM {PriceTotal}.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
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
          </div> */}
        </div>
      </div>
    </Layout>
  );
}
export default Booking
