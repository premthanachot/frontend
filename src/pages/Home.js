import React from "react";
import Header from "./../components/Header";
import ShopSection from "../components/homeConponents/ShopSection";
import Footer from "../components/Footer";

const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <ShopSection />
      <Footer />
    </div>
  );
};

export default HomeScreen;
