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
    const activityArray=[ "Droit de la famille",
    "Droit des affaires",
    "Droit des impôts",
    "Droit pénal",
    "Droit de l'immigration",
    "Droit du travail",
    "Droit de la propriété intellectuelle",
    "Droit de la responsabilité civile",
    "Droit de la santé",
    "Droit de l'environnement",
    "Droit administratif",
    "Droit des contrats",
    "Droit de la construction",
    "Droit bancaire et financier",
    "Droit des successions",
    "Droit des assurances",
    "Droit de la cybercriminalité",
    "Droit international",
    "Droit de la propriété foncière",
    "Droit de la technologie de l'information",
    "Droit de la concurrence"]
    const wilayaArray=["Adrar",
    "Chlef",
    "Laghouat",
    "Oum El Bouaghi",
    "Batna",
    "Béjaïa",
    "Biskra",
    "Béchar",
    "Blida",
    "Bouira",
    "Tamanrasset",
    "Tébessa",
    "Tlemcen",
    "Tiaret",
    "Tizi Ouzou",
    "Alger",
    "Djelfa",
    "Jijel",
    "Sétif",
    "Saïda",
    "Skikda",
    "Sidi Bel Abbès",
    "Annaba",
    "Guelma",
    "Constantine",
    "Médéa",
    "Mostaganem",
    "M'Sila",
    "Mascara",
    "Ouargla",
    "Oran",
    "El Bayadh",
    "Illizi",
    "Bordj Bou Arréridj",
    "Boumerdès",
    "El Tarf",
    "Tindouf",
    "Tissemsilt",
    "El Oued",
    "Khenchela",
    "Souk Ahras",
    "Tipaza",
    "Mila",
    "Aïn Defla",
    "Naâma",
    "Aïn Témouchent",
    "Ghardaïa",
    "Relizane"]

    
    
    const [listedavocat,setlistesavocat]=useState([])
    useEffect(() => {
        const requestData ={
            wilaya,
            option,
            name
        }
        axios.post(`http://localhost:8000/api/filter`, requestData, { withCredentials: true })
          .then((response) => {
            setlistesavocat(response.data.filtered_data);
            
            console.log('listaxios',response.data.filtered_data);
            
            // console.log(typeof(response.data.filtered_data))
            // console.log(Array.isArray(response.data.filtered_data));
          })
          .catch((err) => {
            console.log('ere', err);
            console.log('ere', err.response);
          });
      },   [wilaya, option, name]); // Ajoutez les dépendances ici
    // console.log("selectedvalues",location.state)
    // console.log(wilaya,option,name)
    console.log('list',listedavocat);
    return (
        <div className='result'>
                <Navbar />
                    {/* <div className='research-section'>
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
                </div> */}
            <div className='cards'>
                <h3>{listedavocat.length} <span> Resultats</span></h3>
                
                {listedavocat.map((avocat) => (
                    <div key={avocat.avocat_id}>
                        <Avocatcard name={avocat.nom} adresse={avocat.adressar} avocat_id={avocat.avocat_id}/> 
                    </div>
                ))}
                
            </div>
        </div>
        
    )
}
