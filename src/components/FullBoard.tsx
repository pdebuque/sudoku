import React, { useEffect } from 'react'

// import { games } from '../games/easy'
import { BoardInt, MedSquareInt, SquareInt } from '../model'

// components
import MedSquare from './MedSquare';
import NumberSelect from './NumberSelect'

// internal
import { useAppSelector, useAppDispatch } from '../hooks';
import { setFocus } from '../redux/reducers/game.reducer';

interface Props {
  // currentGame: BoardInt;
  // setCurrentGame: React.Dispatch<any>;
}

const FullBoard: React.FC<Props> = () => {

  const dispatch = useAppDispatch();

  const { focus, game, notesMode } = useAppSelector(state => state.game)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        console.log('escape')
        dispatch(setFocus({ squareId: 0, mousePos: { x: 0, y: 0 }, open: false }))
      }
    }
    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape)

  }, [])

  //* ================= style =================
  const cursorStyle = notesMode ? { cursor: 'url(pencil16.png) 0 100, move' } : { cursor: 'pointer' }

  return (
    <div
      className='board'
      style={cursorStyle}
    >
      {/* {JSON.stringify(focus.open)}  */}
      {game.board.map((medSquare, index) => {
        return (
          <MedSquare currentGame={game} medSquare={medSquare} key={index} />
        )
      })
      }
      <NumberSelect />
    </div>
  )
}

export default FullBoard