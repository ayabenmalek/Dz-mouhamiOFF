import React from 'react'
import starfull from '../review/pics/fullstart.png'
import './addreview.css'

function Addreview({display}) {
  return (
    <div style={{display : display.addreview? 'block' : 'none'}} >
      <div className="formcontainer">
        <div className="nameadd">
          <input type="text" placeholder='Nom et prenom' />
        </div>
        <div className="adreview">
          <textarea placeholder='commentaire...' ></textarea>
        </div>
        <div className="rateadd">
          <div className="noter">
            Noter sur 5
          </div>
          <div className="starfulling">
            <img src={starfull} alt="" /> <img src={starfull} alt="" /><img src={starfull} alt="" /><img src={starfull} alt="" /><img src={starfull} alt="" />
          </div>
        </div>
        <div className="addreview">
            <div className="buttonadd">ajouter un commentaire </div>
        </div>
      </div>
    </div>
  )
}

export default Addreview
