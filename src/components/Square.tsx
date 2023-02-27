import React, { useState } from 'react'

import { SquareInt, BoardInt } from '../model'

import { useAppDispatch, useAppSelector } from '../hooks';
import { saveValue, checkSquareById, checkComplete } from '../redux/reducers/game.reducer';

import { toggleEdit } from '../redux/reducers/user.reducer'

import NumberSelect from './NumberSelect';
import SquareNotes from './SquareNotes';

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
  const { game } = useAppSelector((state) => state.game);

  const { editMode } = useAppSelector((state) => state.user);

  const [focus, setFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<number | string>('')
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const handleClick: (e: any) => void = (e) => {
    // console.log('clicked square: ', square)
    if (editMode) setMenuOpen(true)
    else setFocus(true)
  }

  const handleDisable: () => void = () => {
    // console.log('cannot click this square')
  }

  const handleSubmit: (e: any) => void = (e) => {
    setFocus(false);
    e.preventDefault();
    console.log('submit');
    if (inputValue === 0) setInputValue('');
    dispatch(saveValue({ ...square, value: inputValue }))
    dispatch(checkSquareById(square.id))
    dispatch(checkComplete())
  }

  const displayNumber = (square: SquareInt) => {
    if (square.static) return <b>{square.value}</b>
    if (square.value === 0) return <SquareNotes notes={square.notes} />
    return square.value
  }

  const squareStyle: React.CSSProperties = {
    color: square.correct ? 'black' : 'red'
  }

  return (
    <div
      className='square'
      onClick={square.static ? handleDisable : handleClick}
      style={squareStyle}
    >
      {/* <p>{JSON.stringify(square.correct)}</p> */}
      {/* {JSON.stringify(square.id)} */}
      {/* {JSON.stringify(square.row)} */}
      {/* {JSON.stringify([square.row, square.column])} */}
      {
        focus ?
          <form onSubmit={handleSubmit}>
            <input
              style={squareStyle}
              className='square-input'
              type='number'
              value={inputValue}
              onChange={(e) => setInputValue(Number(e.target.value))}
            />
          </form>
          :
          displayNumber(square)
      }
      <NumberSelect menuOpen = {menuOpen} setMenuOpen={setMenuOpen} notes = {square.notes}/>
    </div>
  )
}

export default Square