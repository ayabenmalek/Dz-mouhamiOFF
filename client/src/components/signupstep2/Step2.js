import React from "react";
import'./Step2.css'
function Step2({  nextStep, prevStep, nom, numeroTel, setNom, setNumeroTel,adressar,setAdressar }) {

        

        

        

        const checkAndNextStep = () => {
        // Vérifiez que tous les champs requis de la deuxième étape sont remplis
        if (
        nom.trim() === '' ||
        numeroTel.trim() === '' ||
        adressar.trim() === ''
        ) {
        alert('Veuillez remplir tous les champs requis.');
        } else {
        nextStep();
        }
    };

        return (
            
            <div className="step2-div">
                <div className="step2">
                    <div className="step2-right">
                        <input type="text " placeholder="NomComplet" required value={nom} onChange={(e) => setNom(e.target.value)} ></input>
                        
                        
                        <button type="button" onClick={prevStep}>Avant</button>
                    </div>
                    <div className="step2-left">
                        <input type="number" placeholder="Numéro de téléphone" value={numeroTel} onChange={(e) => setNumeroTel(e.target.value)} required ></input>
                        <input type="text" placeholder="َaddresse" required value={adressar} onChange={(e) => setAdressar(e.target.value)} ></input>
                        <button type="button" onClick={checkAndNextStep}>Suivant</button>
                    </div>
                    
                </div>
            </div>

        );
    }
    
export default Step2;