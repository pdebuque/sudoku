import React, { useEffect } from 'react'

// libraries
import axios from 'axios'

// internal
import { useAppDispatch, useAppSelector } from '../hooks'
import { toggleNotes, setNotesFalse } from '../redux/reducers/user.reducer'
import { setFocus } from '../redux/reducers/game.reducer'
import type { Game } from '../model'

import { setGame } from '../redux/reducers/game.reducer';

const Menu: React.FC = () => {

  const dispatch = useAppDispatch()
  const { notesMode } = useAppSelector((state) => state.user)
  const { game, complete } = useAppSelector(state => state.game)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.repeat) { return }
      if (e.code === 'Escape') {
        console.log('escape')
        dispatch(setNotesFalse())
      }
    }
    const handleSpace = (e: KeyboardEvent) => {
      if (e.repeat) { return }
      if (e.code === 'Space') {
        console.log('space')
        dispatch(toggleNotes())
        dispatch(setFocus({ squareId: 0, mousePos: { x: 0, y: 0 }, open: false }))
      }
    }

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleSpace)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleSpace)
    }
  }, [])


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
        dispatch(setGame(puzzle))
      }
      )
      .catch(err => console.log('could not get puzzle', err))
  }


  return (
    <nav>
      <div className='nav-buttons'>
        <button onClick={handlePencil}>enter notes</button>
        <button onClick={handleRandom}>new puzzle</button></div>
      {complete && <div>puzzle complete!</div>}
      <p>Game difficulty: {game.difficulty}</p>
    </nav>
  )
}

export default Menu