import React from 'react'
import './Navadmin.css'
import { NavLink } from 'react-router-dom';
import Logo from './Logo.png'
import stars from './mdi_sparkles.png'
export default function Navadmin() {

    return (
        <nav className="navbaradmin">
            <NavLink style={{ backgroundColor: "transparent"}} to="/Products" > <img src={Logo} alt='' className='logo'></img></NavLink>
            <div className='navelecont'>
                <NavLink to="/admin/Allmembers" className="navele"><img src={stars} alt=''></img>Tous</NavLink>
                <NavLink to="/" className="navele">Logout</NavLink>
            </div>
            
        </nav>
    )
}
