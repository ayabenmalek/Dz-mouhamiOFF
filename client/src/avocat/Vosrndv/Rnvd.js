import React, { useState } from 'react'
import Left from './Left'
import Right from './Right'
import './Rndv.css'
import Navavocat from '../nav/Navavocat'
// import { array } from './Left'
import translations from '../nav/translation/translation'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

function Rnvd() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const username = queryParams.get('username');
    const avocat_id = queryParams.get('id');
    const  [array , setarray]= useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/avocat_rdv/${avocat_id}/`)
        .then((res)=>{
            
            console.log('res',res.data)
            setarray(res.data)
        })
        .catch((err)=>{console.log('get err',err)})
    }, []);




    

    const [lang, setlang] = useState('en')
    console.log(lang);
    const [resultFromLeft, setResultFromLeft] = useState('0');

    const handleLeftResult = (result) => {
    setResultFromLeft(result);
    };

    console.log(resultFromLeft);

    return (
    <div className="cont">
        <Navavocat setlang={setlang} username={username}/>
        { (array.length > 0) ?
        <div className='rndvcontainer' style={{ flexDirection: (lang==='ar')? 'row-reverse' : ''}}>
            
            <Left onResult={handleLeftResult} lang ={lang} array={array} />
            <Right id = {resultFromLeft} lang={lang} array={array} />
            
        </div>
        :
        <div className='pasderdv'>
            <p>
            {translations[lang].pasderndv}
            </p>
        </div>
        }
    </div>
  )
}

export default Rnvd
