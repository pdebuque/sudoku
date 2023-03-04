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
import StatusBoard from './components/StatusBoard';
import Footer from './components/Footer'
// import { populateGame } from './modules/gameFunctions';


function App() {

  const { game, focus } = useAppSelector((state) => state.game)

  const dispatch = useAppDispatch()

  // escape key listener to exit notes mode
  // space key listener to enter notes mode

  return (

    <div className="App">
      {/* <p>{JSON.stringify(game.board.flat().map(square => square.value))}</p>
      <p>{JSON.stringify(complete)}</p> */}
      {/* {JSON.stringify(focus)} */}
      <Header />
      <main>
        <Menu />
        <FullBoard />
        <StatusBoard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
