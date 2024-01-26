import React from "react";
import './Step3.css'
function Step3({prevStep, cv,
    setcv,
    detail,
    setdetail,
    experience,
    setexperience,
    selectedOptions,
    setSelectedOptions}) {
        const check = () => {
            // Vérifiez que tous les champs requis de la deuxième étape sont remplis
            if (
            cv.trim() === '' ||
            detail.trim() === '' ||
            experience.trim() === '' ||
            selectedOptions.trim() === '' 
            ) {
            alert('Veuillez remplir tous les champs requis.');
            } 
        };
        

    const handleSelectChange = (event) => {
        const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
        setSelectedOptions((prevSelectedOptions) => {
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
   
        const optionsArray=['option1','option2','option3','option4','option5','option6']
    return (
        <div className="step3-div">
            <div className="cv">
                <label htmlFor="fileInput">Votre CV</label>
                <input type="file" id="fileInput" name="fileInput"required value={cv} onChange={(e) => setcv(e.target.value)} ></input>
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