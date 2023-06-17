import React, { useEffect } from 'react';
import './App.css';

// libraries
import { useAppSelector, useAppDispatch } from './hooks'
import axios from 'axios'

// components
import FullBoard from './components/FullBoard';
import Menu from './components/Menu';
import Header from './components/Header'

// internal
import StatusBoard from './components/StatusBoard';
import Footer from './components/Footer';
import { setFocus, toggleNotes, saveValueById, checkSquareById, checkComplete, updateNotes } from './redux/reducers/game.reducer'
// import { populateGame } from './modules/gameFunctions';

import { useKeyboardEvent } from './hooks/useKeyboardEvent';

function App() {

  const { game, focus, notesMode } = useAppSelector((state) => state.game)

  const dispatch = useAppDispatch()


  //* =========== KEYBOARD LISTENERS =========== *//

  const handleKeyDown = (e: KeyboardEvent) => {
    console.log('key pressed', e.code)
    /*
    esc: release focus
    shift: toggle notes
    backspace: delete number
    1-9: enter number
    arrows: navigate puzzle
    */

    switch (e.code) {
      case 'Escape': dispatch(setFocus({ squareId: 0, mousePos: { x: 0, y: 0 }, value: focus.value, open: false }));
        break;
      case 'ShiftLeft' || 'ShiftRight': dispatch(toggleNotes());
        break;
      case 'Backspace': {
        // update value to 0
        dispatch(saveValueById({ squareId: focus.squareId, value: 0 }));
        //! release focus? 
        // dispatch(setFocus({ squareId: 0, mousePos: { x: 0, y: 0 }, value: focus.value, open: false }));
      }
        break;
      case 'Digit1': enterDigit(1);
        break;
      case 'Digit2': enterDigit(2);
        break;
      case 'Digit3': enterDigit(3);
        break;
      case 'Digit4': enterDigit(4);
        break;
      case 'Digit5': enterDigit(5);
        break;
      case 'Digit6': enterDigit(6);
        break;
      case 'Digit7': enterDigit(7);
        break;
      case 'Digit8': enterDigit(8);
        break;
      case 'Digit9': enterDigit(9);
        break;
      case 'ArrowRight': {
        if (!(focus.squareId % 9)) {
          // if on right edge, move to beginning of current row

          dispatch(setFocus({ ...focus, squareId: focus.squareId - 8 }));
        } else {
          // otherwise, move to next square
          dispatch(setFocus({ ...focus, squareId: focus.squareId + 1 }));
        }
      }
        break;
      case 'ArrowLeft': {
        if (!((focus.squareId - 1) % 9)) {
          // if on left edge, move to end of current row
          dispatch(setFocus({ ...focus, squareId: focus.squareId + 8 }));
        }
        else {
          dispatch(setFocus({ ...focus, squareId: (focus.squareId - 1) % 81 }));
        }
      }
        break;
      case 'ArrowUp': {
        if (focus.squareId < 10) {
          // if on top edge, move to bottom of current column
          dispatch(setFocus({ ...focus, squareId: focus.squareId + 72 }));
        }
        else {
          dispatch(setFocus({ ...focus, squareId: (focus.squareId - 9) % 81 }));
        }
      }
        break;
      case 'ArrowDown': {
        dispatch(setFocus({ ...focus, squareId: (focus.squareId + 9) % 81 }));
      }
        break;
      default: return

    }
  }

  // generalized function to handle entering a digit
  const enterDigit = (digit: number) => {
    if (notesMode) {
      dispatch(updateNotes({ squareId: focus.squareId, note: digit }))
    }
    else {
      dispatch(saveValueById({ squareId: focus.squareId, value: digit }));
      dispatch(checkSquareById(focus.squareId));
      dispatch(checkComplete());
    }
  }
  //* ------------- initialize listeners ------------- *//

  useKeyboardEvent('keydown', handleKeyDown)

  // escape key listener to exit notes mode
  // space key listener to enter notes mode

  return (

    <div className="App">
      {/* <p>{JSON.stringify(game.board.flat().map(square => square.value))}</p>
      <p>{JSON.stringify(complete)}</p> */}
      {/* focus: {JSON.stringify(focus)} */}
      <Header />
      <main>
        <Menu />
        <FullBoard />
        <StatusBoard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
