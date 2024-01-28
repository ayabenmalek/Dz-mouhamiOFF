
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {  Routes, Route } from 'react-router-dom';
import Login from './user/login/login';
import Signup from './user/signup/signup'
import Home from './user/home/Home';
import Result from './user/resultatderecherche/Resultat'
import Allmembers from './admin/allmembers/allmembers'
import Newmembers from './admin/newmembers/newmembers'
import Rnvd from './avocat/Vosrndv/Rnvd';
import Homeavocat from './avocat/home/Home'
import Profile from './user/profile/Profile';
import Profile1 from './user/profile/profile1';
import Planification from './avocat/planification/Planification';
import Loginadmin from './admin/loginadmin/loginadmin'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section className='content'>
          <Routes>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/Result" element={<Result />} />
                    <Route path="/admin/Allmembers" element={<Allmembers />} />
                    <Route path="/admin/Newmembers" element={<Newmembers />} />
                    <Route path="/avocat" element={<Homeavocat/>} />
                    <Route path="/avocat/rdv" element={<Rnvd/>} />
                    <Route path="/user/profile" element={<Profile/>} />
                    <Route path="/planification" element={<Planification/>} />
                    <Route path="/Loginadmin" element={<Loginadmin/>} />
                    <Route path="/user/Profile1" element={<Profile1/>} />
            </Routes>
          
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
