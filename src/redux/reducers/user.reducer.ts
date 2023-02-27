import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

// import {populateGame} from '../../modules/gameFunctions'

type InitialState = {
  notesMode: boolean,
  score: number,
}

const initialState: InitialState = {
  notesMode: false,
  score: 0
}


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
    }
  }
})

export const { incrementScore, toggleNotes, setNotesFalse } = userSlice.actions;

export default userSlice.reducer;