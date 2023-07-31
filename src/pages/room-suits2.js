import Link from "next/link";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import Breadcrum from "../components/common/Breadcrum";
import Layout from "../components/Layout/Layout";
import roomData from "../data/room_suits2.json";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

function RoomSuits2() {
  const [startDate1, setStartDate1] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const options = [
    { value: "Person 1", label: "Person 1" },
    { value: "Person 2", label: "Person 2" },
    { value: "Person 3", label: "Person 3" },
    { value: "Person 4", label: "Person 4" },
    { value: "Person 5", label: "Person 5" },
    { value: "Person 6", label: "Person 6" },
  ];
  const roomOptions = [
    { value: "Room 1", label: "Room 1" },
    { value: "Room 2", label: "Room 2" },
    { value: "Room 3", label: "Room 3" },
    { value: "Room 4", label: "Room 4" },
    { value: "Room 5", label: "Room 5" },
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
      height: 16,
      width: "100%",
      maxWidth: "450px",
      marginTop: "-5px",
      paddingRight: 5,
      border: "0px solid red",
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: "none",
      outline: "none",
      boxShadow: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#1C171D",
    }),
    container: (provided) => ({
      ...provided,
      paddingLeft: 55,
      marginTop: -12,
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#3caa9f",
    }),
  };
  return (
    <Layout>
      <Breadcrum pageName="Room & Suits 02" pageTitle="Room & Suits 02" />
      <div className="room-suits-page-2 pt-120 mb-120">
        <div className="container">
          <div className="row mb-70">
            <div className="col-12">
              <div className="multi-main-searchber">
                <div className="row align-items-center">
                  <div className="col-lg-10">
                    <div className="row gx-2 gy-4">
                      <div className="col-lg-3 col-md-6">
                        <div className="searchbox-input date-picker-input">
                          <label>Check In</label>
                          <ReactDatePicker
                            selected={startDate1}
                            onChange={(date) => setStartDate1(date)}
                            placeholderText="Check In"
                            className="claender"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="searchbox-input date-picker-input">
                          <label>Check Out</label>
                          <ReactDatePicker
                            selected={startDate2}
                            onChange={(date) => setStartDate2(date)}
                            placeholderText="Check In"
                            className="claender"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="searchbox-input two">
                          <label>Person</label>
                          <Select
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 0,
                              padding: 0,
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
                            width="200px"
                            menuColor="#333"
                            defaultValue={selectedOption}
                            options={options}
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="searchbox-input two three">
                          <label>Room</label>
                          <Select
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 0,

                              padding: 0,
                              colors: {
                                ...theme.colors,
                                primary25: "#f6f6f6",
                                primary: "#3caa9f",
                              },
                              zIndex: 10,
                            })}
                            styles={customStyles}
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                            width="200px"
                            menuColor="#333"
                            defaultValue={selectedOption2}
                            options={roomOptions}
                            placeholder="Select"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 px-0">
                    <div className="main-form-submit">
                      <Link href="/room-suits2">
                        <a className="btn--primary">Find Now</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {roomData.map((data) => {
              const {
                id,
                numberOfGuest,
                numberOfRooms,
                image,
                roomTitle,
                price,
              } = data;
              return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-10">
                  <div className="room-suits-wrrap">
                    <div className="room-suits-img">
                      <img src={image} alt="" />
                    </div>
                    <div className="room-suits-content text-center">
                      <div className="client-review">
                        <ul className="stars d-flex align-items-center justify-content-center">
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
                          <li>(5.0)</li>
                        </ul>
                      </div>
                      <div className="price-tag">
                      <span>{price}</span> / Per Night
                      </div>
                      <h3>
                        <Link href="/room-suits-details">
                          <a>{roomTitle}</a>
                        </Link>
                      </h3>
                      <div className="bed-and-person d-flex align-items-center justify-content-center">
                        <div className="bed-qty">
                          <p>
                            <img
                              src="assets/images/icons/double-bed1.svg"
                              alt=""
                            />
                            {numberOfRooms}
                          </p>
                        </div>
                        <div className="persons">
                          <p>
                            <img
                              src="assets/images/icons/persons1.svg"
                              alt=""
                            />
                            {numberOfGuest}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RoomSuits2;
