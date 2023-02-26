import React, { useState } from 'react'

import { SquareInt, BoardInt } from '../model'

import { useAppDispatch, useAppSelector } from '../hooks';
import {saveValue} from '../redux/reducers/game.reducer'

interface Props {
  square: SquareInt;
  currentGame: BoardInt;
  // setCurrentGame: React.Dispatch<any>;
}

const Square: React.FC<Props> = (props) => {

  const {
    square,
    currentGame,
    // setCurrentGame
  } = props

  const dispatch = useAppDispatch();
  const { game } = useAppSelector((state) => state.game)

  const [focus, setFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<number | string>('')

  const handleClick: (e: any) => void = (e) => {
    // console.log('clicked square: ', square)
    setFocus(true)
  }

  const handleDisable: () => void = () => {
    // console.log('cannot click this square')
  }

  const handleSubmit: (e: any) => void = (e) => {
    setFocus(false);
    e.preventDefault();
    console.log('submit');
    if (inputValue === 0) setInputValue('');
    dispatch(saveValue({...square, value: inputValue}))
  }

  const displayNumber = (square: SquareInt) => {
    if (square.static) return <b>{square.value}</b>
    if (square.value==='.' || square.value===0) return ''
    return square.value
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
          displayNumber(square)
      }
    </div>
  )
}

export default Square