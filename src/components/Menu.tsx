import React, { useEffect, useState } from 'react'

// libraries
import axios from 'axios';
import { DateTime } from 'luxon';

// internal
import { useAppDispatch, useAppSelector } from '../hooks'
import { setFocus, toggleNotes, setNotes } from '../redux/reducers/game.reducer'
import type { Game } from '../model'

import { setGame } from '../redux/reducers/game.reducer';

const Menu: React.FC = () => {

  const dispatch = useAppDispatch()
  const { game, complete, focus } = useAppSelector(state => state.game)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.repeat) { return }
      if (e.code === 'Escape') {
        console.log('escape')
        dispatch(setNotes(false))
      }
    }
    const handleSpace = (e: KeyboardEvent) => {
      if (e.repeat) { return }
      if (e.code === 'Space') {
        console.log('space')
        dispatch(toggleNotes())
        dispatch(setFocus({ squareId: 0, mousePos: { x: 0, y: 0 }, value: focus.value, open: false }))
      }
    }

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleSpace)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleSpace)
    }
  }, [])

  const timeZero = DateTime

  const [time, setTime] = useState<DateTime>(DateTime.now());
  const [timerOn, setTimerOn] = useState<boolean>(false);

  const handlePencil = () => {
    dispatch(toggleNotes())
  }

  const handleRandom = () => {
    axios.get('https://sudoku-api.vercel.app/api/dosuku')
      .then(response => {
        const puzzle: Game = {
          difficulty: response.data.newboard.grids[0].difficulty,
          board: response.data.newboard.grids[0].value
        };
        console.log('got puzzle', response.data)
        dispatch(setGame(puzzle));
        setTimerOn(true)
      }
      )
      .catch(err => console.log('could not get puzzle', err))
  }

  // if (!complete && timerOn) {
  //   const incrementTime = () =>{
  //     console.log('time +1')
  //     setTime(time+1)
  //   }
  //   setTimeout(incrementTime, 1000)
  // }

  const formatTime = (time: number) => {
    const seconds = time % 60;
    const minutes = time % 3600;
    const hours = (time - seconds - (minutes * 60)) / 3600

    const addZeroes = (str: number) => {
      return String(str).length < 2 ? '0' + String(str) : String(str)
    }
    return `${addZeroes(hours)}:${addZeroes(minutes)}:${addZeroes(seconds)}`
  }

  return (
    <div>
      <nav>
        <div className='nav-buttons'>
          <button onClick={handlePencil}>enter notes</button>
          <button onClick={handleRandom}>new puzzle</button></div>
        {/* <p>time: {formatTime(time)}</p> */}
        <p>time: {JSON.stringify('asdf')}</p>
        <p>Game difficulty: {game.difficulty}</p>
      </nav>
      {complete && <div>puzzle complete!</div>}
    </div>
  )
}

export default Menu