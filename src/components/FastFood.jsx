import React, { useRef } from "react";
import MobileNavbar from "../AndroidApplication/MobileNavbar.jsx";
import MobileHero from "../AndroidApplication/MobileHero.jsx";
import AboutApp from "../AndroidApplication/AboutApp.jsx";
import ZoomScrollImage from "../AndroidApplication/ZoomScrollImage.jsx";
import FooterApp from "../AndroidApplication/FooterApp.jsx";
import AppDemo from "../AndroidApplication/AppDemo.jsx";

const FastFood = () => {
  const aboutRef = useRef(null);
  const demoRef = useRef(null); 

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDemo = () => {
    if (demoRef.current) {
      demoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <MobileNavbar scrollToAbout={scrollToAbout} scrollToDemo={scrollToDemo} />
      <MobileHero />
      <div ref={aboutRef}>
        <AboutApp />
      </div>
      <ZoomScrollImage />
      <div ref={demoRef}>
        <AppDemo />
      </div>
      <FooterApp />
    </div>
  );
};

export default FastFood;
