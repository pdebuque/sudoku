import React, { useState } from 'react'

interface Props {
  aboutOpen: boolean;
  setAboutOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const About: React.FC<Props> = (props) => {

  const {
    aboutOpen,
    setAboutOpen
  } = props

  const [page, setPage] = useState<number>(0)
  const content = [
    {
      page: 0,
      text: 'welcome to the app'
    },
    {
      page: 1,
      text: 'controls'
    }
  ]

  const aboutStyle: React.CSSProperties = {
    visibility: aboutOpen ? 'visible' : 'hidden'
  }

  return (
    <div
      className='about'
      style={aboutStyle}
    >
      {content.map((el,i) => {
        return (
          <div key = {i} style = {{display: page===el.page? 'visible' : 'none'}}>
            <p>
              {el.text}
            </p>
            <button
              onClick = {()=>setPage(el.page+1)}
            >next</button>
          </div>
        )
      }

      )}
    </div>
  )
}

export default About