import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import Scorebelow70 from './components/Scorebelow70.js';
import { OddPlayers, EvenPlayers } from './components/OddPlayers';
import ListofIndianPlayers from './components/ListofIndianPlayers';

function App() {
  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 },
  ];

  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  const oddTeam = { first: 'Sachin1', third: 'Virat3', fifth: 'Yuvaraj5' };
  const evenTeam = { second: 'Dhoni2', fourth: 'Rohit4', sixth: 'Raina6' };

  var flag = false;

  return (
    <div className="App">
      {flag === true ? (
        <div>
          <h1> List of Players</h1>
          <ListofPlayers players={players} />
          <hr />
          <h1> List of Players having Scores Less than 70</h1>
          <Scorebelow70 players={players} />
        </div>
      ) : (
        <div>
          <h1> Indian Team </h1>
          <h1> Odd Players </h1>
          <OddPlayers first={oddTeam.first} third={oddTeam.third} fifth={oddTeam.fifth} />
          <hr />
          <h1> Even Players</h1>
          <EvenPlayers second={evenTeam.second} fourth={evenTeam.fourth} sixth={evenTeam.sixth} />
          <hr />
          <h1> List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      )}
    </div>
  );
}

export default App;