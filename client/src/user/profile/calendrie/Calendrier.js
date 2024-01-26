import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendrier.css'
import Prendrerndv from '../prendrerndv/Prendrerndv';




const Calendrier = () => {


  const disabledDates = [
    new Date('Thu Jan 25 2024 '),
    new Date('Sun Jan 28 2024')
  ];
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
    return disabledDates.some(disabledDate => (
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
  function handledate(){
    if(!isDateEmpty(date)){
      sethandle({...handle, datechecked : true})
    }
  }


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
        
         {hours.map((hour, index) => (
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
      <Prendrerndv prendre={prendre} setdate= {setdate} setprendre={setprendre} date={date} />
   </div>
  );
};

export default Calendrier;