import React from "react";

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Mission from "../components/mission/Mission";
import Vision from "../components/vision/Vision";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import Newsletter from "../components/Newsletter";
import FAQs from "../components/faqs/FAQs";

const Home = () => {
  return (
    <>
      <Header />
      <Newsletter />
      <Hero />
      <Mission />
      <Vision />
      <Services />
      <FAQs />
      <Contact />
    </>
  );
};

export default Home;
