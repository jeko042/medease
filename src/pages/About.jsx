import React from "react";
import Logo from "../components/Logo";
import Bio from "../components/Bio";
const About = () => {
  return (
    <>
      <Logo
        title={"MedEase"}
        imageUrl={"/about.png"}
      />
      <Bio imageUrl={"/whoweare.png"} />
    </>
  );
};

export default About;