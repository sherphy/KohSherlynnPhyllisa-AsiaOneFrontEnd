import "./Footer.css";
import footerTopDesktop from "../assets/footerTop.png";
import footerTopMobile from "../assets/footerTopMobile.png";
import footerBot from "../assets/footerBot.png";
import footerCompany from '../assets/footerCompany.png';
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div id="footer-top">
          <picture>
            <source media="(min-width: 768px)" srcSet={footerTopDesktop} />
            <img src={footerTopMobile} />
          </picture>
        </div>
        <div id="footer-bot">
          {window.innerWidth > 768 ? <img src={footerBot} id="footer-bot-desktop"/> : <div id="footer-bot-mobile">
            <img src={footerCompany}/>
            <ul>
              <li>About us</li>
              <li>Advertise with us</li>
              <li>Work with us</li>
              <li>Privacy Statement</li>
            </ul>
            <span> @aisaone 2023 </span>
            <span style={{color:"white"}}> Company Registration No.: 201815023K </span>
            </div>}
        </div>
      </div>
    </>
  );
};

export default Footer;
