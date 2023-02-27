import React from 'react';

interface Props {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  notes: number[]
}

const NumberSelect: React.FC<Props> = (props) => {

  const {
    menuOpen,
    setMenuOpen,
    notes
  } = props

  const menuStyle: React.CSSProperties = {
    position: 'absolute',
    
  }

  return (
    <div
      className='number-select'
      style={menuStyle}
    >
      hello
    </div>
  )
}

export default NumberSelect