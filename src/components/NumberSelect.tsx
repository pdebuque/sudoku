import React, { useEffect } from 'react';

import { useAppDispatch } from '../hooks';
import { SquareInt } from '../model';
import { updateNotes } from '../redux/reducers/game.reducer';

interface Props {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  square: SquareInt;
  mousePos: { x: number, y: number }
}

const NumberSelect: React.FC<Props> = (props) => {

  const {
    menuOpen,
    setMenuOpen,
    square,
    mousePos
  } = props

  const dispatch = useAppDispatch();

  const menuStyle: React.CSSProperties = {
    visibility: menuOpen ? 'visible' : 'hidden',
    top: mousePos.y,
    left: mousePos.x
  }

  const numberStyle: React.CSSProperties = {
    color: 'rgba(61, 61, 63, 0.589)'
  }

  const noteStyle: React.CSSProperties = {
    color: 'blue'
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  // escape key handler, num keys handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setMenuOpen(false)
      }
    }

    const handleNum = (e: KeyboardEvent) => {
      // console.log('key pressed', e.code)
      switch (e.code) {
        case 'Digit1': console.log('1');
      }
    }
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleNum)

    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const addNote = (num: number) => {
    dispatch(updateNotes({ squareId: square.id, note: num }))
  }

  return (
    <div
      className='number-select'
      style={menuStyle}
    >
      {numbers.map((number, i) => {
        return (
          <button
            key={i}
            style={square.notes.includes(number) ? noteStyle : numberStyle}
            onClick={() => addNote(number)}>{number}</button>
        )
      })}
    </div>
  )
}

export default NumberSelect