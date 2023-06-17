import React, { useState } from 'react';
import About from './About';

const Header = () => {

  const [aboutOpen, setAboutOpen] = useState<boolean>(false);

  return (
    <header>
      <div></div>
      <div>
        <h1>Paolo's sudoku app</h1>
        <button
          onClick={() => setAboutOpen(!aboutOpen)}
        >?</button>
        <p>built with react, typescript, and redux-toolkit</p>
      </div>
      <div
        className="question-button"
      >

      </div>
      <About
        aboutOpen={aboutOpen}
        setAboutOpen={setAboutOpen}
      />
    </header>
  )
}

export default Header