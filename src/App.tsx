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
import { setNotesFalse, setNotesTrue } from './redux/reducers/user.reducer';
import StatusBoard from './components/StatusBoard';
// import { populateGame } from './modules/gameFunctions';


function App() {

  const { game, complete } = useAppSelector((state) => state.game)

  const dispatch = useAppDispatch()

  // escape key listener to exit notes mode
  // space key listener to enter notes mode
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        dispatch(setNotesFalse())
      }
    }
    const handleSpace = (e:KeyboardEvent) =>{
      if (e.code ==='Space') {
        dispatch(setNotesTrue())
      }
    }

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleSpace)

    return () => document.removeEventListener('keydown', handleEscape)
  })

  const handleClick = () => {
    dispatch(setGame(games[1]))
  }

  const handleRandom = () => {
    axios.get('https://sudoku-api.vercel.app/api/dosuku')
      .then(response => {
        const puzzle: Game = {
          difficulty: response.data.newboard.grids[0].difficulty,
          board: response.data.newboard.grids[0].value
        };
        console.log('got puzzle', response.data)
        dispatch(setGame(puzzle))
      }
      )
      .catch(err => console.log('could not get puzzle', err))
  }



  return (

    <div className="App">
      {/* <p>{JSON.stringify(game.board.flat().map(square => square.value))}</p>
      <p>{JSON.stringify(complete)}</p> */}
      <Header />
      <Menu />
      <button onClick={handleClick}>set game</button>
      <button onClick={handleRandom}>generate random</button>
      {complete && <div>puzzle complete!</div>}
      <p>{game.difficulty}</p>
      <FullBoard currentGame={game} />
      <StatusBoard />
    </div>
  );
}

export default App;
