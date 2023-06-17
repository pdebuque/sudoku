import e from 'express';
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

  type Content = {
    page: number;
    title: string;
    text: string;
  }
  const content: Content[] = [
    {
      page: 0,
      title: 'Welcome!',
      text: 'I built this to strengthen my <code>react</code> skills, learn <code>typescript</code> and <code>redux-toolkit</code>, and as a challenge to build something elegant that I would use myself. Hope you enjoy! '
    },
    {
      page: 1,
      title: 'Controls',
      text: 'click any square or press an arrow key to begin. navigate by clicking or using arrow keys and enter numbers with your keyboard. you can toggle notes mode with the SHIFT key and release focus with the ESC key.'
    },
    {
      page: 2,
      title: 'Next Steps',
      text: 'how to play'
    },
    
  ]

  const aboutStyle: React.CSSProperties = {
    visibility: aboutOpen ? 'visible' : 'hidden'
  }

  const handleClose = () => {
    setAboutOpen(false)
    setPage(0)
  }


  return (
    <div
      className='about'
      style={aboutStyle}
    >
      {content.map((el, i) => {
        return (
          <div key={i} style={{ display: page === el.page ? 'block' : 'none' }}>
            <h4>{el.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: el.text }}>
            </p>

            {/* back button */}
            {page > 0 &&
              <button
                onClick={() => setPage(el.page - 1)}
              >
                ← {content[el.page - 1]?.title}
              </button>
            }
            {/* close button */}
            <button
              onClick={handleClose}
            >
              x
            </button>

            {/* next page button */}
            {page < content.length - 1 && <button
              onClick={() => setPage(el.page + 1)}
            >
              {content[el.page + 1]?.title} →
            </button>}

          </div>
        )
      }

      )}
    </div>
  )
}

export default About