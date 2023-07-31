import Head from "next/head";
import { useEffect, useState } from "react";
import About1 from "../components/about/About1";
import Bannere1 from "../components/banner/Banner3";
// import Sidebar from "../components/common/Sidebar";
import Video from "../components/common/Video";
import Feature1 from "../components/feature/Feature1";
import Footer from "../components/footer/Footer";
import Gallary1 from "../components/gallary/Gallary1";
import Header2 from "../components/header/Header2";
// import BlogPost from "../components/home1/BlogPost";
import Preloader from "../components/loader/Preloader";
import Offers1 from "../components/offers/Offers1";
// import Room1 from "../components/room/Room1";
import Testimonial1 from "../components/testmonial/Testimonial1";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 900);
  }, []);
  return (
    <>
      {!loading ? (
        <Preloader />
      ) : (
        <>
          <Head>
            <title>
              Bowling Website - Sample Idea
            </title>
            <meta name="description" content="" />
            <link rel="icon" href="assets/images/bg/sm-logo.png" />
          </Head>
          <Header2 />
          <Bannere1 />
          <About1 />
          {/* <Room1 /> */}
          <Feature1 />
          <Offers1 />
          <Testimonial1 />
          <Video />
          <Gallary1 />
          {/* <BlogPost /> */}
          <Footer />
        </>
      )}
    </>
  );
}
