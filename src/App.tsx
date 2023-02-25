import React from 'react';
import './App.css';

// components

import FullBoard from './components/FullBoard';
import Menu from './components/Menu';

import {games} from './games/easy';

import { populateGame } from './modules/gameFunctions';


/* 
sudoku state looks like:

[
  [<9 numbers>],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
]


*/


function App() {

const currentGame = populateGame(games[0])

  return (
    <div className="App">
      <header className="App-header">
      </header>
        <Menu />
        <FullBoard currentGame = {currentGame}/>
    </div>
  );
}

export default App;
