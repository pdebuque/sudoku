import React from 'react'

// import { games } from '../games/easy'
import { BoardInt, MedSquareInt, SquareInt } from '../model'

// components
import MedSquare from './MedSquare'

interface Props {
  currentGame: BoardInt;
  // setCurrentGame: React.Dispatch<any>;
}

const FullBoard: React.FC<Props> = (props) => {

  const {
    currentGame,
    // setCurrentGame
  } = props

  return (
    <div className = 'board'>
      {currentGame.map((medSquare, index) => {
        return (
          <MedSquare currentGame={currentGame} medSquare={medSquare} key = {index} />
        )
      })
      }
    </div>
  )
}

export default FullBoard