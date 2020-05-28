import React, { useState } from "react";
import "./HighScoreTable.css";

function HighScoreTable(props) {
  const [toggle, setToggle] = useState(true);
  const [CountriesScore, setScores] = useState(props.CountriesScore);

  props.CountriesScore.sort((a, b) => a.name.localeCompare(b.name));

  const ascSort = () => {
    setToggle(false);
    setScores(
      props.CountriesScore.map((score) => {
        return score.scores.sort((a, b) => Number(a.s) - Number(b.s));
      })
    );
  };
  const desceSort = () => {
    setToggle(true);
    setScores(
      props.CountriesScore.map((score) => {
        return score.scores.sort((a, b) => Number(b.s) - Number(a.s));
      })
    );
  };
  return (
    <div id="AllCountriesScore_JSX" className="AllCountriesScore_CSS">
      <div id="Div_Title_JSX" className="Div_Title_CSS">
        <p className="P_Title_CSS">High Score Per Country</p>
        {toggle ? (
          <i id="I_Asc_JSX" className="I_Asc_CSS fas fa-sort-amount-down-alt" onClick={ascSort}></i>
        ) : (
          <i id="I_Desc_JSX" className="I_Desc_CSS fas fa-sort-amount-down" onClick={desceSort}></i>
        )}
      </div>
      {props.CountriesScore.map(
        (country, index) => {
          return (
            <div className="Div_Country_CSS" key={index}>
              <div>
                <p className="P_Country_CSS">High Score: {country.name}</p>
                <div className="Div_NameAndScore_CSS">
                  {country.scores.map((name, i) => {
                    return (
                      <div key={i} className="Div_Parent_CSS">
                        <p className="P_Name_CSS">{name.n}</p>
                        <p className="P_Score_CSS">{name.s}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
export default HighScoreTable;
