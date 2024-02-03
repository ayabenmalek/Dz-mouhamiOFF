import React, {useEffect, useState} from 'react'
import './profile.css'
import Profileleft from './profileleft/Profileleft'
import Calendrier from './calendrie/Calendrier'
import Experience from './experience/Experience'
import Competence from './competence/Competence'
import Review from './review/Review'
import Addreview from './addreview/Addreview'
import Localisation from './localisation/Localisation'
import Navbar from '../../components/navavocat/Navavocat';
import { useLocation } from 'react-router-dom'

function Profile() {
    const location = useLocation();
    console.log(location.state.informations[0].nom)

    const name = location.state.informations[0].nom;
const adress = location.state.informations[0].address;
const tel = location.state.informations[0].num_tel;
const detailll = location.state.informations[0].description;
const experiencecontent = location.state.informations[0].experience;
const competence = location.state.informations[0].SelectedOptions;
const avocat_id =location.state.avocat_id;
console.log(name,adress,tel,detailll,experiencecontent,competence)
console.log(competence)

    const [diplay, setdisplay] = useState({
        experience : true,
        competence : false,
        review : false,
        addreview : false,
        localisation : false
    })
    const [valuelab,setvaluelab] = useState('-400px, -14px');
    const [style,setstyle] =useState({
        transform: `translate(${valuelab})`
    })
  
    useEffect(() => {
        setstyle({ transform: `translate(${valuelab})` });
      }, [valuelab, diplay]);
    
      
      const handleButtonClick = (translation,e) => {
        setvaluelab(translation);
            if (e === 'experience'){
        setdisplay({
            experience : true,
            competence : false,
            review : false,
            addreview : false,
            localisation : false
        })
    }
    else {
        if (e === 'competence'){
            setdisplay({
                experience : false,
                competence : true,
                review : false,
                addreview : false,
                localisation : false
            })
    }
    else{
        if (e === 'review'){
            setdisplay({
                experience : false,
                competence : false,
                review : true,
                addreview : false,
                localisation : false
            })
    }
    else{
        if (e=== 'addreview'){
            setdisplay({
                experience : false,
                competence : false,
                review : false,
                addreview : true,
                localisation : false
            })
    }
    else {if (e=== 'localisation'){
        setdisplay({
            experience : false,
            competence : false,
            review : false,
            addreview : false,
            localisation : true
        })
}}
}


}}
      };
      
    



    // console.log(diplay);
    
    return (
        <div className='profilcontainer' >
            <Navbar/>

            <div className="profilehaut">
                <Profileleft name={name} adress={adress} tell={tel} detailll={detailll}/>
                <Calendrier avocat_id={avocat_id}/>
            </div>
            <div className="bascontainer">
                <div className="bas">
                    <div className="titles">
                        <button onClick={() => handleButtonClick('-400px, -14px', 'experience')} style={{color : diplay.experience ? '#D9A363' : '#ffff'}}>Experience</button>
                        <button onClick={() => handleButtonClick('-195px, -14px', 'competence')} style={{color : diplay.competence ? '#D9A363' : '#ffff'}} >Competence</button>
                        <button onClick={() => handleButtonClick('0px, -14px', 'review')} style={{color : diplay.review ? '#D9A363' : '#ffff'}} >Reviews</button>
                        <button onClick={() => handleButtonClick('195px, -14px', 'addreview')} style={{color : diplay.addreview ? '#D9A363' : '#ffff'}} >Add Review</button>
                        <button onClick={() => handleButtonClick('400px, -14px','localisation')} style={{color : diplay.localisation ? '#D9A363' : '#ffff'}}  >Localisation</button>
                    </div>
                    <hr style={style} className="transition-hr" />
                    <div className="content">
                        <Experience display = {diplay} experineccontent= {experiencecontent} />
                        <Competence display = {diplay} competence= {competence}/>
                        <Review display = {diplay} avocat_id={avocat_id}/>
                        <Addreview display = {diplay} avocat_id={avocat_id}/>
                        <Localisation display = {diplay} />
                    </div>
                </div>
            </div>
        </div>
    )
}
    

export default Profile