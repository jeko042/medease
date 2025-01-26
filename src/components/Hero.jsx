import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Medease is an advanced healthcare management system designed to streamline hospital appointment booking processes. It provides patients with a seamless experience by allowing them to schedule appointments online with just a few clicks, ensuring convenience and accessibility. For healthcare providers, Medease offers an intuitive interface to manage appointments, reduce no-shows through automated reminders, and improve operational efficiency. With features like secure patient data handling, real-time scheduling updates, and integration with electronic medical records (EMRs), Medease enhances the overall patient care experience while optimizing administrative workflows for hospitals and clinics.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
