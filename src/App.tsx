import React, { useEffect } from 'react';
import './App.css';

// libraries
import { useAppSelector, useAppDispatch } from './hooks'
import axios from 'axios'
import { Routes, Route, Navigate } from 'react-router-dom';

// components
import FullBoard from './components/FullBoard';
import Menu from './components/Menu';
import Header from './components/Header'
import Game from './pages/Game';

// internal
import StatusBoard from './components/StatusBoard';
import Footer from './components/Footer';
import { setFocus, toggleNotes, saveValueById, checkSquareById, checkComplete, updateNotes } from './redux/reducers/game.reducer'
// import { populateGame } from './modules/gameFunctions';

import { useKeyboardEvent } from './hooks/useKeyboardEvent';

function App() {

  return (
    <div className="App">
      <Header/>

      <Footer/>

    </div>
  )

}

export default App;
