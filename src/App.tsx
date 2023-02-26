import React, { useEffect } from 'react';
import './App.css';

// libraries
import { useAppSelector, useAppDispatch } from './hooks'
import { setGame } from './redux/reducers/game.reducer';

// components
import FullBoard from './components/FullBoard';
import Menu from './components/Menu';

// internal
import { BoardInt, blankGame } from './model'
import { games } from './games/easy';
// import { populateGame } from './modules/gameFunctions';


function App() {



  const { game } = useAppSelector((state) => state.game)

  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(setGame(games[0]))
  }

  return (

    <div className="App">
      {/* {JSON.stringify(game)} */}
      <header className="App-header">
      </header>
      <Menu />
      <button onClick = {handleClick}>set game</button>
      <FullBoard currentGame={game}/>
    </div>
  );
}

export default App;
