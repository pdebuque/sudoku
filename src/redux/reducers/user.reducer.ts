import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

// import {populateGame} from '../../modules/gameFunctions'

import { SquareInt, blankSquare } from '../../model';

type InitialState = {
  score: number,
};

const initialState: InitialState = {
  score: 0,
};

const userSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    incrementScore(state) {
      state.score = state.score + 1
    },
  }
})

export const { incrementScore,} = userSlice.actions;

export default userSlice.reducer;