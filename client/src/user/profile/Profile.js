import React, {useEffect, useState} from 'react'
import './profile.css'
import Profileleft from './profileleft/Profileleft'
import Calendrier from './calendrie/Calendrier'
import Experience from './experience/Experience'
import Competence from './competence/Competence'
import Review from './review/Review'
import Addreview from './addreview/Addreview'
import Navavocat from '../../components/navavocat/Navavocat'
import Localisation from './localisation/Localisation'



function Profile() {
    const [diplay, setdisplay] = useState({
        experience : true,
        competence : false,
        review : false,
        addreview : false
    })
    const [valuelab,setvaluelab] = useState('-281px, -14px');
    const [style,setstyle] =useState({
        transform: `translate(${valuelab})`
    })
  
    useEffect(() => {
        setstyle({ transform: `translate(${valuelab})` });
      }, [valuelab, diplay]);
    
        // window.innerWidth

      const handleButtonClick = (translation,e) => {
        setvaluelab(translation);
            if (e === 'experience'){
        setdisplay({
            experience : true,
            competence : false,
            review : false,
            addreview : false
        })
    }
    else {
        if (e === 'competence'){
            setdisplay({
                experience : false,
                competence : true,
                review : false,
                addreview : false
            })
    }
    else{
        if (e === 'review'){
            setdisplay({
                experience : false,
                competence : false,
                review : true,
                addreview : false
            })
    }
    else{
        if (e=== 'addreview'){
            setdisplay({
                experience : false,
                competence : false,
                review : false,
                addreview : true
            })
    }
}}}
      };
      
    



    console.log(diplay);
    
    return (
        <div className='profilcontainer' >
            <Navavocat/>
            <div className="profilehaut">
                <Profileleft/>
                <Calendrier/>
            </div>
            <div className="bascontainer">
                <div className="bas">
                    <div className="titles">
                        <button onClick={() => handleButtonClick('-281px, -14px', 'experience')} style={{color : diplay.experience ? '#D9A363' : '#ffff'}}>Experience</button>
                        <button onClick={() => handleButtonClick('-133px, -14px', 'competence')} style={{color : diplay.competence ? '#D9A363' : '#ffff'}} >Competence</button>
                        <button onClick={() => handleButtonClick('0px, -14px', 'review')} style={{color : diplay.review ? '#D9A363' : '#ffff'}} >Reviews</button>
                        <button onClick={() => handleButtonClick('133px, -14px', 'addreview')} style={{color : diplay.addreview ? '#D9A363' : '#ffff'}} >Add Review</button>
                        <button onClick={() => handleButtonClick('280px, -14px')}  >Localisation</button>
                    </div>
                    <hr style={style} className="transition-hr" />
                    <div className="content">
                        <Experience display = {diplay} />
                        <Competence display = {diplay}/>
                        <Review display = {diplay} />
                        <Addreview display = {diplay}/>
                        <Localisation />
                    </div>
                </div>
            </div>
        </div>
    )
}
    

export default Profile
