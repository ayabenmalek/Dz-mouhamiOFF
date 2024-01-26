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
    const activityArray=['option1','option2','option3','option4','option5','option6']
    const wilayaArray=['option1','option2','option3','option4','option5','option6']

    const navigate = useNavigate();
    const handelnavigatetoresult = () => {
        navigate('/Result');
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
                            <input placeholder='Nom/Prénom davocat'></input>
                            <button>Trouver lavocat</button>
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
                <Avocatcard />
                <Avocatcard />
                <Avocatcard />
            </div>
            
            
        </div>
        
    )
}
