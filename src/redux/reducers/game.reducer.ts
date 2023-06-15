import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { blankGame, BoardInt, SquareInt, blankSquare } from '../../model';
import type { Game } from '../../model';


// import {populateGame} from '../../modules/gameFunctions'

interface Focus {
  squareId: number;
  value: number;
  mousePos: { x: number, y: number };
  open: boolean;
}

type InitialState = {
  game: BoardInt,
  focus: Focus,
  complete: boolean,
  notesMode: boolean,
}

const initialState: InitialState = {
  game: blankGame,
  focus: { squareId: 0, mousePos: { x: 0, y: 0 }, value: 0, open: false },
  complete: false,
  notesMode: false,
}

const reformatGame: (game: Game) => Game = (game) => {
  const { board, difficulty } = game
  const newBoard = [];
  for (let i = 0; i < 7; i += 3) {
    for (let j = 0; j < 7; j += 3) {
      newBoard.push([board[i][j], board[i][j + 1], board[i][j + 2], board[i + 1][j], board[i + 1][j + 1], board[i + 1][j + 2], board[i + 2][j], board[i + 2][j + 1], board[i + 2][j + 2]])
    }
  }
  const output: Game = {
    difficulty: difficulty,
    board: newBoard
  }
  return output
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGame(state, action: PayloadAction<Game>) {
      const flatBoard = state.game.board.flat();
      for (let square of flatBoard) {
        square.highlight = false;
        square.focus = false;
      }
      state.complete = false;

      const adjGame = reformatGame(action.payload)
      console.log('adjGame: ', adjGame)

      state.game.difficulty = adjGame.difficulty
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          state.game.board[i][j].value = adjGame.board[i][j];
          state.game.board[i][j].notes = [];
          state.game.board[i][j].static = adjGame.board[i][j] === 0 ? false : true
          state.game.board[i][j].correct = true
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

    saveValueById(state, action: PayloadAction<{ squareId: number, value: number }>) {
      const squareToChange = state.game.board.flat().filter(square => square.id === action.payload.squareId)[0];
      squareToChange.value = action.payload.value;

    },
    // receive id number of square to check, update square.correct accordingly
    checkSquareById(state, action: PayloadAction<number>) {
      const id = action.payload;
      // console.log('checking correct of id: ', id)
      // console.log('game:', current(state.game.board))
      const flatBoard = state.game.board.flat()
      // console.log('flat board:', current(state.game.board).flat())
      const square = flatBoard.filter(unit => unit.id === id)[0];
      if (square.value === 0) {
        console.log('value = 0')
        square.correct = true;
      } else {
        const checkBoard = flatBoard.filter(unit => unit.id !== id)
        const rowValues = checkBoard.filter(unit => unit.row === square.row).map(unit => unit.value)
        const columnValues = checkBoard.filter(unit => unit.column === square.column).map(unit => unit.value);
        const blockValues = checkBoard.filter(unit => unit.medSquare === square.medSquare).map(unit => unit.value);
        const valuesArr = [...rowValues, ...blockValues, ...columnValues];
        // console.log('values: ', valuesArr)
        if (valuesArr.includes(square.value)) {
          // console.log('redundant values')
          square.correct = false;
        }
        else square.correct = true;
        // console.log('checked correct: ', square.correct)
      }
    },
    checkComplete(state) {
      const flatBoard = state.game.board.flat();
      const correctArr = flatBoard.map(square => square.correct)
      const valueArr = flatBoard.map(square => square.value)
      if (!correctArr.includes(false) && !valueArr.includes(0)) {
        console.log('puzzle complete')
        state.complete = true
      }
      else console.log('puzzle not complete')
    },
    // action: square id, note number
    updateNotes(state, action: PayloadAction<{ squareId: number, note: number }>) {
      const {
        squareId,
        note
      } = action.payload;

      const flatBoard = state.game.board.flat();
      const squareToChange = flatBoard.filter(el => el.id === squareId)[0];
      if (squareToChange.notes.includes(note)) squareToChange.notes = squareToChange.notes.filter(num => num !== note);
      else squareToChange.notes.push(note)
    },
    // receives an id, focuses square with matching id
    setFocus(state, action: PayloadAction<Focus>) {
      state.focus = action.payload;
      const flatBoard = state.game.board.flat();
      const square = flatBoard.filter(el => el.id === action.payload.squareId)[0] || blankSquare;
      square.focus = true;

      for (let el of flatBoard) {
        if (el.column === square.column || el.row === square.row || el.medSquare === square.medSquare || el.value === square.value && el.value !== 0) el.highlight = true
        else el.highlight = false
        if (el.id !== square.id) el.focus = false
      }
    },
    highlightNumbers(state, action: PayloadAction<number>) {
      const flatBoard = state.game.board.flat();
      for (let el of flatBoard) {
        el.focus = false
        if (el.value === action.payload) el.highlight = true
        else el.highlight = false
      }
    },
    toggleNotes(state) {
      state.notesMode = !state.notesMode
    },
    setNotes(state, action: PayloadAction<boolean>) {
      state.notesMode = action.payload
    },
  }
})

export const {
  saveValue,
  setGame,
  checkSquareById,
  checkComplete,
  updateNotes,
  setFocus,
  highlightNumbers,
  toggleNotes,
  setNotes,
  saveValueById
} = gameSlice.actions;

export default gameSlice.reducer;