import React, { useState } from 'react'

import { SquareInt, BoardInt } from '../model'

interface Props {
  square: SquareInt;
  currentGame: BoardInt;
  setCurrentGame: React.Dispatch<any>;
}

const Square: React.FC<Props> = (props) => {

  const {
    square,
    currentGame,
    setCurrentGame
  } = props

  const [focus, setFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<number | string>('')

  const handleClick: (e: any) => void = (e) => {
    console.log('clicked square: ', square)
    setFocus(true)
  }

  const handleDisable: () => void = () => {
    console.log('cannot click this square')
  }

  const handleSubmit: (e: any) => void = (e) => {
    e.preventDefault();
    console.log('submit');
    setFocus(false);
  }



  return (
    <div
      className='square'
      onClick={square.static ? handleDisable : handleClick}
    >
      {
        focus ?
          <form onSubmit={handleSubmit}>
            <input
              className='square-input'
              type='number'
              value={inputValue}
              onChange={(e) => setInputValue(Number(e.target.value))}
            />
          </form>
          :
          square.static ? <b>{square.value}</b> : ''
      }
    </div>
  )
}

export default Square