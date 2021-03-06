import React from "react";
import { useState } from "react";
import ReplacementImage from "../../src/Images/replacement.png";
import PremierLeaugeIcon from "../../src/Images/premier-league-icon.svg";
import LaLigaIcon from "../../src/Images/la-liga-icon.png";
import SerieAIcon from "../../src/Images/serie-a-icon.svg";
import UeL from "../../src/Images/uel.png";

const Content = (props) => {
  let allFootballHighlights = props.data;
  const [query, setQuery] = useState("");

  const onInputHandler = (e) => {
    setQuery(e.target.value);
  };

  if (query) {
    allFootballHighlights = allFootballHighlights.filter((item) => {
      console.log(item);
      if (
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.competition.toLowerCase().includes(query.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
  }

  const iconObj = {
    "ENGLAND: Premier League": PremierLeaugeIcon,
    "SPAIN: La Liga": LaLigaIcon,
    "ITALY: Serie A": SerieAIcon,
    "EUROPA CONFERENCE LEAGUE: Final": UeL,
  };

  return (
    <>
      <div className="heroContent">
        <p className="heroContent__text">
          Football highlights, from the all the top leagues in one place.
        </p>
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Search for a team or league..."
          onInput={onInputHandler}
          value={query}
          className="input__box"
        ></input>
      </div>

      {query &&
        allFootballHighlights.map((highlights, idx) => {
          return (
            <div className="highlights__content" key={idx}>
              <div className="highlights__card">
                <div className="highlights__title">
                  <h4>{highlights.title}</h4>
                </div>
                <a href={highlights.matchviewUrl}>
                  <div className="highlights__image">
                    <img
                      src={highlights.thumbnail}
                      alt="match day"
                      onError={(e) => (e.target.src = ReplacementImage)}
                    ></img>
                  </div>
                </a>
                <div className="highlights__comp">
                  <img
                    src={iconObj[highlights.competition]}
                    className="highlights__img"
                  ></img>
                  <p>{highlights.competition}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Content;
