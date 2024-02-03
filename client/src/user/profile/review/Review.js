import React, { useState } from 'react'
import './review.css'
import emptystart from './pics/emptystar.png'
import fullstart from './pics/fullstart.png'
import { useEffect } from 'react'
import axios from 'axios'

function Review({display,avocat_id}) {

  const [reviews, setreviews]= useState([])

  const [showAll, setShowAll] = useState(false);
  const revlenght = reviews.length
  const elements = reviews.length > 0 ? (showAll   ? reviews:  reviews.slice(0, 3)) : [];
  console.log('isaarray',Array.isArray(reviews))
  const voirplus = () => {
    setShowAll(!showAll);
  };


  useEffect(() => {
    axios.get(`http://localhost:8000/api/review/${avocat_id}/`)
    .then((res)=>{
        
        console.log('res',res.data)
        setreviews(res.data)
    })
    .catch((err)=>{console.log('get err',err)})
  }, []);

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
                  {review.editeur_nom} 
                </div>
                <div className="date">
                  {review.date_review} à {review.heure}
                </div>
              </div>
              <div className="rate">
                  <img src={emptystart} alt="" /><img src={emptystart} alt="" /><img src={emptystart} alt="" /><img src={emptystart} alt="" /><img src={emptystart} alt="" />
              </div>
            </div>
            <div className="reviewtext">
              {review.review_txt}
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
