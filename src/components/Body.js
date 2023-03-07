import "./Body.css";
import socials from "../assets/socials.png";
import quoteLandscape from "../assets/quoteLandscape.png";
import quoteMobile from "../assets/quoteMobile.png";
import freedomStories from "../assets/freedomStories.png";
import thirdPostBanner from "../assets/thirdPostBanner.png";
import news from "../assets/data.json";
import React from "react";

const Body = () => {
  const newsFormatted = news.map((item) => {
    return {
      title: item.title,
      content: item.content.replace(/\\"/g, '"'),
    };
  });

  const paraFormatted = newsFormatted.map((item) =>
    item.content.split("\n").map((para, index) => <p key={index}>{para}</p>)
  );

  return (
    <>
      <div className="body-container">
        <div id="first-post">
          <div className="body-header">
            <img src={socials}></img>
            <h1 id="centered-title">{news[0].title}</h1>
          </div>
          {paraFormatted[0]}
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={quoteLandscape}
              id="quote-landscape"
            />
            <img src={quoteMobile} id="quote-mobile" />
          </picture>
        </div>
        <div id="second-post">
          <div className="body-header">
            <h1>{news[1].title.toUpperCase()}</h1>
          </div>
          <img src={freedomStories} id="freedom-stories" />
          {/* truncates at key 2 inclusive. Refer to discrepency 2*/}
          {/* doesnt re-render constantly unlike useState but that's fine.
          That's why I set full-text desktop version as default */}
          {window.innerWidth > 768 ? (
            paraFormatted[1]
          ) : (
            <div>
              {" "}
              {paraFormatted[1][0]} {paraFormatted[1][1]} {paraFormatted[1][2]}
            </div>
          )}
        </div>
        </div>
        <div id="intermission-banner">
        <img src={thirdPostBanner} id="third-banner"/>
        <p id="banner-text"> I am not going to be anyone's burden. So they are happy to have me on every trip. And many times, a woman can lead as well. </p>
        </div>
        <div className="body-container">
        <div id="third-post">
          <div className="body-header">
            <h1>{news[2].title.toUpperCase()}</h1>
          </div>
          {paraFormatted[2]}
        </div>
        <div className="last-post">
          <div className="body-header">
            <h1>{news[3].title.toUpperCase()}</h1>
          </div>
          {paraFormatted[3]}
        </div>
        </div>
    </>
  );
};

export default Body;
