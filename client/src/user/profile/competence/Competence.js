import React from 'react';
import './competence.css';

function Competence({ display, competence: competencee }) {
  console.log(competencee);

  return (
    <div className="competencecontainer">
      <div className='textcompetence' style={{ display: display.competence ? 'flex' : 'none' }}>
        {competencee && competencee.map((competenc, index) => (
          <div key={index} className="competencebuttun">
            {competenc}
          </div>
        ))}
      </div>
    </div>
  );
}



export default Competence