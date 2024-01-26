import React from 'react'
import avocat from './avocat1.png'
import './avocatcard.css'
import { useNavigate } from 'react-router-dom'

export default function Avocatcard() {
    const Droit =['administratif','commertial','administratif','commertial','administratif','commertial']
    let firstname='aya';
    let secondname='benmalek';
    let spegen='spécialiste';
    let Wilaya ='Bordj Bou Arréridj';
    
    const navigate = useNavigate();
    const handelnavigatetoprofile = () => {
        navigate('/user/profile');
    };


    const lesnouvellesdroit=Droit.map(valeur=>`Droit ${valeur}`)
    const lesvaleursaffichage = lesnouvellesdroit.join(',')
    return (
        <div className='card'>
            <div className='photo'>
                <img src={avocat} alt=''></img>
            </div>
            <div className='informations'>
                <h2>{firstname}  {secondname}</h2>
                <p>{spegen}</p>
                
                <div>
                    <h3 >Activités:</h3>
                    <p >{lesvaleursaffichage} </p>
                </div>
                <div>
                    <h3 >Wilaya:</h3>
                    <p >{Wilaya} </p>
                </div>
                
                
                <button onClick={handelnavigatetoprofile}>Voir son profile</button>
            </div>
        
        </div>
    )
}
