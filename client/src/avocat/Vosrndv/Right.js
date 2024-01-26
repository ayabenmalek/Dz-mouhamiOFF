import React from 'react'
import'./right.css'
import { array } from './Rnvd'
import translations from '../nav/translation/translation'




function Right({id, lang}) {
  return (
    <div className='leftcontainer right'>
        <div className="titlerndv" style={{    flexDirection: (lang==='ar')? 'row-reverse' : ''}}>
        <div className="bare">
          
          </div>
          <div className="h1">
          <h1 style={{display: (lang==='ar')? 'flex' : '' ,justifyContent: (lang==='ar')? 'flex-end' : '', paddingRight:(lang==='ar')? '42px' : ''}} >
            {translations[lang].selectionner}
            </h1>
          </div>

        </div>
        <div className="infospers">
           <div className="infoscontainer">
                <div className="leftinfos">
                    <p>Nom : <span> {array[id].Nom} </span></p>
                </div>
                <div className="rightinfos">
                    <p>Prénom : <span> {array[id].prenom} </span></p>
                </div>
           </div>
           <div className="infossupp">
                <p>Date de rendez-vous: <span>{array[id].rdv_date}</span> </p>
                <p>L’heure de rendez-vous: <span>{array[id].Lheure_rdv}</span> </p>
                <p className='pspecial'>Situation : </p> <br />
                <span>
                {array[id].Situation}
                </span>
                <br />
                <button> Supprimer</button>
           </div>
        </div>
      
    </div>
  )
}

export default Right
