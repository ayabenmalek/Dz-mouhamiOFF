import React, { useState } from 'react';
import { useNavigate }  from 'react-router-dom';
import law from './truth-concept-arrangement-with-balance 1.png'
import './login.css'
import google from './Frame 50.png'
import axios from 'axios'




export default function Login() {
    const navigate = useNavigate  ();
    
    const redirectToSignup = () => {
        // Utilisez history.push pour rediriger vers la route de signup
        navigate('/signup'); // Assurez-vous que '/signup' correspond au chemin de votre route de signup
    };
    const [email, setemail]=('')
    const [username, setusername]=('')
    const [password, setpassword]=('')
    const [variablebacklogin, setvariablebacklogin]=useState({
            email:{email},
            username:{username},
            password:{password}
    })
    // const location = useNavigate()
    // function handleconnexion(){
    //     axios.post('', variablebacklogin)
    //     .then((response)=>{
            
    //     })
    // }
    console.log(variablebacklogin)
    return (
        <div className='logincontent'>
            <div className='login-title'>
                <h1>Bienvenue dans <span>DZ-Mouhami</span> </h1>
            </div>
            <div className='login-contentt'>
                <div className='left' >
                    <img src={law} alt='' ></img>
                </div>
                <div className='right'>
                    <form>
                        <input type='email' placeholder='Email' onChange={(e) => setemail(e.target.value)}></input>
                        <input type='text' placeholder="Nom d\'utilisateur"  onChange={(e) => setusername(e.target.value)}></input>
                        <input type='password' placeholder="Mot de passe" onChange={(e) => setpassword(e.target.value)}></input>
                        <button >Connexion</button>
                    </form>
                    
                    <div className='secondpart'>
                        <div className='signupp'>
                            <p>Vous n'avez pas de compte?</p>
                            <button onClick={redirectToSignup}>Sign up</button>
                        </div>
                        <div className='googlepart'>
                            <div> <hr /></div>
                            <p>Ou continue avec Google</p>
                            <div> <hr /></div>
                        </div>
                        <div className='googleimg'>
                            <button><img alt='' src={google} style={{width:'100%', height:'100%'}}></img></button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
