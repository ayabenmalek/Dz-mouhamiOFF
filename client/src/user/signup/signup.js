import React,{useState} from 'react'
import './signup.css'
import Step2 from'../../components/signupstep2/Step2'
import Step3 from'../../components/signupstep3/Step3'
import google from '../login/Frame 50.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
export default function Signup() {

    const navigate =useNavigate()
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // step2
    const [nom, setNom] = useState('');
    const [numero_tel, setNumeroTel] = useState(0);
    const [adressar, setAdressar]=useState('');
    // step3
    const [cv, setcv] = useState('');
    const [experience, setexperience] = useState('');
    const [detail, setdetail] = useState('');
    const [setSelectedOptions, setselectedOptions] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const variablebacksignup = {
            email,
            username,
            password,
            nom,
            numero_tel,
            adressar,
            cv,
            setSelectedOptions,
            experience,
            detail,
        };
        console.log(setSelectedOptions)
        const registerURL = 'http://localhost:8000/api/register';
        axios.post(registerURL, variablebacksignup,{withCredentials:true})
        .then(response => {
            console.log('Enregistrement réussi :', response.data);
            navigate(`/avocat?username=${encodeURIComponent(username)}`);
            // Gérer la réponse (par exemple, rediriger l'utilisateur, afficher un message de succès, etc.)
        })
        .catch(error => {
            console.error('Erreur lors de l\'enregistrement :', error);
            console.error('Erreur lors de l\'enregistrement - Server Response:', error.response);
        });
        };
    
    const nextStep = () => {
        if (email.trim() === '' || username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('Veuillez remplir tous les champs requis.');
            } else {
                setStep(step + 1);
            }
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const steps = ['Step 1', 'Step 2', 'Step 3'];

    return (
        <div className='signupcontent'>
            <div className='signup-title'>
                <h1>Bienvenue dans <span>DZ-Mouhami</span></h1>
            </div>
            <div className="signup-container">
                {/* Barre de progression */}
                <div className="progress-bar">
                    {steps.map((s, index) => (
                    <div
                        key={index}
                        onClick={() => setStep(index + 1)}
                        className={`step-indicator ${step === index + 1 ? 'active' : ''}` } 
                    >
                        <p>Etape {index + 1}</p>
                        <hr style={{color:'#D9A363'}}></hr>
                    </div>
                    ))}
                </div>

                {/* Formulaire d'inscription */}
                <form className="signup-form" onSubmit={handleSubmit} >
                    {step === 1 && (
                        <div className='step1div'>
                            <div className="step1">
                            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <input type='text' placeholder="Nom d\'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            <input type='password' placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <input type='password' placeholder="Confirmez votre mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                            <button type="button" onClick={nextStep}>
                            Suivant
                            </button>
                            </div>
                            <div className='googlepart'>
                                <div> <hr /></div>
                                <p>Ou continue avec Google</p>
                                <div> <hr /></div>
                            </div>
                            <div className='googleimg'>
                                <button><img alt='' src={google}></img></button>
                            </div>
                        </div>
                    
                    )}
                
                    {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} 
                    // Passez les états correspondant aux champs de la deuxième étape en tant que props
                    nom={nom}
                    
                    numeroTel={numero_tel}
                    setNom={setNom}
                    
                    setNumeroTel={setNumeroTel}
                    adressar={adressar}
                    setAdressar={setAdressar}
                    

                    />}

                    {step === 3 && <Step3 prevStep={prevStep}
                    cv={cv}
                    setcv={setcv}
                    detail={detail}
                    setdetail={setdetail}
                    experience={experience}
                    setexperience={setexperience}
                    selectedOptions={setSelectedOptions}
                    setselectedOptions={setselectedOptions}
                    />}
                </form>
                
                
            </div>
        </div>
    )
}

