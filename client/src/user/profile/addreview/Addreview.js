import React, { useState } from 'react'
// import starfull from '../review/pics/fullstart.png'
import './addreview.css'
import starfull from '../review/pics/fullstart.png'
import starempty from '../review/pics/emptystar.png'


function Addreview({display}) {
  const [state , setState] = useState({x:0 , star1:starempty , star2:starempty, star3:starempty, star4:starempty, star5:starempty })
const star1 = state.star1 ;
const star2 = state.star2 ;
const star3 = state.star3 ;
const star4 = state.star4 ;
const star5 = state.star5 ;


const change1 = () => {
    setState( (prevState)=>({ x:1 , star1: starfull , star2: starempty, star3: starempty, star4: starempty, star5: starempty}))
}

const change2 = () => {
    setState( (prevState)=>({ x:2 , star1: starfull , star2: starfull , star3: starempty, star4: starempty, star5: starempty}))
}

const change3 = () => {
    setState( (prevState)=>({  x:3 , star1: starfull , star2: starfull, star3: starfull, star4: starempty, star5: starempty}))
}

const change4 = () => {
    setState( (prevState)=>({  x:4 , star1: starfull , star2: starfull, star3: starfull, star4: starfull, star5: starempty}))
}

const change5 = () => {
    setState( (prevState)=>({ x:5 , star1: starfull , star2: starfull, star3: starfull, star4: starfull, star5: starfull}))
}

  return (
    <div style={{display : display.addreview? 'block' : 'none'}} >
      <div className="formcontainer">
        <div className="nameadd">
          <input type="text" placeholder='Nom et prenom' />
        </div>
        <div className="adreview">
          <textarea placeholder='commentaire...' ></textarea>
        </div>
        <div className="rateadd">
          <div className="noter">
            Noter sur 5
          </div>
          {/* <div className="starfulling">
            <img src={starfull} alt="" /> <img src={starfull} alt="" /><img src={starfull} alt="" /><img src={starfull} alt="" /><img src={starfull} alt="" />
          </div> */}
          <div className='starfulling'>
      <img src={star1} onClick={change1}/> <img src={star2} onClick={change2}/> <img src={star3} onClick={change3}/> <img src={star4} onClick={change4}/> <img src={star5} onClick={change5}/>
                       </div>
        </div>
        <div className="addreview">
            <div className="buttonadd">ajouter un commentaire </div>
        </div>
      </div>
    </div>
  )
}

export default Addreview
