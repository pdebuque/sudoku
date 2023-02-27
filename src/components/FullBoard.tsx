import React from 'react'

// import { games } from '../games/easy'
import { BoardInt, MedSquareInt, SquareInt } from '../model'

// components
import MedSquare from './MedSquare'

// internal
import { useAppSelector } from '../hooks';

import pencilCursor from '../pencil32.png'

interface Props {
  currentGame: BoardInt;
  // setCurrentGame: React.Dispatch<any>;
}

const FullBoard: React.FC<Props> = (props) => {

  const { notesMode } = useAppSelector(state => state.user)

  const {
    currentGame,
    // setCurrentGame
  } = props

  const cursorStyle = notesMode ? { cursor: 'url(pencil16.png) 0 100, move' } : { cursor: 'default' }

  return (
    <div
      className='board'
      style={cursorStyle}
    >
      {currentGame.board.map((medSquare, index) => {
        return (
          <MedSquare currentGame={currentGame} medSquare={medSquare} key={index} />
        )
      })
      }
    </div>
  )
}

export default FullBoard