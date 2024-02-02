import React from 'react'
import avocat from './avocat1.png'
import './avocatcard.css'
import { useNavigate } from 'react-router-dom'

export default function Avocatcard({name, adresse}) {
    const Droit =["Droit de la famille",
    "Droit des affaires",
    "Droit des impôts",
    "Droit pénal"]
    let spegen='spécialiste';
    
    
    const navigate = useNavigate();
    const handelnavigatetoprofile = () => {
        navigate('/user/profile1');
    };


    const lesnouvellesdroit=Droit.map(valeur=>`Droit ${valeur}`)
    const lesvaleursaffichage = lesnouvellesdroit.join(',')
    return (
        <div className='card'>
            <div className='photo'>
                <img src={avocat} alt=''></img>
            </div>
            <div className='informations'>
                <h2>{name}</h2>
                <p>{spegen}</p>
                
                <div>
                    <h3 >Activités:</h3>
                    <p >{lesvaleursaffichage} </p>
                </div>
                <div>
                    <h3 >Wilaya:</h3>
                    <p >{adresse} </p>
                </div>
                
                
                <button onClick={handelnavigatetoprofile}>Voir son profile</button>
            </div>
        
        </div>
    )
}
