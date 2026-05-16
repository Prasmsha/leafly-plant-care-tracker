import React from "react";
import hero from "../assets/hero.png";
import "../App.css"; 

const About = () => {
  return (
    <div>
      <div>About</div>
      <img src="/favicon.svg" alt="Favicon" />
      <img src={hero} alt="Hero" />
    </div>
  );
};

export default About;