import React from 'react'
import { useAppSelector } from '../hooks'

const StatusBoard = () => {

  const { game } = useAppSelector(state => state.game);

  // board flattened and only containing square values and correctness
  const flatBoardDist = game.board.flat().map(square => { return { value: square.value, correct: square.correct } });

  const checkNumberComplete = (num: number) => {
    const numSquares = flatBoardDist.filter(square => square.value === num);
    const numSquaresTrue = numSquares.map(square => square.correct)

    if (numSquares.length === 9 && !numSquaresTrue.includes(false)) return true
    else return false
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className='status-board'>
      {numbers.map((number, i) => {
        return (
          <div key={i}>
            <p key={i} style={{
              color: checkNumberComplete(number) ? 'grey' : 'black',
              fontWeight: checkNumberComplete(number) ? 100 : 300

            }}>{number}</p>
          </div>
        )
      })}
    </div>
  )
}

export default StatusBoard