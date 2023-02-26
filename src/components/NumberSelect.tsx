import React from 'react'

interface Props {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NumberSelect: React.FC<Props> = (props) => {

  const {
    menuOpen,
    setMenuOpen
  } = props

  return (
    <div>number select</div>
  )
}

export default NumberSelect