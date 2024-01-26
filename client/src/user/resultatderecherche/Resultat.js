import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Resultat.css'
import Navbar from '../../components/navavocat/Navavocat'
import Avocatcard from '../../components/avocatcard/avocatcard';

export default function Resultat() {
    const [selectedValuespecgen, setSelectedValuespecgen] = useState('');
    const handleChangespecgen = (event) => {
        setSelectedValuespecgen(event.target.value);
    };
    const [selectedValuewilaya, setSelectedValuewilaya] = useState('');
    const handleChangewilaya = (event) => {
        setSelectedValuewilaya(event.target.value);
    };
    const [selectedValueactivity, setSelectedValueactivity] = useState('');
    const handleChangeactivity = (event) => {
        setSelectedValueactivity(event.target.value);
    };
    const activityArray=['option1','option2','option3','option4','option5','option6']
    const wilayaArray=['option1','option2','option3','option4','option5','option6']

    const navigate = useNavigate();
    const handelnavigatetoresult = () => {
        navigate('/Result');
    };
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
                                    <select id="dropdown" value={selectedValuewilaya} onChange={handleChangewilaya}required >
                                        <option value="" disabled>
                                        Wilaya
                                        </option>
                                        {wilayaArray.map((wilaya) => (
                                        <option className='option' key={wilaya} value={wilaya}>
                                            {wilaya}
                                        </option>
                                        ))}
                                    </select>
                                    <select  id="dropdown" value={selectedValueactivity} onChange={handleChangeactivity}required >
                                        <option value="" disabled>
                                            Sélectionner une activitie
                                        </option>
                                        {activityArray.map((activity) => (
                                        <option className='option' key={activity} value={activity}>
                                            {activity}
                                        </option>
                                        ))}
                                    </select>
                                
                                <button className="homebutt" onClick={handelnavigatetoresult}>Trouver un avocat</button>
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
                <h3>1203 <span> Resultats</span></h3>
                <Avocatcard />
            </div>
        </div>
        
    )
}
