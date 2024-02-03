import React, { useEffect, useState } from 'react'
import './left.css'
import translations from '../nav/translation/translation';


function Left({ onResult, lang ,array}) {

  return (
    <div className='leftcontainer left' style={{height : (array.length > 6)? '606px' : 'fit-content'}}>
      <div className="titlerndv trcontainer" style={{    flexDirection: (lang==='ar')? 'row-reverse' : ''}} >
        <div className="bare">

        </div>
        <div className="h1">
        <h1 style={{display: (lang==='ar')? 'flex' : '' ,justifyContent: (lang==='ar')? 'flex-end' : '',     paddingRight:(lang==='ar')? '42px' : ''}}>
          {translations[lang].rdv}
        </h1>
        </div>
      </div>
      <div className='table' >
                <div className="trcontainer">
                < div className='thead'>
                    
                    <div className='trspecial'>
                        <div> {translations[lang].nom} </div>
                        <div> {translations[lang].id} </div>
                        <div className='action'> {translations[lang].action} </div>
                    </div>
                   
                </div>
                </div>
                
                    {array.map((item, index)=>(
                        <div key={index} className='trcontainer' >
                            <div className={(index===array.length-1)? 'noborder' : 'border'}>
                                <div className='td nom'   > {item.nom+item.prenom} </div>
                                <div className='td'>{item.id_user}</div>
                                <div className='td'><button onClick={()=>{onResult(index);}}>Visualiser</button></div>
                            </div>
                        </div>
                    ))}   
                
            </div>
    </div>
  )
}
export default Left

