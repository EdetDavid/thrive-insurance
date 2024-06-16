import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Whatwedo from "./pages/Whatwedo";
import Team from "./pages/team/Team";
import OtherTeamMembers from "./pages/team/otherTeam";
import Products from "./pages/products/Products";
import Claim from "./pages/claim/Claim";
import Reportclaim from "./pages/claim/Reportclaim";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Career from "./pages/career/Career";
import BoardOfDirectors from "./pages/team/BoardofDirectors";
import BackgroundMusic from "./components/music/BackgroundMusic";
import musicFile from "./assets/music/wonderful-world.mp3";
import NotFound from "./pages/notfound/NotFound";

import {
  Engineering,
  Liability,
  Life,
  Property,
  Motor,
  Pecuniary,
  Travel,
  SpecialtyLines,
} from "./pages/product/index";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in",
      once: false,
    });
  }, []);

  useEffect(() => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="App bg-light">
      {loading ? (
        <div id="preloader" className="rotating-image"></div>
      ) : (
        <>
          <Navbar />
          <BackgroundMusic src={musicFile} />
          <div className="fade">
            <Routes>
              <Route index exact path="/" element={<Home />} />
              <Route exact path="/who-we-are" element={<About />} />
              <Route exact path="/what-we-do" element={<Whatwedo />} />
              <Route exact path="/our-products" element={<Products />} />
              <Route
                exact
                path="/board-of-directors"
                element={<BoardOfDirectors />}
              />
              <Route exact path="/management-team" element={<Team />} />
              <Route
                exact
                path="/other-team-members"
                element={<OtherTeamMembers />}
              />
              <Route exact path="/claim" element={<Claim />} />
              <Route exact path="/report-a-claim" element={<Reportclaim />} />
              <Route exact path="/career" element={<Career />} />
              <Route
                exact
                path="/products/life&personal-insurance"
                element={<Life />}
              />
              <Route
                exact
                path="/products/engineering-insurance"
                element={<Engineering />}
              />
              <Route
                exact
                path="/products/travel-insurance"
                element={<Travel />}
              />
              <Route
                exact
                path="/products/pecuniary-insurance"
                element={<Pecuniary />}
              />
              <Route
                exact
                path="/products/property-insurance"
                element={<Property />}
              />
              <Route
                exact
                path="/products/liability-insurance"
                element={<Liability />}
              />
              <Route
                exact
                path="/products/travel-insurance"
                element={<Travel />}
              />
              <Route
                exact
                path="/products/motor-insurance"
                element={<Motor />}
              />
              <Route
                exact
                path="/products/specialty-lines"
                element={<SpecialtyLines />}
              />
              <Route path="*" element={<NotFound />} />
              {/* Catch-all route for 404 */}
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
