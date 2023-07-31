import React from "react";
import About1 from "../components/about/About1";
import ChooseUs2 from "../components/choose/ChooseUs2";
import Breadcrum from "../components/common/Breadcrum";
import Feature1 from "../components/feature/Feature1";
import BlogPost from "../components/home1/BlogPost";
import Layout from "../components/Layout/Layout";
import Testimonial1 from "../components/testmonial/Testimonial1";

function About() {
  return (
    <Layout>
      <Breadcrum pageName="About Us" pageTitle="About Us" />
      <About1 />
      <ChooseUs2 />
      <Feature1 />
      <Testimonial1 />
      <BlogPost />
    </Layout>
  );
}

export default About;
