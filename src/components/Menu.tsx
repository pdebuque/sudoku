import React from 'react'

import { useAppDispatch, useAppSelector } from '../hooks'

import { toggleEdit } from '../redux/reducers/user.reducer'

const Menu: React.FC = () => {

  const dispatch = useAppDispatch()
  const { notesMode } = useAppSelector((state) => state.user)

  const handlePencil = () => {
    dispatch(toggleEdit())
  }

  return (
    <nav>
      {JSON.stringify(notesMode)}
      <button onClick={handlePencil}>notes</button>


    </nav>
  )
}

export default Menu