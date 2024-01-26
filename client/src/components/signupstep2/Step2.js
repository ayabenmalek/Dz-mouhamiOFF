import React from "react";
import'./Step2.css'
function Step2({  nextStep, prevStep, nom, prenom, selectedValue1, wilaya, numeroTel, setNom, setPrenom, setSelectedValue1, setWilaya, setNumeroTel,adressar,setAdressar }) {

        

        

        const handleChange1 = (event) => {
            setSelectedValue1(event.target.value);
        };

        const checkAndNextStep = () => {
        // Vérifiez que tous les champs requis de la deuxième étape sont remplis
        if (
        nom.trim() === '' ||
        prenom.trim() === '' ||
        selectedValue1.trim() === '' ||
        wilaya.trim() === '' ||
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
                        <input type="text " placeholder="Nom" required value={nom} onChange={(e) => setNom(e.target.value)} ></input>
                        <input type="text" placeholder="Prénom" required value={prenom} onChange={(e) => setPrenom(e.target.value)}></input>
                        <select id="dropdown" value={selectedValue1} onChange={handleChange1}required >
                            <option value="" disabled>
                            Spécialiste/Généraliste...
                            </option>
                            <option value="option1">Spécialiste</option>
                            <option value="option2">Généraliste</option>
                        </select>
                        
                        <button type="button" onClick={prevStep}>Avant</button>
                    </div>
                    <div className="step2-left">
                        <input type="text" placeholder="Wilaya" required  value={wilaya} onChange={(e) => setWilaya(e.target.value)}></input>
                        <input type="number" placeholder="Numéro de téléphone" value={numeroTel} onChange={(e) => setNumeroTel(e.target.value)} required ></input>
                        <input type="text" placeholder="َaddresse" required value={adressar} onChange={(e) => setAdressar(e.target.value)} ></input>
                        <button type="button" onClick={checkAndNextStep}>Suivant</button>
                    </div>
                    
                </div>
            </div>

        );
    }
    
export default Step2;