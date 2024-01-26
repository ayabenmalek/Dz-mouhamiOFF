import React, { useState } from 'react'
import Left from './Left'
import Right from './Right'
import './Rndv.css'
import Navavocat from '../nav/Navavocat'
// import { array } from './Left'
import translations from '../nav/translation/translation'

export  const  array =[
    {

        IDclient : '1',
        Nom:'Djouzi',
        prenom :'nour el houda',
        Civilité : 'visualiser',
        Numéro :'0725189209',
        Code_postale : '24' ,
        Email : 'Djouzi@noor.dz',
        naissance : '12/12/2000' ,
        rdv_date : '12/12/2024',
        Lheure_rdv : '9h'  ,
        Situation : "Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique leJe suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique leJe suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de "

    },{

        IDclient : '2',
        Nom:'Ben Malek',
        prenom :'Aya',
        Civilité : 'visualiser',
        Numéro :'0725189209',
        Code_postale : '24' ,
        Email : 'Djouzi@noor.dz',
        naissance : '12/12/2000' ,
        rdv_date : '12/12/2024',
        Lheure_rdv : '9h'  ,
        Situation : "Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique le"

    },{

        IDclient : '3',
        Nom:'Ganoun',
        prenom :'Dihia',
        Civilité : 'visualiser',
        Numéro :'0725189209',
        Code_postale : '24' ,
        Email : 'Djouzi@noor.dz',
        naissance : '12/12/2000' ,
        rdv_date : '12/12/2024',
        Lheure_rdv : '9h'  ,
        Situation : "Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique le"

    },{

        IDclient : '1',
        Nom:'Djouzi',
        prenom :'nour el houda',
        Civilité : 'visualiser',
        Numéro :'0725189209',
        Code_postale : '24' ,
        Email : 'Djouzi@noor.dz',
        naissance : '12/12/2000' ,
        rdv_date : '12/12/2024',
        Lheure_rdv : '9h'  ,
        Situation : "Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique le"

    },{

        IDclient : '1',
        Nom:'Djouzi',
        prenom :'nour el houda',
        Civilité : 'visualiser',
        Numéro :'0725189209',
        Code_postale : '24' ,
        Email : 'Djouzi@noor.dz',
        naissance : '12/12/2000' ,
        rdv_date : '12/12/2024',
        Lheure_rdv : '9h'  ,
        Situation : "Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique le"

    },{

        IDclient : '1',
        Nom:'Djouzi',
        prenom :'nour el houda',
        Civilité : 'visualiser',
        Numéro :'0725189209',
        Code_postale : '24' ,
        Email : 'Djouzi@noor.dz',
        naissance : '12/12/2000' ,
        rdv_date : '12/12/2024',
        Lheure_rdv : '9h'  ,
        Situation : "Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique le"

    },{

        IDclient : '1',
        Nom:'Djouzi',
        prenom :'nour el houda',
        Civilité : 'visualiser',
        Numéro :'0725189209',
        Code_postale : '24' ,
        Email : 'Djouzi@noor.dz',
        naissance : '12/12/2000' ,
        rdv_date : '12/12/2024',
        Lheure_rdv : '9h'  ,
        Situation : "Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique le"

    },{

        IDclient : '1',
        Nom:'Djouzi',
        prenom :'nour el houda',
        Civilité : 'visualiser',
        Numéro :'0725189209',
        Code_postale : '24' ,
        Email : 'Djouzi@noor.dz',
        naissance : '12/12/2000' ,
        rdv_date : '12/12/2024',
        Lheure_rdv : '9h'  ,
        Situation : "Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique le"

    },{

        IDclient : '1',
        Nom:'Djouzi',
        prenom :'nour el houda',
        Civilité : 'visualiser',
        Numéro :'0725189209',
        Code_postale : '24' ,
        Email : 'Djouzi@noor.dz',
        naissance : '12/12/2000' ,
        rdv_date : '12/12/2024',
        Lheure_rdv : '9h'  ,
        Situation : "Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique le"

    },{

        IDclient : '1',
        Nom:'Djouzi',
        prenom :'nour el houda',
        Civilité : 'visualiser',
        Numéro :'0725189209',
        Code_postale : '24' ,
        Email : 'Djouzi@noor.dz',
        naissance : '12/12/2000' ,
        rdv_date : '12/12/2024',
        Lheure_rdv : '9h'  ,
        Situation : "Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique le"

    },{

        IDclient : '1',
        Nom:'Djouzi',
        prenom :'nour el houda',
        Civilité : 'visualiser',
        Numéro :'0725189209',
        Code_postale : '24' ,
        Email : 'Djouzi@noor.dz',
        naissance : '12/12/2000' ,
        rdv_date : '12/12/2024',
        Lheure_rdv : '9h'  ,
        Situation : "Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique le"

    },{

        IDclient : '1',
        Nom:'Djouzi',
        prenom :'nour el houda',
        Civilité : 'visualiser',
        Numéro :'0725189209',
        Code_postale : '24' ,
        Email : 'Djouzi@noor.dz',
        naissance : '12/12/2000' ,
        rdv_date : '12/12/2024',
        Lheure_rdv : '9h'  ,
        Situation : "Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique le"

    },    ]

function Rnvd() {
    const [lang, setlang] = useState('en')
    console.log(lang);
    const [resultFromLeft, setResultFromLeft] = useState('0');

  const handleLeftResult = (result) => {
    setResultFromLeft(result);
  };

  console.log(resultFromLeft);

  return (
    <div className="cont">
        <Navavocat setlang={setlang}/>
        { (array.length > 0) ?
        <div className='rndvcontainer' style={{ flexDirection: (lang==='ar')? 'row-reverse' : ''}}>
            
            <Left onResult={handleLeftResult} lang ={lang} />
            <Right id = {resultFromLeft} lang={lang} />
            
        </div>
        :
        <div className='pasderdv'>
            <p>
            {translations[lang].pasderndv}
            </p>
        </div>
        }
    </div>
  )
}

export default Rnvd
