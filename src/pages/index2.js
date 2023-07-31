import Head from "next/head";
import React, { useEffect, useState } from "react";
import Home2About from "../components/about/Home2About";
import Banner2 from "../components/banner/Banner2";
import Home2Blog from "../components/blog/Home2Blog";
import ChooseUs2 from "../components/choose/ChooseUs2";
import Contact2 from "../components/contact/Contact2";
import Counter2 from "../components/counter/Counter2";
import Footer from "../components/footer/Footer";
import Header1 from "../components/header/Header1";
import Header2 from "../components/header/Header2";
import Facilitis2 from "../components/home2/Facilitis2";
import RoomSuits2 from "../components/home2/RoomSuits2";
import Preloader from "../components/loader/Preloader";
import Offer2 from "../components/offers/Offer2";
import Testimonial2 from "../components/testmonial/Testimonial2";
import Video2 from "../components/video/Video2";

function Index2() {
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
          <Header2 />
          <Banner2 />
          <Facilitis2 />
          <RoomSuits2 />
          <Home2About />
          <Offer2 />
          <ChooseUs2 />
          <Testimonial2 />
          <Contact2 />
          <Counter2 />
          <Video2 />
          <Home2Blog />
          <Footer />
        </>
      )}
    </>
  );
}

export default Index2;