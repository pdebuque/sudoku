import React from 'react'

import {SquareInt} from '../model'

interface Props {
  square: SquareInt;
}

const Square: React.FC<Props> = (props) => {

const {
  square
} = props

  return (
    <div className = 'square'>square.value</div>
  )
}

export default Square