import React from 'react'
import './profileleft.css'
import picavocat from './pics/avocatpic.png'
import local from './pics/localisation.png'
import tel from './pics/tel.png'


function Profileleft() {
  return (
    <div className='profileleftcontainer'>
        <div className="title">
                <h1>Profile</h1>
            </div>
        <div className="profileinfospers">
            
            <div className="image">
                <img src= {picavocat} alt="" />
            </div>
            <div className="writing">
                <h1> Ben Malek Aya </h1>
                <p> Spécialiste/génraliste </p>
                <p>Bordj bouaridj, Algerie</p>

            </div>
            
        </div>
        <div className="plusinfos">
                <p> <img src={local} alt="" /> <span> 5 rue, 1008 bloc 65 amizour </span> </p>
                <p> <img src={tel} alt="" /> <span>   0664940605 </span> </p>
                <p className='liketitle' > Details </p>
                <p className='detail'>
                    Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique le
                </p>
            </div>
    </div>
  )
}

export default Profileleft
