import React, { useEffect } from 'react';
import './App.css';

// libraries
import { useAppSelector, useAppDispatch } from './hooks'
import { setGame } from './redux/reducers/game.reducer';
import axios from 'axios'

// components
import FullBoard from './components/FullBoard';
import Menu from './components/Menu';
import Header from './components/Header'

// internal
import { BoardInt, blankGame } from './model'
import type { Game } from './model'
import { games } from './games/easy';
import { setNotesFalse, setNotesTrue, toggleNotes } from './redux/reducers/user.reducer';
import StatusBoard from './components/StatusBoard';
// import { populateGame } from './modules/gameFunctions';


function App() {

  const { game } = useAppSelector((state) => state.game)

  const dispatch = useAppDispatch()

  // escape key listener to exit notes mode
  // space key listener to enter notes mode
  
  return (

    <div className="App">
      {/* <p>{JSON.stringify(game.board.flat().map(square => square.value))}</p>
      <p>{JSON.stringify(complete)}</p> */}
      <Header />
      <Menu />
      <FullBoard currentGame={game} />
      <StatusBoard />
    </div>
  );
}

export default App;
