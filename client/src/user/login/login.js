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
    const [username, setusername]=useState('')
    const [password, setpassword]=useState('')
    const [variablebacklogin, setvariablebacklogin]=useState({
            username:{username},
            password:{password}
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault();  // Ajoutez cette ligne
        console.log('Before Axios call');  // Ajoutez cette ligne
        try {
        const response = await axios.post('http://localhost:8000/api/login', {
            username,
            password
        },{withCredentials:true});
        setusername(username)
    
        const { jwt, is_admin, username: loggedInUsername } = response.data;
        
    
          // Utilisez les informations pour décider où rediriger l'utilisateur
        if (is_admin) {
            navigate(`/admin/Allmembers`);
            
        } else {
            navigate(`/avocat?username=${encodeURIComponent(username)}`);
        }
        localStorage.setItem('jwt', jwt);
        console.log(jwt)
        } catch (error) {
            console.error('Login error:', error);  // Ajoutez cette ligne pour afficher l'erreur
            console.error('Login error response data:', error.response ? error.response.data : 'No response data');
        }
      };
      
    console.log(variablebacklogin)
    console.log('username',username)
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
                    <form onSubmit={handleSubmit}>
                       
                        <input type='text' placeholder="Nom d\'utilisateur"  onChange={(e) => setusername(e.target.value)}></input>
                        <input type='password' placeholder="Mot de passe" onChange={(e) => setpassword(e.target.value)}></input>
                        <button type='submit'>Connexion</button>
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
