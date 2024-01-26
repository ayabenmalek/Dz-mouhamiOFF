import React from 'react'
import {  Routes, Route } from 'react-router-dom';
import Login from './login/login';
import Signup from './signup/signup'
import Home from './home/Home';
import Result from './resultatderecherche/Resultat'
import Contact from'./Contact/Contact'
export default function UserApp() {
    return (
        <div>
            <Routes>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/Result" element={<Result />} />
            </Routes>
        </div>
    )
}
