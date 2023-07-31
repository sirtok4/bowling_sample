import React from "react";
import Breadcrum from "../components/common/Breadcrum";
import Layout from "../components/Layout/Layout";
import roomData from "../data/rooms_data.json";
import Link from "next/link";
function RoomSuits1() {
  return (
    <Layout>
      <Breadcrum pageName="Room & Suits 01" pageTitle="Room & Suits 01" />
      <div className="our-room-section mb-120 pt-120">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {roomData.slice(0, 12).map((data) => {
              const {
                id,
                numberOfGuest,
                numberOfRooms,
                roomTitle,
                price,
                image,
              } = data;
              return (
                <div key={id} className="col-lg-4 col-md-6">
                  <div className="single-room">
                    <img className="img-fluid" src={image} alt="" />
                    <div className="background" />
                    <div className="room-content">
                      <div className="price-tag">
                        <span>{price}</span> / Per Night
                      </div>
                      <h3>
                        <Link href="/room-suits-details">
                          <a>{roomTitle}</a>
                        </Link>
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
                            <img src="assets/images/icons/persons.svg" alt="" />
                            {numberOfGuest}Guest
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RoomSuits1;
