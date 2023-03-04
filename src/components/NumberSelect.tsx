import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks';
import { SquareInt } from '../model';
import { updateNotes } from '../redux/reducers/game.reducer';

import { setFocusSquare } from '../redux/reducers/user.reducer';

// interface Props {
//   open: boolean;
//   squareId: number;
//   mousePos: { x: number, y: number }
// }

const NumberSelect: React.FC = () => {

  const { focus } = useAppSelector(state => state.game)
  const {
    open,
    squareId,
    mousePos
  } = focus

  const dispatch = useAppDispatch();

  const thisSquare: SquareInt = useAppSelector(state => state.game.game.board.flat().filter(el => el.id === squareId)[0]);

  // const [focus, setFocus] = useState<boolean>(false)

  const menuStyle: React.CSSProperties = {
    visibility: open ? 'visible' : 'hidden',
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
        dispatch(setFocusSquare({ squareId: squareId, mousePos: mousePos, open: false }))
      }
    }

    const handleNum = (e: KeyboardEvent) => {
      // console.log('key pressed', e.code)
      if (e.repeat) { return }
      switch (e.code) {
        case 'Digit1':
          dispatch(updateNotes({ squareId: squareId, note: 1 }));
          return;
        case 'Digit2':
          dispatch(updateNotes({ squareId: squareId, note: 2 }));
          return;
        case 'Digit3':
          dispatch(updateNotes({ squareId: squareId, note: 3 }));
          return;
        case 'Digit4':
          dispatch(updateNotes({ squareId: squareId, note: 4 }));
          return;
        case 'Digit5':
          dispatch(updateNotes({ squareId: squareId, note: 5 }));
          return;
        case 'Digit6':
          dispatch(updateNotes({ squareId: squareId, note: 6 }));
          return;
        case 'Digit7':
          dispatch(updateNotes({ squareId: squareId, note: 7 }));
          return;
        case 'Digit8':
          dispatch(updateNotes({ squareId: squareId, note: 8 }));
          return;
        case 'Digit9':
          dispatch(updateNotes({ squareId: squareId, note: 9 }));
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
    dispatch(updateNotes({ squareId: squareId, note: num }))
  }

  return (
    <div
      className='number-select'
      style={menuStyle}
    >
      {/* {JSON.stringify(thisSquare)} */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number, i) => {
        return (
          <button
            key={i}
            style={thisSquare?.notes.includes(number) ? noteStyle : numberStyle}
            onClick={() => {

              addNote(number)
            }}>{number}</button>
        )
      })}
    </div>
  )
}

export default NumberSelect