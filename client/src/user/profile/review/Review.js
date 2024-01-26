import React, { useState } from 'react'
import './review.css'
import emptystart from './pics/emptystar.png'
import fullstart from './pics/fullstart.png'

function Review({display}) {

  const reviews = [
    {
      nom : 'Djouzi',
      prenom : 'Nour El houda',
      periode : 'Il y a 20 jours',
      content: "Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique le"
    },
    {
      nom : 'Djouzi',
      prenom : 'Nour El houda',
      periode : 'Il y a 20 jours',
      content: "Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique le"
    },
    {
      nom : 'Djouzi',
      prenom : 'Nour El houda',
      periode : 'Il y a 20 jours',
      content: "Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique le"
    },
    {
      nom : 'Djouzi',
      prenom : 'Nour El houda',
      periode : 'Il y a 20 jours',
      content: "Je suis avocat au Barreau de Paris depuis plus de 23 ans et Associé-fondateur du Cabinet d'affaires SAJET Avocats.Diplômé du MASTER 2 de droit social de l'Université Paris II Panthéon-Assas en 2000, je pratique le"
    }
  ]

  const [showAll, setShowAll] = useState(false);
  const revlenght = reviews.length
  const elements = showAll ? reviews : reviews.slice(0, 3);
  const voirplus = () => {
    setShowAll(!showAll);
  };


  return (
    <div style={{display : display.review? 'flex' : 'none'}} className='review' >
      { (reviews.length === 0)?
        <div className='pasderevue'> pas de review pour le moment </div>
        :
        <div>
         {elements.map((review, index)=>(
        <div  key={index} className={(index === elements.length - 1)? 'reviewcontainer noborder' : 'reviewcontainer border'} >
            <div className="reviewcoor">
              <div className="coor">
                <div className="nomreview">
                  {review.nom} {review.prenom}
                </div>
                <div className="date">
                  {review.periode}
                </div>
              </div>
              <div className="rate">
                  <img src={emptystart} alt="" /><img src={emptystart} alt="" /><img src={emptystart} alt="" /><img src={emptystart} alt="" /><img src={emptystart} alt="" />
              </div>
            </div>
            <div className="reviewtext">
              {review.content}
            </div>
          
          <div className="button" style={{display : (revlenght<= 2) ? 'none' : (index === elements.length - 1)? 'flex' : 'none'}} onClick={voirplus} >
            <button> {showAll ? 'voir moins ...' : 'voir plus ...'} </button>
          </div>
        </div>
        
         ))}
        </div>
      }
     


    </div>
  )
}

export default Review
