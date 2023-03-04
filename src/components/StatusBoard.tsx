import React, { useDebugValue } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks';

import { highlightNumbers } from '../redux/reducers/game.reducer';

const StatusBoard = () => {

  const { game } = useAppSelector(state => state.game);
  const dispatch = useAppDispatch()

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
          <button
            className='status-board-button'
            key={i}
            onClick={() => dispatch(highlightNumbers(number))}
            style={{
              color: checkNumberComplete(number) ? 'grey' : 'black',
              fontWeight: checkNumberComplete(number) ? 100 : 300
            }}>
            <p key={i}>{number}</p>
          </button>
        )
      })}
    </div>
  )
}

export default StatusBoard