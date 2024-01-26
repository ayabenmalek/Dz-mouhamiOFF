import React, { useState } from 'react'
import Navavocat from '../nav/Navavocat'
import './home.css'
import translations from '../nav/translation/translation';
function Home() {
  const [lang, setlang] = useState('en')
  console.log(lang);

  return (
    <div className='home'>
        <Navavocat setlang={setlang} />
        <div className="titlehome">
          <h1>
          {translations[lang].bienvenue}<br /><span>{translations[lang].muhamy} </span>
          </h1>
        </div>

    </div>


  )
}

export default Home
