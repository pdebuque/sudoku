import React, { useEffect } from 'react'

// import { games } from '../games/easy'
import { BoardInt, MedSquareInt, SquareInt, Focus } from '../model'

// components
import MedSquare from './MedSquare';
import NumberSelect from './NumberSelect'

// internal
import { useAppSelector, useAppDispatch } from '../hooks';
import { setFocus, saveValueById, setNotes } from '../redux/reducers/game.reducer';

const FullBoard: React.FC = () => {

  const dispatch = useAppDispatch();

  const { focus, game, notesMode } = useAppSelector(state => state.game)

  // useEffect(() => {
  //   document.addEventListener('keydown', handleKeyDown);
  //   document.addEventListener('keyup', handleKeyUp)

  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown)
  //   }

  // }, [])


  //* ================= functions ================
  // const handleKeyDown = (e: KeyboardEvent) => {
  //   if (e.repeat) return
  //   console.log('key pressed', e.code);
  //   // console.log('focus id', focus.squareId)

  //   switch (e.code) {
  //     case 'ShiftLeft' || 'ShiftRight':
  //       dispatch(setNotes(true))
  //       return;
  //     case 'Escape':
  //       dispatch(setFocus({ squareId: 0, mousePos: { x: 0, y: 0 }, value: focus.value, open: false }));
  //       return;
  //     case 'ArrowRight':
  //       dispatch(setFocus({ ...focus, squareId: (focus.squareId + 1) % 81 }))
  //       return;
  //     case 'ArrowLeft':
  //       dispatch(setFocus({ ...focus, squareId: (focus.squareId - 1) % 81 }))
  //       return;
  //     case 'ArrowDown':
  //       dispatch(setFocus({ ...focus, squareId: (focus.squareId + 9) % 81 }))
  //       return
  //     case 'ArrowUp':
  //       dispatch(setFocus({ ...focus, squareId: (focus.squareId - 9) % 81 }))
  //       return
  //     case 'Digit1':
  //       dispatch(saveValueById({
  //         squareId: focus.squareId,
  //         value: 1
  //       }));
  //       return;
  //     case 'Digit2':
  //       dispatch(saveValueById({
  //         squareId: focus.squareId,
  //         value: 2
  //       }));
  //       return;
  //     case 'Digit3':
  //       dispatch(saveValueById({
  //         squareId: focus.squareId,
  //         value: 3
  //       }));
  //       return;
  //     case 'Digit4':
  //       dispatch(saveValueById({
  //         squareId: focus.squareId,
  //         value: 4
  //       }));
  //       return;
  //     case 'Digit5':
  //       dispatch(saveValueById({
  //         squareId: focus.squareId,
  //         value: 5
  //       }));
  //       return;
  //     case 'Digit6':
  //       dispatch(saveValueById({
  //         squareId: focus.squareId,
  //         value: 6
  //       }));
  //       return;
  //     case 'Digit7':
  //       dispatch(saveValueById({
  //         squareId: focus.squareId,
  //         value: 7
  //       }));
  //       return;
  //     case 'Digit8':
  //       dispatch(saveValueById({
  //         squareId: focus.squareId,
  //         value: 8
  //       }));
  //       return;
  //     case 'Digit9':
  //       dispatch(saveValueById({
  //         squareId: focus.squareId,
  //         value: 9
  //       }));
  //       return;
  //     default: return
  //   }
  // }

  // const handleKeyUp = (e: KeyboardEvent) => {
  //   if (e.repeat) return;
  //   if (e.code === 'ShiftLeft' || 'ShiftRight') dispatch(setNotes(false))
  // }

  //* ================= style =================
  const cursorStyle = notesMode ? { cursor: 'url(pencil16.png) 0 100, move' } : { cursor: 'pointer' }

  return (
    <div
      className='board'
      style={cursorStyle}
    >
      {/* {JSON.stringify(focus)}  */}
      {game.board.map((medSquare, index) => {
        return (
          <MedSquare currentGame={game} medSquare={medSquare} key={index} />
        )
      })
      }
      <NumberSelect />
    </div>
  )
}

export default FullBoard