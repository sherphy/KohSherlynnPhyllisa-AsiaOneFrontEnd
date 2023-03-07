import "./Body.css";
import socials from "../assets/socials.png";
import quoteLandscape from "../assets/quoteLandscape.png";
import quoteMobile from "../assets/quoteMobile.png";
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
        <div className="first-post">
          <div className="body-header">
            <img src={socials}></img>
            <h1>{news[0].title}</h1>
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
      </div>
    </>
  );
};

export default Body;
