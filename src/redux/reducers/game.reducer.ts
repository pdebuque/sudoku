import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
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
      state.game.difficulty = action.payload.difficulty
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          state.game.board[i][j].value = action.payload.board[i][j];
          state.game.board[i][j].static = action.payload.board[i][j] === 0 ? false : true
        }
      }
    },
    // to change the value of a square, expect a square object {}
    saveValue(state, action: PayloadAction<SquareInt>) {
      const { id, value } = action.payload
      for (let row of state.game.board) {
        for (let square of row) {
          if (square.id === id) square.value = value
        }
      }
    },
    // receive id number of square to check, update square.correct accordingly
    checkSquareById(state, action: PayloadAction<number>) {
      const id = action.payload
      console.log('checking correct of id: ', id)
      // console.log('game:', current(state.game.board))
      const flatBoard = state.game.board.flat()
      // [
      //   ...state.game.board[0],
      //   ...state.game.board[1],
      //   ...state.game.board[2],
      //   ...state.game.board[3],
      //   ...state.game.board[4],
      //   ...state.game.board[5],
      //   ...state.game.board[6],
      //   ...state.game.board[7],
      //   ...state.game.board[8],
      // ]
      console.log('flat board:', current(state.game.board).flat())
      const square = flatBoard.filter(unit => unit.id === id)[0];
      const rowValues = flatBoard.filter(unit => unit.row === square.row).map(unit => unit.value)
      const columnValues = flatBoard.filter(unit => unit.column === square.column).map(unit => unit.value);
      const blockValues = flatBoard.filter(unit => unit.medSquare === square.medSquare).map(unit => unit.value);
      const checkValues = [...rowValues, ...blockValues, ...columnValues];
      if (checkValues.includes(square.value)) square.correct = false;
      else square.correct = true;
      console.log('checked correct: ', square.correct)
    }
  }
})

export const { saveValue, setGame, checkSquareById } = gameSlice.actions;

export default gameSlice.reducer;