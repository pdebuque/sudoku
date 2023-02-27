import React from 'react'

interface Props {
  notes: number[]
}

const SquareNotes: React.FC<Props> = (props) => {

  const {
    notes
  } = props

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className='square-notes'>
      {numbers.map(number => {
        return (
          <p className={notes.includes(number) ? '' : 'hidden'}>{number}</p>
        )
      })
      }
    </div>
  )
}

export default SquareNotes