import React from "react";
import "../css/intro.css";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Banner from "../components/Banner";
import TopFeatures from "../components/TopFeatures";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Nav name="home" />
      <Carousel />
      <Banner />
      <TopFeatures />
      <Footer />
    </div>
  );
}
