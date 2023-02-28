import React, { useEffect, useState } from 'react';

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

  const [focus, setFocus] = useState<boolean>(false)

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
      if (e.repeat) { return }
      if (e.code === 'Escape') {
        setMenuOpen(false)
      }
    }

    const handleNum = (e: KeyboardEvent) => {
      // console.log('key pressed', e.code)
      if (e.repeat) { return }
      switch (e.code) {
        case 'Digit1':
          dispatch(updateNotes({ squareId: square.id, note: 1 }));
          return;
        case 'Digit2':
          dispatch(updateNotes({ squareId: square.id, note: 2 }));
          return;
        case 'Digit3':
          dispatch(updateNotes({ squareId: square.id, note: 3 }));
          return;
        case 'Digit4':
          dispatch(updateNotes({ squareId: square.id, note: 4 }));
          return;
        case 'Digit5':
          dispatch(updateNotes({ squareId: square.id, note: 5 }));
          return;
        case 'Digit6':
          dispatch(updateNotes({ squareId: square.id, note: 6 }));
          return;
        case 'Digit7':
          dispatch(updateNotes({ squareId: square.id, note: 7 }));
          return;
        case 'Digit8':
          dispatch(updateNotes({ squareId: square.id, note: 8 }));
          return;
        case 'Digit9':
          dispatch(updateNotes({ squareId: square.id, note: 9 }));
          return;
        default: return
      }
    }
    document.addEventListener('keydown', handleEscape);
    // document.addEventListener('keydown', handleNum)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleNum)
    }
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
            onClick={() => {

              addNote(number)
            }}>{number}</button>
        )
      })}
    </div>
  )
}

export default NumberSelect