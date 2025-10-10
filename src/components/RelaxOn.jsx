import React, { useRef } from "react";
import RelaxOnNavbar from "../RelaxOnApplication/RelaxOnNavbar.jsx";
import RelaxOnHero from "../RelaxOnApplication/RelaxOnHero.jsx";
import RelaxOnAbout from "../RelaxOnApplication/RelaxOnAbout.jsx";
import RelaxOnAiGen from "../RelaxOnApplication/RelaxOnAiGen.jsx";
import RelaxOnDemo from "../RelaxOnApplication/RelaxOnDemo.jsx";
import RelaxOnFooter from "../RelaxOnApplication/RelaxOnFooter.jsx";

const RelaxOn = () => {
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
      <RelaxOnNavbar scrollToAbout={scrollToAbout} scrollToDemo={scrollToDemo} />
      <RelaxOnHero />
      <div ref={aboutRef}>
        <RelaxOnAbout />
      </div>
      <RelaxOnAiGen />
      <div ref={demoRef}>
        <RelaxOnDemo />
      </div>
      <RelaxOnFooter />
    </div>
  );
};

export default RelaxOn;
