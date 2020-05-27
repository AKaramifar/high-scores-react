import React from "react";
import "./HighScoreTable.css";

function HighScoreTable(props) {
  return (
    <div id="AllCountriesScore_JSX" className="AllCountriesScore_CSS">
      <p className="P_Title_CSS">High Score Per Country</p>
      {props.CountriesScore.sort((a, b) => a.name.localeCompare(b.name)).map((country, index) => {
        return (
          <div className="Div_Country_CSS" key={index}>
            <div>
              <p className="P_Country_CSS">High Score: {country.name}</p>
              <div className="Div_NameAndScore_CSS">
                {country.scores.sort((a, b) => (a.s > b.s) ? -1 : 1).map((name, i) => {
                    return(
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
      })}
    </div>
  );
}
export default HighScoreTable;
