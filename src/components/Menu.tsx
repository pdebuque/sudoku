import React from 'react'

import { useAppDispatch, useAppSelector } from '../hooks'

import { toggleNotes } from '../redux/reducers/user.reducer'

const Menu: React.FC = () => {

  const dispatch = useAppDispatch()
  const { notesMode } = useAppSelector((state) => state.user)

  const handlePencil = () => {
    dispatch(toggleNotes())
  }

  return (
    <nav>
      {JSON.stringify(notesMode)}
      <button onClick={handlePencil}>notes</button>


    </nav>
  )
}

export default Menu