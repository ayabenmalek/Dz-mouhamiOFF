import React from 'react'
import './prendre.css'
function Prendrerndv({setdate,prendre, setprendre, date}) {
  return (
    <div className='prendrerndvcontainer' style={{display : prendre? 'flex': 'none'}} >
      <div className="form">
        <div className="formtitle">
            <div className="prendre">
                <h1>Prendre un rendez-vous</h1>
            </div>
            <div className="fermer" onClick={()=>{setprendre(false)}}>
                Fermer
            </div>
        </div>
        <div className="forminputs">
            <div className="nomprenom">
                <input type="text" placeholder='Nom' onChange={(e)=>{setdate({...date,nom :e.target.value })}}/>
            </div>
            <div className="nomprenom">
                <input type="text" placeholder='Prenom' onChange={(e)=>{setdate({...date,prenom :e.target.value })}}/>
            </div>
            <div className="tel">
                <input type="number" placeholder='Numero de telephone'onChange={(e)=>{setdate({...date,numero :e.target.value })}}/>
            </div>
            <div className="descrdv">
                <textarea placeholder='Description de cas'onChange={(e)=>{setdate({...date,description :e.target.value })}}></textarea>
            </div>
        </div>
        <div className="confirmer">
            <div className="buttonconfirm">
                Prendre mon RDV
            </div>
        </div>
      </div>
    </div>
  )
}

export default Prendrerndv
