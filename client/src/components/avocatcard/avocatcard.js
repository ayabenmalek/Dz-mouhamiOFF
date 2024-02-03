import React from 'react'
import avocat from './avocat1.png'
import './avocatcard.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from "react";
import { useEffect } from 'react';
export default function Avocatcard({name, adresse,avocat_id}) {
    
    const navigate = useNavigate();
    const [informations, setinformations] = useState(null);
        const handelDisplay = (avocat_id) => {
            axios.get(`http://localhost:8000/api/avocat/${avocat_id}/`, { withCredentials: true })
                .then((response) => {
                setinformations(response.data);
                })
                .catch((err) => {
                console.log('ere', err);
                console.log('err.data', err.response.data);
            });
        };
    useEffect(() => {
        if (informations) {
        navigate('/user/profile', { state: { informations: informations,avocat_id: avocat_id } });
        }
    }, [informations, navigate]);
        console.log(informations)



    const Droit =["Droit de la famille",
    "Droit des affaires",
    "Droit des impôts",
    "Droit pénal"]
    let spegen='spécialiste';



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
                
                
                <button  onClick={() => handelDisplay( avocat_id)}>Voir son profile</button>
            </div>
        
        </div>
    )
}
