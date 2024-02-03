import React, { useState } from 'react'
import Navavocat from '../nav/Navavocat'
import { useLocation } from 'react-router-dom';
import './home.css'
import translations from '../nav/translation/translation';
function Home() {
  const [lang, setlang] = useState('en')
  console.log(lang);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get('username');
  return (
    <div className='home'>
        <Navavocat setlang={setlang} username={username}  />
        <div className="titlehome">
          <h1>
          {translations[lang].bienvenue}<br /><span>{translations[lang].muhamy} </span>
          </h1>
        </div>

    </div>


  )
}

export default Home
