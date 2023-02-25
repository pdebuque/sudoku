import React from 'react'

import { SquareInt, MedSquareInt } from '../model';

import Square from './Square'

interface Props {
  medSquare: MedSquareInt;
}

const MedSquare: React.FC<Props> = (props) => {

const {
  medSquare,
} = props

  return (
    <div className = 'medSquare'>
      {medSquare.squares.map(square=>{
        return(
          <Square square={square}/>
        )
      })}
    </div>
  )
}

export default MedSquare