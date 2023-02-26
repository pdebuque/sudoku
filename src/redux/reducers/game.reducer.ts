import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { blankGame, BoardInt, SquareInt } from '../../model';
import type { Game } from '../../model';

// import {populateGame} from '../../modules/gameFunctions'

type InitialState = {
  game: BoardInt
}

const initialState: InitialState = {
  game: blankGame
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // to set the game, expect a game object
    setGame(state, action: PayloadAction<Game>) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          state.game.board[i].squares[j].value = action.payload[i][j];
          if (action.payload[i][j] !== 0) state.game.board[i].squares[j].static = true
          else state.game.board[i].squares[j].static = false
        }
      }
    },
    // to change the value of a square, expect a square object {}
    saveValue(state, action: PayloadAction<SquareInt>) {
      const { row, column, medSquare, value } = action.payload
      for (let square of state.game.board[medSquare-1].squares) {
        if (square.row === row && square.column === column) square.value = value
      }
    }
  }
})

export const { saveValue, setGame } = gameSlice.actions;

export default gameSlice.reducer;