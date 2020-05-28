import React from 'react';
import './App.css';
import Scores from './Scores.js'
import HighScoreTable from './HighScoreTable.js'

function App() {
  return (
    <div className="App">
      <HighScoreTable CountriesScore={Scores}/>
    </div>
  );
}

export default App;
