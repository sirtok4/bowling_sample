import Head from "next/head";
import React, { useEffect, useState } from "react";
import ChooseUs5 from "../components/choose/ChooseUs5";
import Footer from "../components/footer/Footer";
import Header5 from "../components/header/Header5";
import About5 from "../components/home5/About5";
import Blog5 from "../components/home5/Blog5";
import Marque5 from "../components/home5/Marque5";
import RoomSuits from "../components/home5/RoomSuits";
import Preloader from "../components/loader/Preloader";
import Offer5 from "../components/offers/Offer5";
import ExtraService5 from "../components/services/ExtraService5.jsx/ExtraService5";
import Services5 from "../components/services/Services5";
import Testimonial5 from "../components/testmonial/Testimonial5";

function Index5() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);
  return (
    <>  
      {!loading ? (
        <Preloader />
      ) : (
        <>
          <Head>
            <title>
              Hotelina - Luxury Hotel and Suits Booking React NextJs Template
            </title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="assets/images/bg/sm-logo.png" />
          </Head>
          <Header5 />
          <RoomSuits />
          <About5 />
          <Services5 />
          <Offer5 />
          <ChooseUs5 />
          <ExtraService5 />
          <Testimonial5 />
          <Blog5 />
          <Marque5 />
          <Footer />
        </>
      )}
    </>
  );
}

export default Index5;