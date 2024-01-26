import React from 'react'
import Navadmin from '../../components/navadmin/Navadmin'
import './allmembers.css'
export default function allmembers() {
    const Avocats=[
        {id:1, name:"DJOUZI nour elhouda"},
        {id:2, name:"DJOUZI nour elhouda"},
        {id:3, name:"DJOUZI nour elhouda"}
        
    ];
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
                                <td> <button className='products-bout' >Supprimer</button> </td>
                            </tr>
                        ))}   
                    </tbody>
                </table>

            </div>
            
        </div>
    )
}
