

import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import person from './pics/PersonCircle.png'
import './Navavocat.css'
import logo from './pics/Logo.png'
import down from './pics/chevron-down.png'


function Navavocat() {

const [appear, setappear] =useState(false)
const [content, setcontent] = useState('Fr')
let auth;


    return (
        <nav >
        <div className="logo">
                <Link to="/"><img src={logo} alt="" /></Link>
        </div>

        <div className="generallinks"  >
                <div className='links'>
                <NavLink to="/"
                    style={({isActive})=>{
                    return isActive ? {background: '#D9A363', borderRadius: '12px' } : { }
                    }}  >

                        Acceuil
                </NavLink>
                <NavLink to="/contact"
                    style={({isActive})=>{
                    return isActive ? {background: '#D9A363', borderRadius: '12px' } : { }
                    }}  >

                        Contact
                </NavLink>
                </div>

                
                <div className='login'>
                {auth ?
                <div className="navcateg sp">
                    <div className="haut nomuser"  >
                            <p style={{color:'#D9A363'}}>aya ben malek</p>
                            <img src={person} alt="" />
                    </div>
                    <div className="hover one">
                            <div className="etoile one"></div>
                            <div className="car one">
                                <NavLink to="/avocat/rdv"
                                style={({isActive})=>{
                                    return isActive ? {backgroundColor: '#D9A363', borderRadius: '20px', color: 'white'} : {color: 'white'}
                                    }}  
                                >
                                Vos rendez-vous  </NavLink>
                                <NavLink to='/panier' 
                                style={({isActive})=>{
                                return isActive ? {backgroundColor: '#D9A363', borderRadius: '20px',color: 'white'} : {color: 'white'}
                                }} 
                                > Planification RDV  </NavLink>
                                <NavLink to= '/history'
                                style={({isActive})=>{
                                return isActive ? {backgroundColor: '#D9A363', borderRadius: '20px',color: 'white' } : {color: 'white'}
                                }} 
                                >  Settings  </NavLink>
                                <NavLink to= '/history'
                                style={({isActive})=>{
                                return isActive ? {backgroundColor: '#D9A363', borderRadius: '20px',color: 'white' } : {color: 'white'}
                                }} 
                                >  Logout  </NavLink>
                            
                            
                            </div>
                    </div>
                </div>
                : <div className=" linkcon">
                <NavLink to="/Login"
                    style={({isActive})=>{
                    return isActive ? {background: '#043C55', borderRadius: '12px' } : { }
                    }}  >

                        Connexion
                </NavLink>
                </div>
                }


                
                <div className="navcateg sp">
                    <div className="haut nomuser lan" onClick={()=>{setappear((prv)=>!prv)}} >
                    <p style={{color:'white'}}>{content}</p>
                        <img src={down} alt="" />
                    </div>

                    <div className="hover two" style={{    left: '16px' ,top: '24px' , display : appear? 'block' : 'none'}}>
                        <div className="etoile two" style={{marginBottom: '-32px',marginLeft: '16px', width : '27px', height : '33px'}}></div>
                        <div className="car two" style={{    padding: '10px'}}>
                        
                        <p className='ar' onClick={()=>{setappear(false); setcontent((prev) =>{return prev === 'Fr' ? 'Ar' : 'Fr';} )  }} >
                            {(content === 'Fr') ? 'Ar' : 'Fr'}  
                        </p>
                        </div>                        
                    </div>
                </div>
                
                
                </div>
                
        </div>
        </nav>
        
        
        
    )
    }

export default Navavocat