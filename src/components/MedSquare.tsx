import React from 'react'

import { SquareInt, MedSquareInt, BoardInt } from '../model';

import Square from './Square'

interface Props {
  medSquare: MedSquareInt;
  currentGame: BoardInt;
  // setCurrentGame: React.Dispatch<any>;
}

const MedSquare: React.FC<Props> = (props) => {

const {
  medSquare,
  currentGame,
  // setCurrentGame
} = props

  return (
    <div className = 'medSquare'>
      {medSquare.squares.map((square,index)=>{
        return(
          <Square square={square} currentGame = {currentGame} key = {index}/>
        )
      })}
    </div>
  )
}

export default MedSquare