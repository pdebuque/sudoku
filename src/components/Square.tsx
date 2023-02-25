import React, { useState } from 'react'

import { SquareInt } from '../model'

interface Props {
  square: SquareInt;
}

const Square: React.FC<Props> = (props) => {

  const {
    square
  } = props

  const [focus, setFocus] = useState<boolean>(false)

  const handleClick: (e: any) => void = (e) => {
    console.log('clicked square: ', square)
    setFocus(true)
  }

  return (
    <div
      className='square'
      onClick={handleClick}
    >{
        focus ?
          <input
            className='square-input'
            type='number'
            />
          :
          square.value
      }
    </div>
  )
}

export default Square