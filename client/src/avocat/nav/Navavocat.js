import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import person from './pics/person.png';
import './navavocat.css';
import logo from './pics/logo.png';
import down from './pics/chevron-down.png';
import translations from './translation/translation';

function Navavocat({setlang }) {
  const [appear, setAppear] = useState(false);
  const [content, setContent] = useState('en');

  const username = "aya ben malek";
  setlang(content)
  return (
    <nav>
      <div className="logo">
        <Link to="/avocat/home">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="generallinks">
        <div className='links'>
          <NavLink to="/avocat/" style={({ isActive }) => isActive ? { background: '#D9A363', borderRadius: '20px' } : { }}>
            {translations[content].home}
          </NavLink>
          <NavLink to="/avocat/contact" style={({ isActive }) => isActive ? { background: '#D9A363', borderRadius: '20px' } : { }}>
            {translations[content].contact}
          </NavLink>
        </div>

        <div className='login'>
          <div className="navcateg sp">
            <div className="haut nomuser">
              <p style={{ color: '#D9A363' }}>{translations[content].welcome_user.replace('{username}', username)}</p>
              <img src={person} alt="" />
            </div>
            {/* ... existing code ... */}


            <div className="hover one">
                        <div className="etoile one"></div>
                        <div className="car one">
                            <NavLink to="/avocat/rdv"
                              style={({isActive})=>{
                                return isActive ? {backgroundColor: '#D9A363', borderRadius: '20px', color: 'white'} : {color: 'white'}
                                }}  
                            >
                            {translations[content].appointments} </NavLink>
                            <NavLink to='/planification' 
                            style={({isActive})=>{
                              return isActive ? {backgroundColor: '#D9A363', borderRadius: '20px',color: 'white'} : {color: 'white'}
                              }} 
                            > {translations[content].appointment_planning}  </NavLink>
                            <NavLink to= '/'
                            style={({isActive})=>{
                              return isActive ? {backgroundColor: '#D9A363', borderRadius: '20px',color: 'white' } : {color: 'white'}
                              }} 
                            >  {translations[content].logout}  </NavLink>
                          
                        </div>
                </div>
              







          </div>








          <div className="navcateg sp">
            <div className="haut nomuser lan" onClick={() => { setAppear((prev) => !prev) }}>
              <p style={{ color: 'white' }}>{translations[content].language}</p>
              <img src={down} alt="" />
            </div>

            <div className="hover two" style={{ left: '16px', top: '24px', display: appear ? 'block' : 'none' }}>
              {/* ... existing code ... */}
              <div className="car two" style={{ padding: '10px' }}>
                <p className='ar' onClick={() => { setAppear(false); setContent((prev) => (prev === 'en' ? 'ar' : 'en')); }}>
                  {translations[content].toggle_language}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navavocat;