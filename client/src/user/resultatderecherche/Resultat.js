import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Resultat.css'
import Navbar from '../../components/navavocat/Navavocat'
import Avocatcard from '../../components/avocatcard/avocatcard';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
export default function Resultat() {
    const [selectedValuespecgen, setSelectedValuespecgen] = useState('');
    const handleChangespecgen = (event) => {
        setSelectedValuespecgen(event.target.value);
    };
    const location = useLocation();
    const { selectedValuewilaya, selectedValueactivity, name} = location.state ;
    const wilaya=selectedValuewilaya;
    const option=selectedValueactivity;
    const [selectedValuewilaya1, setSelectedValuewilaya1] = useState('');
    const handleChangewilaya = (event) => {
        setSelectedValuewilaya1(event.target.value);
    };
    const [selectedValueactivity1, setSelectedValueactivity1] = useState('');
    const handleChangeactivity = (event) => {
        setSelectedValueactivity1(event.target.value);
    };
    const activityArray=['option1','option2','option3','option4','option5','option6']
    const wilayaArray=['option1','option2','option3','option4','option5','option6']

    
    
    const [listedavocat,setlistesavocat]=useState([])
    // useEffect(() => {
    //     const requestData ={
    //         wilaya,
    //         option,
    //         name
    //     }
    //     axios.post(`http://localhost:8000/api/filter`, requestData, { withCredentials: true })
    //       .then((response) => {
    //         setlistesavocat(response.data);
    //         console.log('list',listedavocat);
    //       })
    //       .catch((err) => {
    //         console.log('ere', err);
    //         console.log('ere', err.response);
    //       });
    //   },   [wilaya, option, name]); // Ajoutez les dépendances ici
    // console.log(location.state)
    // console.log(wilaya,option,name)
    return (
        <div className='result'>
                <Navbar />
                    <div className='research-section'>
                        <div className='firstsection'>
                            <p>si vous ne connaissez  pas un avocat spéciale, faite la recherche ici:</p>
                                <div className='formm'>
                                    <select   id="dropdown" value={selectedValuespecgen} onChange={handleChangespecgen}required >
                                        <option value="" disabled>
                                        Spécialiste/Généraliste
                                        </option>
                                        <option value="option1" className='option'>Spécialiste</option>
                                        <option value="option2" className='option'>Généraliste</option>
                                    </select>
                                    <select id="dropdown" value={selectedValuewilaya1} onChange={handleChangewilaya}required >
                                        <option value="" disabled>
                                        Wilaya
                                        </option>
                                        {wilayaArray.map((wilaya1) => (
                                        <option className='option' key={wilaya1} value={wilaya1}>
                                            {wilaya1}
                                        </option>
                                        ))}
                                    </select>
                                    <select  id="dropdown" value={selectedValueactivity1} onChange={handleChangeactivity}required >
                                        <option value="" disabled>
                                            Sélectionner une activitie
                                        </option>
                                        {activityArray.map((activity) => (
                                        <option className='option' key={activity} value={activity}>
                                            {activity}
                                        </option>
                                        ))}
                                    </select>
                                
                                <button className="homebutt" >Trouver un avocat</button>
                                </div>
                        </div>
                        <div className='secondsection'>
                            <p>Si vous connaissez déja un avocat faite la recherche ici</p>
                            <div className='formm2'>
                                <input placeholder='Nom/Prénom davocat'></input>
                                <button>Trouver lavocat</button>
                            </div>
                            
                        </div>
                </div>
            <div className='cards'>
                <h3>03 <span> Resultats</span></h3>
                
                <Avocatcard name='test' adresse='Amizour Béjaia'
                
                /> 
                <Avocatcard name='aymen' adresse='Boumerdes'
                
                /> 
                <Avocatcard name='test' adresse='Djelfa'
                
                /> 
            
                
            </div>
        </div>
        
    )
}
