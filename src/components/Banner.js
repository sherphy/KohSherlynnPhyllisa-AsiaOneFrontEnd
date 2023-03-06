import React from "react";
import { useState } from "react";
import "./Banner.css";
import articles from "../assets/data";
import bannerPhoto from "../assets/banner.png";
import bannerLogo from "../assets/bannerLogo.svg";
import companyLogo from "../assets/companyLogo.png";
import menuLogo from "../assets/menu.png";
import escapeLogo from "../assets/escapeLogo.png";

const Banner = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className="bannerContainer">
        <div className="banner">
          <img src={bannerPhoto} id="banner-photo" />
          <img src={companyLogo} id="company-logo" />
          <img src={menuLogo} id="menu-logo" onClick={toggleMenu} />
          <div id="banner-words-center">
            <img src={bannerLogo} id="banner-logo" /> <br />
            <h1 id="banner-headline">STORIES OF FREEDOM</h1>
          </div>
          {/* if menu overlay is clicked  */}
          {menuOpen && (
            <div className="menu">
              <img
                src={escapeLogo}
                height="30px"
                id="escape-logo"
                onClick={toggleMenu}
              />
              <div className="menu-titles">
                {/* map json to display titles */}
                {articles.map((article, index) => (
                  <p key={index}>{article.title}</p>
                ))}
              </div>
            </div>
          )}
        </div>
        <span id="banner-bottom"></span>
      </div>
    </>
  );
};

export default Banner;
