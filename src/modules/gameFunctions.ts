/* 
interface Square {
  row: number;
  column: number;
  medSquare: number;
  value: number;
}



interface Board []
*/

import { BoardInt, MedSquareInt, SquareInt, blankGame } from '../model'

export const squareIsCorrect = (square: SquareInt) => {

}


// game is an array of arrays of numbers and nulls; eg,
/* 
[
  [1, null, 4, 5, null, 8, null, 6, 2],
  [etc.],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
]
*/

export const populateGame = (game: (number|string)[][]) => {
  let outputGame: BoardInt = blankGame;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      outputGame[i].squares[j].value = game[i][j]
      if (game[i][j]!== '.') outputGame[i].squares[j].static=true
    }
  }
  console.log('outputGame:', outputGame)
  return outputGame;
}
