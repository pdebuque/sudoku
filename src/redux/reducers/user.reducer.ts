import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

// import {populateGame} from '../../modules/gameFunctions'

type InitialState = {
  editMode: boolean,
  score: number,
}

const initialState: InitialState = {
  editMode: false,
  score: 0
}


const userSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    incrementScore(state) {
      state.score = state.score + 1
    },
    toggleEdit(state) {
      state.editMode = !state.editMode
    }
  }
})

export const { incrementScore, toggleEdit } = userSlice.actions;

export default userSlice.reducer;