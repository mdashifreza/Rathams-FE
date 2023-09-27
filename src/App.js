import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimeSlotPicker from './Components/TimeSlotPicker';
import { useSelector, useDispatch } from 'react-redux';
import { setFullName, selSelectedDate, setAge, selSelectedTimeSlot } from './redux/studentInfoSlice';

function App() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [showFullame, setShowFullName] = useState(false);
  const [showAge, setShowAge] = useState(false);
  const [firstMsg, setFirstMsg] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator

  // Redux
  const dispatch = useDispatch();
  const fullNameRedux = useSelector((state) => state.studentInfo.fullName);
  const selectedDateRedux = useSelector((state) => state.studentInfo.selectedDate);
  const ageRedux = useSelector((state) => state.studentInfo.age);
  const selectedTimeSlotRedux = useSelector((state) => state.studentInfo.selectedTimeSlot);

  const handleFullNameChange = (e) => {
    const fullNameValue = e.target.value;
    dispatch(setFullName(fullNameValue));
  };

  const handleNameButton = () => {
    setShowAge(true);
  };

  const handleAge = (e) => {
    dispatch(setAge(e.target.value));
  };

  const handleEnrollClick = () => {
    setLoading(true); // Show loading indicator
    setTimeout(() => {
      setFirstMsg('Hello, Welcome to the student info system!');
      setShowChatbot(true);
      setLoading(false); // Hide loading indicator after 3 seconds
    }, 3000);
  };

  const handleChatbotButtonClick = () => {
    // Handle the "Got it!" button click
    setChatMessages([...chatMessages, 'User: Got it!']);
    // Show the calendar
    setShowCalendar(true);
  };

  const handleDateSelect = (date) => {
    // Handle date selection
    dispatch(selSelectedDate(date));
    // Show time slot options
    setShowTimeSlots(true);
  };

  const handleTimeSlotSelect = (timeSlot) => {
    // Handle time slot selection
    dispatch(selSelectedTimeSlot(timeSlot));
    setShowFullName(true);
  };

  const [i, setI] = useState(5);
  const handleAgeButton = () => {
    countdown(5);
    // setChatMessages([`Your name : ${fullName} ${age} has been added to the student system. You may now exit.`]);
  };

  const countdown = (count) => {
    if (count >= 1) {
      setTimeout(() => {
        setI(count);
        countdown(count - 1); // Recursive call with a decremented count
      }, 1000);
    }
    if (count === 0) {
      setChatMessages([`Your name : ${fullNameRedux} ${ageRedux} has been added to the student system. You may now exit.`]);
    }
  };

  return (
    <div className="border p-5">
      <h1 className="text-2xl mb-4">Enter into Student Info System</h1>
      <div className="bg-gray-100 p-4 rounded">
        <button className={`bg-blue-500 text-white py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleEnrollClick} disabled={loading}>
          {loading ? 'Loading...' : 'Enroll Now!'} {/* Display loading text when loading */}
        </button>
        {showChatbot && (
          <div className="chatbot mb-2">
            <div>{firstMsg}</div>
            {!showCalendar && (
              <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleChatbotButtonClick}>Got it!</button>
            )}
            {showCalendar && (
              <div>
                <div className='mb-2'> <span className='bg-green-500 p-1 rounded-sm text-white'>Bot: Pick a date!</span> </div>
                <DatePicker selected={selectedDateRedux} onChange={handleDateSelect}  className='border-2 rounded-md p-0.5' placeholderText='Select Date'/>
              </div>
            )}
            {showTimeSlots && (
              <div>
                <div className="time-slots mb-2">
                  <TimeSlotPicker onSelectTimeSlot={handleTimeSlotSelect} />
                </div>
              </div>
            )}
            {showFullame && (
              <div>
                <div>Bot: Enter Your Name:</div>
                <div className="enter-name">
                  <label>
                    Full Name:
                    <input className="border rounded px-2 py-1" type="text" value={fullNameRedux} onChange={handleFullNameChange} /><button className="bg-blue-500 text-white py-2 px-4 rounded ml-2" onClick={handleNameButton}>Submit Name</button>
                  </label>
                </div>
              </div>
            )}
            {showAge && (
              <div>
                <div>Bot: Enter Your Age:</div>
                <div>
                  <label>
                    Your Age:
                    <input className="border rounded px-2 py-1" type="text" value={ageRedux} onChange={handleAge} /><button className="bg-blue-500 text-white py-2 px-4 rounded ml-2" onClick={handleAgeButton}>Submit Age</button>
                  </label>
                </div>
                {i}
              </div>
            )}
          </div>
        )}
        {chatMessages.map((message, index) => (
          <div key={index} className={`message-${index % 2 === 0 ? 'user' : 'bot'}`}><span className='bg-teal-500 p-2 rounded-md text-white'>{message}</span><button className="bg-blue-500 text-white py-2 px-4 rounded ml-2" onClick={() => window.location.reload()}>Click to Exit</button></div>
        ))}
      </div>
    </div>
  );
}

export default App;
