import {createSlice} from '@reduxjs/toolkit';
import { blankGame } from '../../model';

const initialState = {
  game: blankGame
}

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    // to change the value of a square, expect value 
    saveValue(state, action) {

    }
  }
})