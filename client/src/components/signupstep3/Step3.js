import React from "react";
import './Step3.css'
function Step3({prevStep, cv,
    setcv,
    detail,
    setdetail,
    experience,
    setexperience,
    selectedOptions,
    setselectedOptions}) {
        const check = () => {
            // Vérifiez que tous les champs requis de la deuxième étape sont remplis
            if (
            detail.trim() === '' ||
            experience.trim() === '' 
            ) {
            alert('Veuillez remplir tous les champs requis.');
            } 
        };
        

    const handleSelectChange = (event) => {
        const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
        setselectedOptions((prevSelectedOptions) => {
        const updatedOptions = [...prevSelectedOptions];

        selectedValues.forEach((value) => {
            const index = updatedOptions.indexOf(value);
            if (index === -1) {
            // Si l'option n'est pas déjà sélectionnée, l'ajouter
            updatedOptions.push(value);
            } else {
            // Si l'option est déjà sélectionnée, la désélectionner
            updatedOptions.splice(index, 1);
            }
        });

        return updatedOptions;
        });
    };
   
        const optionsArray= [
            "Droit de la famille",
            "Droit des affaires",
            "Droit des impôts",
            "Droit pénal",
            "Droit de l'immigration",
            "Droit du travail",
            "Droit de la propriété intellectuelle",
            "Droit de la responsabilité civile",
            "Droit de la santé",
            "Droit de l'environnement",
            "Droit administratif",
            "Droit des contrats",
            "Droit de la construction",
            "Droit bancaire et financier",
            "Droit des successions",
            "Droit des assurances",
            "Droit de la cybercriminalité",
            "Droit international",
            "Droit de la propriété foncière",
            "Droit de la technologie de l'information",
            "Droit de la concurrence",
                    ];
    return (
        <div className="step3-div">
            <div className="cv">
                <label htmlFor="fileInput">Votre CV</label>
                <input type="file" onChange={(e) => setcv(e.target.files[0])} />
            </div>
            <div  className="details">
                <textarea placeholder="Detail sur vous" required value={detail} onChange={(e) => setdetail(e.target.value)} ></textarea>
                <textarea placeholder="Experience" required value={experience} onChange={(e) => setexperience(e.target.value)}></textarea>
                
            </div>
            <div className="activities">
            <label htmlFor="multiSelect" style={{color:'white',marginBottom:'10px'}}>sélectionnez une ou plusiers activitées:</label>
                <select
                        id="multiSelect"
                        multiple
                        value={selectedOptions}
                        onChange={handleSelectChange}
                    >

                        {optionsArray.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                        ))}
                </select> 

            </div>
            <div className="bouttons">
                
                <button type="button" onClick={prevStep}>avant</button>
                <button type="submit" onClick={check} >Enregistrer</button>
            </div>
            
        </div>
        
        );
    }
export default Step3;