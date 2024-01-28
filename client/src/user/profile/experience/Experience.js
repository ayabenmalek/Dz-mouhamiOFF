import React from 'react'
import './experience.css'

function Experience({display,experineccontent}) {
  return (
    <div className='experiencecontainer' style={{display : display.experience? 'block' : 'none'}} >
      <div className="text">
         {experineccontent}
      </div>
    </div>
  )
}

export default Experience
