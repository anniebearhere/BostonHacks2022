import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';
import 'react-calendar/dist/Calendar.css';


function App() {
    const [date, setDate] = useState(new Date());
  
    return (
      <div className='app'>
        <h1 className='text-center'>Mood Calendar</h1>
        <div className='calendar-container'>
          <Calendar onChange={setDate} value={date} />
        </div> 
        <div className='Login'>
          <h1>Register</h1>
          <input type="text" placeholder="username..." />
          <input type="text" placeholder="password..." />
          <button>Register</button>
        </div>
          
        <p className='text-center'>
          <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
        </p>
      </div>
      
    );
  }
  
  export default App;