import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

// import {populateGame} from '../../modules/gameFunctions'

import { SquareInt, blankSquare } from '../../model';

interface Focus {
  squareId: number;
  mousePos: {x: number, y: number};
  open: boolean
}

type InitialState = {
  notesMode: boolean,
  score: number,
  focusSquare: Focus
};

const initialState: InitialState = {
  notesMode: false,
  score: 0,
  focusSquare: {squareId: 0, mousePos: {x: 0, y: 0}, open: false}
};

const userSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    incrementScore(state) {
      state.score = state.score + 1
    },
    toggleNotes(state) {
      state.notesMode = !state.notesMode
    },
    setNotesFalse(state) {
      state.notesMode = false
    },
    setNotesTrue(state) {
      state.notesMode = true
    },
    setFocusSquare(state,action: PayloadAction<Focus>){
      state.focusSquare = action.payload
    }
  }
})

export const { incrementScore, toggleNotes, setNotesFalse, setNotesTrue, setFocusSquare } = userSlice.actions;

export default userSlice.reducer;