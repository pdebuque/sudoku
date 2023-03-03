import React, { useState, useEffect } from 'react'

// libraries

// components
import NumberSelect from './NumberSelect';
import SquareNotes from './SquareNotes';

// internal
import { SquareInt, BoardInt } from '../model'
import { useAppDispatch, useAppSelector } from '../hooks';
import { saveValue, checkSquareById, checkComplete, setFocus } from '../redux/reducers/game.reducer';

import { toggleNotes } from '../redux/reducers/user.reducer'


interface Props {
  square: SquareInt;
  currentGame: BoardInt;
}

const Square: React.FC<Props> = (props) => {

  const {
    square,
    currentGame,
  } = props


  const dispatch = useAppDispatch();
  const { game } = useAppSelector((state) => state.game);
  const { notesMode, focusSquare } = useAppSelector((state) => state.user);


  // const [focus, setFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<number | string>('')
  // const [menuOpen, setMenuOpen] = useState<boolean>(false)
  // const [mousePos, setMousePos] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

  const displayNumber = (square: SquareInt) => {
    if (square.value === 0 && square.static) return ''
    if (square.static) return <p className='static-square'>{square.value}</p>
    if (square.value === 0) return <SquareNotes notes={square.notes} />
    return <p className='dynamic-square'>{square.value}</p>
  }

  //* ============== functions ===================

  // escape key handler to close focus
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        dispatch(setFocus({ squareId: 0, mousePos: { x: 0, y: 0 }, open: false }))
      }
    }
    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape)
  }, [])


  const handleClick: (e: any) => void = (e) => {
    console.log('clicked square: ', square)
    console.log('event: ', e)
    if (notesMode) {

      // setMousePos({ x: e.clientX, y: e.clientY })
      // setMenuOpen(true);

      dispatch(setFocus({ squareId: square.id, mousePos: { x: e.clientX, y: e.clientY }, open: true }))
    }
    else {
      dispatch(setFocus({ squareId: square.id, mousePos: { x: 0, y: 0 }, open: false }));
    }
  }

  const handleDisable: () => void = () => {
    // console.log('cannot click this square')
  }

  const handleSubmit: (e: any) => void = (e) => {
    dispatch(setFocus({ squareId: 0, mousePos: { x: 0, y: 0 }, open: false }));
    e.preventDefault();
    console.log('submit');
    if (inputValue === 0) setInputValue('');
    dispatch(saveValue({ ...square, value: inputValue }))
    dispatch(checkSquareById(square.id))
    dispatch(checkComplete())
  }


  //* ============= styles =====================

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
        square.focus ?
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
      {/* <NumberSelect
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        square={square}
        mousePos={mousePos}
      /> */}
    </div>
  )
}

export default Square