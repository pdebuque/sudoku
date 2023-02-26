import React, { useEffect } from 'react';
import './App.css';

// libraries
import { useAppSelector, useAppDispatch } from './hooks'
import { setGame } from './redux/reducers/game.reducer';
import axios from 'axios'

// components
import FullBoard from './components/FullBoard';
import Menu from './components/Menu';

// internal
import { BoardInt, blankGame } from './model'
import type {Game} from './model'
import { games } from './games/easy';
// import { populateGame } from './modules/gameFunctions';


function App() {

  const { game } = useAppSelector((state) => state.game)

  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(setGame(games[0]))
  }

  const handleRandom = () => {
    axios.get('https://sudoku-api.vercel.app/api/dosuku')
      .then(response=>{
        const puzzle:Game = {
          difficulty: response.data.newboard.grids[0].difficulty,
          board: response.data.newboard.grids[0].value
        };
        console.log('got puzzle', response.data)
        dispatch(setGame(puzzle))
      }
      )
      .catch(err=>console.log('could not get puzzle', err))
  }

  return (

    <div className="App">
      {/* {JSON.stringify(game)} */}
      <header className="App-header">
      </header>
      <Menu />
      <button onClick={handleClick}>set game</button>
      <button onClick={handleRandom}>generate random</button>
      <p>{game.difficulty}</p>
      <FullBoard currentGame={game} />
    </div>
  );
}

export default App;
