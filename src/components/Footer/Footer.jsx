import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Makerere Kikoni</span>

          <div className="flexCenter f-menu">
            <span>Residencies</span>
            <span>Our Values</span>
            <span>Contact Us</span>
            <span>Get Started</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
