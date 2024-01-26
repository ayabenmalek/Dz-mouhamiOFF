import React, { useState } from 'react'
import './planification.css'
import Nav from '../nav/Navavocat'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Planification() {
    const [lang, setlang] = useState('')
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
        nomprenom : '',
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
    
    
  return (
    <div className='planificationcontainer'>
        <Nav setlang={setlang}/>
        <div className="calcontain">
        <div className="calendarconatiner calendercontainer">
            <div className="title">
                <h1>Disponibilité</h1>
            </div>
            <div className="transition1 planificationtransition1" >
                    <div className='tableuxcal'>
                    <Calendar onChange={handleDateChange} value={selectedDate} minDetail="month"  tileDisabled={({ date }) => isDateDisabled(date)}/>
                    </div>
                    <div className="souscalendrier souscalendrierplanification">
                        <div className="textplan textplanplan">
                            Selectionner une date
                        </div>
                    </div>
            </div>
            
        </div>








     
      
        </div>
   </div>
)
}

export default Planification
