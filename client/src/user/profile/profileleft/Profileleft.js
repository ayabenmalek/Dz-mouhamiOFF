import React from 'react'
import './profileleft.css'
import picavocat from './pics/avocatpic.png'
import local from './pics/localisation.png'
import tel from './pics/tel.png'


function Profileleft({name ,adress ,tell ,detailll}) {
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
                <h1> {name} </h1>
                <p> Spécialiste/génraliste </p>
                <p>Bordj bouaridj, Algerie</p>

            </div>
            
        </div>
        <div className="plusinfos">
                <p> <img src={local} alt="" /> <span> {adress} </span> </p>
                <p> <img src={tel} alt="" /> <span>   {tell} </span> </p>
                <p className='liketitle' > Details </p>
                <p className='detail'>
                    {detailll}
                </p>
            </div>
    </div>
  )
}

export default Profileleft
