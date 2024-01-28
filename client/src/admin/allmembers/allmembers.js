import React, { useState } from 'react'
import Navadmin from '../../components/navadmin/Navadmin'
import './allmembers.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Allmembers() {
    const [Avocat,setAvocat]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:8000/api/admin',{withCredentials:true})
        .then((response)=>{
            setAvocat(response.data)
            console.log(Avocat)
        }).catch((err)=>{
            console.log(err)
            console.log(err.date)
        })

    }, [])
    const handelsupprimer = (id_avocat) =>{
        const registerURL = 'http://localhost:8000/api/admin';
        axios.post(registerURL,  { avocat_id: id_avocat },{withCredentials:true})
        .then(response => {
            console.log('Enregistrement réussi :', response.data);
            // Gérer la réponse (par exemple, rediriger l'utilisateur, afficher un message de succès, etc.)
        })
        .catch(error => {
            console.error('Erreur lors de l\'enregistrement :', error);
            console.error('Erreur lors de l\'enregistrement - Server Response:', error.response);
        });
        console.log(id_avocat)
        const updatedAvocat = Avocat.filter(item => item.avocat_id !== id_avocat);
        setAvocat(updatedAvocat);
        };
    
    const [informations, setinformations] = useState(null);
  const location = useLocation();
    
  const handelDisplay = (avocat_id) => {
    axios.get(`http://localhost:8000/api/avocat/${avocat_id}/`, { withCredentials: true })
      .then((response) => {
        setinformations(response.data);
      })
      .catch((err) => {
        console.log('ere', err);
        console.log('err.data', err.response.data);
      });
  };

  const handleButtonClick = (avocat_id) => {
    // You can get avocat_id from somewhere, for example, props or state
    handelsupprimer(avocat_id);
  };

  useEffect(() => {
    if (informations) {
      navigate('/user/profile', { state: { informations: informations } });
    }
  }, [informations, navigate]);
  console.log(informations)
    


    
    // const handelDisplay = (id_avocat) =>{
    //     navigate(`/profile/${id_avocat}`);
    //     };
        



    return (
        <div>
            <Navadmin />
            <div className='allcontent'>
                <div className='allcontetnt-title'>
                    <div>

                    </div>
                    <h2 className='all-title'>Tous les avocats existants</h2>
                </div>
            
                
                <table>
                    <thead>
                        <tr>
                            <th> ID d'avocat </th>
                            <th> Nom d'avocat </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Avocat.map((item)=>(
                            <tr key={item.avocat_id}>
                                <td>{item.avocat_id}</td>
                                <td>{item.nom}</td>
                                <td> <button className='products-bout' onClick={() => handleButtonClick( item.avocat_id)} >Delete</button> </td>
                                <td> <button className='products-bout' style={{color:'#D9A363'}} onClick={() => handelDisplay( item.avocat_id)} >Display</button> </td>
                            </tr>
                        ))}   
                    </tbody>
                </table>

            </div>
            
        </div>
    )
}
