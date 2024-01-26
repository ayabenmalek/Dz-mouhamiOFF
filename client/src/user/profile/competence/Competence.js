import React from 'react'
import './competence.css'

function Competence({display}) {

  const competences = ['Droit administratif', 'Droit administratif','Droit administratif','Droit administratif', 'Droit administratif','Droit administratif','Droit administratif', 'Droit administratif','Droit administratif']

  return (
    <div className="competencecontainer"style={{display : display.competence? 'flex' : 'none'}}>
      <div className='textcompetence' >
        {competences.map((competence, index)=>(
          <div key={index} className="competencebuttun">
            {competence}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Competence
