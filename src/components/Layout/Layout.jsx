import React from "react";
import Head from "next/head";
import Footer from "../footer/Footer";
import LayoutHeader from "../header/LayoutHeader";

function Layout({ children, price }) {
  return (
    <>
      <Head>
        <title>
        Bowling Website - Sample Idea
        </title>
        <meta name="description" content="" />
        <link rel="icon" href="assets/images/bg/sm-logo.png" />
      </Head>
      <LayoutHeader price={price} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
