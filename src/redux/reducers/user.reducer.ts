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
    changeScore(state, action: PayloadAction<number>) {
      state.score = state.score + action.payload
    },
  }
})

export const { changeScore } = userSlice.actions;

export default userSlice.reducer;