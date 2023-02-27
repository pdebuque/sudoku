import React from 'react'

import { useAppDispatch, useAppSelector } from '../hooks'

import { toggleEdit } from '../redux/reducers/user.reducer'

const Menu: React.FC = () => {

  const dispatch = useAppDispatch()
  const { editMode } = useAppSelector((state) => state.user)

  const handlePencil = () => {
    dispatch(toggleEdit())
  }

  return (
    <nav>
      {JSON.stringify(editMode)}
      <button onClick={handlePencil}>pencil</button>


    </nav>
  )
}

export default Menu