import React, { useState } from 'react'
import Navadmin from '../../components/navadmin/Navadmin'
import './newmembers.css'

export default function Newmembers() {
    const [Avocats, setAvocats] = useState([
        { id: 1, name: "DJOUZI nour elhouda",confirmed:false },
        { id: 2, name: "DJOUZI nour elhouda",confirmed:false },
        { id: 3, name: "DJOUZI nour elhouda",confirmed:false }
    ]);
    const handelconfirmation=(id)=>{
        const updateavocat =Avocats.map(item => {
            if(item.id === id){
                return{...item,confirmed:true}
            }
            return item;

        });
        setAvocats(updateavocat);
    };
    return (
        <div>
        <Navadmin />
        <div className='newcontent'>
            <div className='newcontetnt-title'>
                <div>
                    
                </div>
                <h2 className='new-title'>Les nouveaux avocats</h2>
            </div>
            
            
            <table>
                <thead>
                    <tr>
                        <th> Nom d'avocat </th>
                        <th> ID d'avocat </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {Avocats.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td> 
                            <button className='bout1' onClick={() => handelconfirmation(item.id)}>
                                {item.confirmed ? 'Confirmé' : 'confirmer'}
                            </button> 
                        </td>
                            <td> <button className='bout2' >Supprimer</button> </td>
                        </tr>
                    ))}   
                </tbody>
            </table>

        </div>
        
        </div>
    )
}
