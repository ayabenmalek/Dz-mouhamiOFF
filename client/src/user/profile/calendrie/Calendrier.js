import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendrier.css'
import Prendrerndv from '../prendrerndv/Prendrerndv';
import axios from 'axios';




const Calendrier = ({avocat_id}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setdate] = useState({
    year: '',
    month :'',
    day : '',
    heure:'',
    nom : '',
    prenom : '',
    numero : '',
    description :''
  })
  const isDateEmpty = (date) => {
    return date.year === '' && date.month === '' && date.day === '';
  };
  // const selectedMonth = 'février'
  const isDateDisabled = (date) => {
    // Check if the date is in the disabledDates array
    return DisabledDates.some(disabledDate => (
      date.getDate() === disabledDate.getDate() &&
      date.getMonth() === disabledDate.getMonth() &&
      date.getFullYear() === disabledDate.getFullYear()
    ));
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setdate({
      year : date.getFullYear(),
      month : date.getMonth() + 1, // Note: Month is zero-based, so we add 1
      day : date.getDate()
    })
  };
  console.log(date);
  const [handle, sethandle] = useState({
    datechecked : false,
    heurechecked : false
  })
  // function handledate(){
  //   if(!isDateEmpty(date)){
  //     sethandle({...handle, datechecked : true})
  //   }
  // }


const arrayback = ['08.00', '16.00']




const hours = [
  '08.00',
  '09.00',
  '10.00',
  '11.00',
  '13.00',
  '14.00',
  '15.00',
  '16.00'
]



// useEffect(() => {
//   const initialMatchedIndices = arrayback.map(backHour => hours.indexOf(backHour));
//   setMatchedIndices(initialMatchedIndices.filter(index => index !== -1));
// }, []); 


// const [matchedIndices, setMatchedIndices] = useState([]);

// const handleButtonClick = (hour) => {
//   const currentMatchedIndices = arrayback.reduce((acc, backHour, index) => {
//     if (backHour === hour) {
//       return [...acc, index];
//     }
//     return acc;
//   }, []);

//   if (currentMatchedIndices.length > 0) {
//   } else {
//     setdate({ ...date, heure: hour });
//   }
// };
const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

const handleButtonClick = (index, hour) => {
  setdate({ ...date, heure: hour });
  if (selectedButtonIndex === index) {
    setSelectedButtonIndex(null);
  } else {
    setSelectedButtonIndex(index);
  }
};






const [prendre, setprendre] = useState(false)
function handletransition(){
  
  if (date.heure===undefined) {
    
  }
  else{
    setprendre(true)
  }
}

const [disabledDateStrings,setdisabledDateStrings]=useState([]);
const [DisabledDates,setDisabledDates]=useState([])
// console.log('dis',DisabledDates)

const [id,setid] = useState(0) // l id iji mn la page li jiti mnha
  useEffect(() => {
    axios.get(`http://localhost:8000/api/first_get/${avocat_id}/`)
    .then((res)=>{
        
        console.log('res',res.data)
        setdisabledDateStrings(res.data)
        console.log("disabledDateStrings",disabledDateStrings)
      const parsedDates = (res.data).map((dateString) => {
        console.log('withoutsplit',new Date(dateString))
        return new Date(dateString);
      });
      console.log("parsedDates",parsedDates)
      setDisabledDates(parsedDates);   
    })
    .catch((err)=>{console.log('get err',err)})
  }, []);

  const [housdisplay, sethoursdisplay] = useState([])
  function handledate(){
    
    if(!isDateEmpty(date)){
      const datecomplet = `${date.year}-${date.month}-${date.day}`;
        console.log('datecomplet',datecomplet)
      axios.get(`http://localhost:8000/api/second_get_and_post/${avocat_id}/${datecomplet}/`)
      .then((res)=>{
        console.log("res",res)
        sethoursdisplay(res.data) // hna yethetou les heurs li rah yetafichaw donc diri had l variable hoursdisplay f plasst l hours
        sethandle({...handle, datechecked : true})
      })
      
      .catch((err)=>console.log('err',err))
    }
  }



  return (
   <div className="calendarconatiner">
      <div className="title">
        <h1>Disponibilité</h1>
      </div>
      <div className="transition1" style={{display : handle.datechecked? 'none' : 'flex'}}>
        <div className='tableuxcal'>
          <Calendar onChange={handleDateChange} value={selectedDate} minDetail="month"  tileDisabled={({ date }) => !isDateDisabled(date)}/>
        </div>
        <div className="souscalendrier">
          <div className="dispo">
            <div className="bleu">
            </div>
            <div className="textdispo">
              Disponible
            </div>
          </div>
        </div>
      </div>






      <div className="transition2" style={{display : handle.datechecked? 'flex' : 'none'}} >
        
         {housdisplay.map((hour, index) => (
        <div
          key={index}
          className={`heurebutton ${selectedButtonIndex === index ? 'checked' : 'notchecked'}`}
          onClick={() => handleButtonClick(index, hour)}
        >
          {hour}am
        </div>
      ))}


      </div>








      <div className="prendrecontainer">
        <div className="prendrerdv"  onClick={handledate} style={{display : handle.datechecked? 'none' : 'flex'}} >
          Selectionner la date
        </div>
        <div className="prendrerdv" onClick={handletransition} style={{display : handle.datechecked? 'flex' : 'none'}}   >
          Selectionner la date
        </div>
      </div>
      <Prendrerndv prendre={prendre} setdate= {setdate} setprendre={setprendre} date={date} avocat_id={avocat_id} />
   </div>
  );
};

export default Calendrier;