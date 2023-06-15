import React, { useState, useEffect } from 'react'

// libraries

// components
import NumberSelect from './NumberSelect';
import SquareNotes from './SquareNotes';

// internal
import { SquareInt, BoardInt } from '../model'
import { useAppDispatch, useAppSelector } from '../hooks';
import { saveValue, checkSquareById, checkComplete, setFocus, toggleNotes, setNotes } from '../redux/reducers/game.reducer';
//* ============= about this component ===============
/* 
interface SquareInt {
  id: number;
  row: number;
  column: number;
  medSquare: number;
  notes: number[];
  value: number | string;
  static: boolean;
  correct: boolean;
  highlight: boolean;
  focus: boolean;
}

notesMode: boolean

local state: input value; hover

functions:
  - click to focus (turn off in notes mode)
  - submit
  - escape

style: 
  - highlight && hover => background-color: dark-blue
  - highlight & !hover => background-color: blue
  - !higlight & hover => background-color: blue
  - !highlight & !hover => background-color: white
  - correct ? color: black : red
  - static ? font-weight: 400 : 100
  - notesMode => cursor: pencil; hover: no effect
  - !notesMode => cursor: pointer; hover: background-color

*/


interface Props {
  square: SquareInt;
  currentGame: BoardInt;
}

const Square: React.FC<Props> = (props) => {

  const {
    square,
    currentGame,
  } = props

  //* ================== variables =====================
  const dispatch = useAppDispatch();
  // const { game } = useAppSelector((state) => state.game);
  const { notesMode, focus } = useAppSelector((state) => state.game);


  // const [focus, setFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<number | string>('')
  const [hover, setHover] = useState<boolean>(false)
  // const [menuOpen, setMenuOpen] = useState<boolean>(false)
  // const [mousePos, setMousePos] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

  const displayNumber = (square: SquareInt) => {
    if (square.value === 0 && square.static) return ''
    if (square.static) return <p className='static-square'>{square.value}</p>
    if (square.value === 0) return <SquareNotes notes={square.notes} />
    return <p className='dynamic-square'>{square.value}</p>
  }

  //* ===================== keyboard listeners ==============


  //* ============== functions ===================




  // escape key handler to close focus
  // useEffect(() => {
  //   const handleEscape = (e: KeyboardEvent) => {
  //     console.log('escape')
  //     if (e.code === 'Escape') {
  //       dispatch(setFocus({ squareId: 0, mousePos: { x: 0, y: 0 }, open: false }))
  //     }
  //   }
  //   document.addEventListener('keydown', handleEscape);

  //   return () => document.removeEventListener('keydown', handleEscape)
  // }, [])


  const handleClick: (e: any) => void = (e) => {
    console.log('clicked square: ', square)
    console.log('event: ', e)
    if (notesMode) {
      console.log('clicked while in notes')
      dispatch(setFocus({ squareId: square.id, value: focus.value, mousePos: { x: e.clientX, y: e.clientY }, open: true }))
    }
    else {
      console.log('clicked while not in notes')
      dispatch(setFocus({ squareId: square.id, value: focus.value, mousePos: { x: 0, y: 0 }, open: false }));
    }
  }

  const handleDisable: () => void = () => {
    // console.log('cannot click this square')
    dispatch(setFocus({ squareId: square.id, value: focus.value, mousePos: { x: 0, y: 0 }, open: false }));
  }

  const handleSubmit: (e: any) => void = (e) => {
    dispatch(setFocus({ squareId: 0, mousePos: { x: 0, y: 0 }, value: focus.value, open: false }));
    e.preventDefault();
    console.log('submit');
    if (inputValue === 0) setInputValue('');
    dispatch(saveValue({ ...square, value: inputValue }))
    dispatch(checkSquareById(square.id))
    dispatch(checkComplete())
  }



  //* ============= styles =====================

  /* 
    style: 
      - highlight && hover => background-color: dark-blue
      - highlight & !hover => background-color: blue
      - !higlight & hover => background-color: blue
      - !highlight & !hover => background-color: white
      - correct ? color: black : red
      - static ? font-weight: 400 : 100
      - notesMode => cursor: pencil; hover: no effect
      - !notesMode => cursor: pointer; hover: background-color
  
  */

  const squareStyle: React.CSSProperties = {
    color: square.correct ? 'black' : 'red',
    backgroundColor: square.focus ? 'rgb(180, 180, 255)' : square.highlight ? 'rgb(236, 236, 254)' : 'white'
  }

  const hoverBackground = (square: SquareInt) => {
    if (notesMode) {
      if (square.static) return 'white'
      return 'rgb(236, 236, 254)'
    }
    if (square.highlight) return 'rgb(195, 195, 251)'
    return 'rgb(236,236, 25)'
  }

  const hoverStyle: React.CSSProperties = {
    color: square.correct ? 'black' : 'red',
    backgroundColor: hoverBackground(square)

  }

  return (
    <div
      className='square'
      onClick={square.static ? handleDisable : handleClick}
      style={hover ? hoverStyle : squareStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* {JSON.stringify(square.focus)} */}
      {/* {JSON.stringify(hover)} */}
      {/* <p>{JSON.stringify(square.correct)}</p> */}
      {/* {JSON.stringify(square.id)} */}
      {/* {JSON.stringify(square.row)} */}
      {/* {JSON.stringify([square.row, square.column])} */}
      {
        square.focus && !square.static ?
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