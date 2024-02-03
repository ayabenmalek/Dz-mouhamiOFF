import React from 'react'
import Navbar from '../../components/navavocat/Navavocat';
import law from './truth-concept-arrangement-with-balance 1.png'
import './Contact.css'
export default function Contact() {
  return (
    
      
      <div className='logincontent'>
      <Navbar />
            <div className='login-title'>
                <h1>Contactez nous <span>DZ-Mouhami</span> </h1>
            </div>
            <div className='login-contentt'>
                <div className='left' >
                    <img src={law} alt='' ></img>
                </div>
                <div className='right'>
                    <form >
                       
                        <input type='text' placeholder="Votre Nom" ></input>
                        <input type='number' placeholder="Votre numéro" ></input>
                        <textarea placeholder='votre message'></textarea>
                        <button type='submit'>Envoyer</button>
                    </form>
                    
                </div>
            </div>
        </div>
    



  
  )
}
