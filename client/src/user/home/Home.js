import React ,{useState}from 'react'
import './Home.css'
import Navbar from '../../components/navavocat/Navavocat';
import { useNavigate } from 'react-router-dom';
import Avocatcard from '../../components/avocatcard/avocatcard';

export default function Home() {
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
    const [name,setname]=useState('')
    const handelname =(event)=>{
        setname(event.target.value)
    }
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
    "Relizane",];
    const activityArray = [
        "Droit de la famille",
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
    "Droit de la concurrence",
    ];

    const navigate = useNavigate();
    const handelnavigatetoresult = () => {
        navigate('/Result', { state: { selectedValuewilaya, selectedValueactivity, name} });
    };

    return (
        <div className='homecontent'>
            <div className='header'>
                <div className='head'>
                    <Navbar />
                    <h1 className='home-title'>Bienvenue dans votre site <span>DZ-mouhami</span></h1>
                </div>
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
                            <input placeholder='Nom/Prénom davocat' onChange={handelname}></input>
                            <button onClick={handelnavigatetoresult}>Trouver lavocat</button>
                        </div>
                        
                    </div>

                </div>
            </div>
            <div className='apropos'>
                <h1>A propos de nous</h1>
                <p>Bienvenue sur DZ-Mouhami, votre destination en ligne pour trouver les avocats les plus qualifiés dans votre wilaya. Notre plateforme simplifie la recherche d'un avocat compétent, vous permettant de spécifier votre wilaya et de définir des critères spécifiques. Nous collaborons avec un réseau d'avocats de confiance prêts à vous fournir des services juridiques de haute qualité. Explorez notre site pour découvrir les profils détaillés des avocats et faites des choix éclairés en consultant les évaluations des clients. DZ-Mouhami est là pour vous guider dans la recherche de l'expert juridique adapté à vos besoins.</p>
            </div>
            <div className='avopop'>
                <h1>Les avocats populaires</h1>
                <Avocatcard name='ayabenmalek' adresse='Djelfa' avocat_id='3' />
                <Avocatcard name='houda' adresse='Djelfa' avocat_id='4'/>
                <Avocatcard name='lyne' adresse='Djelfa' avocat_id='5' />
            </div>
            
            
        </div>
        
    )
}
