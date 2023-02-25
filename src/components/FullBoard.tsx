import React from 'react'

// import { games } from '../games/easy'
import { BoardInt, MedSquareInt, SquareInt } from '../model'

// components
import MedSquare from './MedSquare'

interface Props {
  currentGame: BoardInt
}

const FullBoard: React.FC<Props> = (props) => {

  const {
    currentGame
  } = props

  return (
    <div>
      {currentGame.map(medSquare => {
        return (
          <MedSquare medSquare={medSquare} />
        )
      })
      }
    </div>
  )
}

export default FullBoard