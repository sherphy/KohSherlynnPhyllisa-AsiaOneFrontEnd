import React from "react";
import "./Banner.css";
import bannerPhoto from "../assets/banner.png";
import bannerLogo from "../assets/bannerLogo.svg";
import companyLogo from "../assets/companyLogo.png";
import menu from "../assets/menu.png";

const Banner = () => {
  return (
    <div className="bannerContainer">
      <div className="banner">
        <img src={bannerPhoto} id="banner-photo" />
        <img src={companyLogo} id="company-logo" /> 
        <img src={menu} id="menu" /> 
        <div id="banner-words-center">
          <img src={bannerLogo} id="banner-logo" /> <br />
          <h1 id="banner-headline">STORIES OF FREEDOM</h1>
        </div>
      </div>
      <span id="banner-bottom"></span>
    </div>
  );
};

export default Banner;
