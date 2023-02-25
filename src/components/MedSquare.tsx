import React from 'react'

import { SquareInt, MedSquareInt } from '../model'

interface Props {
  medSquare: MedSquareInt;
}

const MedSquare: React.FC<Props> = (props) => {

const {
  medSquare, 
  square
} = props

  return (
    <div className = 'medSquare'>
    MedSquare: React.FC</div>
  )
}

export default MedSquare