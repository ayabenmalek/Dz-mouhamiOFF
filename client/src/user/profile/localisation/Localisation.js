import React from 'react'
import './localisation.css'
function Localisation({display}) {

  return (
    <div style={{display : display.localisation? 'flex': 'none'}} className='map' >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.270765048887!2d4.9010834746893!3d36.643936276494536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128d2f6c032bdaff%3A0xc2c07f1df66dbeb!2sAmizour%20bejaia!5e0!3m2!1sfr!2sdz!4v1706240389578!5m2!1sfr!2sdz" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
export default Localisation
