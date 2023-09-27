import React, { useState } from 'react';

const TimeSlotPicker = ({ onSelectTimeSlot }) => {
    const [disabledTimeSlots, setDisabledTimeSlots] = useState([]);

    const morningSlots = ['11pm ', '12pm'];
    const afternoonSlots = ['1pm', '2pm', '3pm', '4pm'];
    const eveningSlots = ['5pm', '6pm'];

    const handleTimeSlotClick = (timeSlot) => {
        onSelectTimeSlot(timeSlot);

        // Disable the selected time slot
        setDisabledTimeSlots([...disabledTimeSlots, timeSlot]);
    };

    const isTimeSlotDisabled = (timeSlot) => {
        return disabledTimeSlots.includes(timeSlot);
    };

    return (
        <div className="time-slots">
            <span className="bg-green-500 p-1 rounded-sm text-white">Bot: Select a time slot!</span>
            <div>
                <div className="mt-2">
                    <h3><span className="bg-violet-600 text-white p-0.5 rounded-sm ">Morning</span></h3>
                    {morningSlots.map((timeSlot, index) => (
                        <button
                            key={index}
                            onClick={() => handleTimeSlotClick(timeSlot)}
                            disabled={isTimeSlotDisabled(timeSlot)}
                            className={`mr-2 ${isTimeSlotDisabled(timeSlot) ? 'bg-white text-gray-500' : 'bg-gray-500 text-white'} rounded-sm`}
                        >
                            {timeSlot}
                        </button>
                    ))}
                </div>
                <div className="mt-2">
                    <h3><span className="bg-violet-600 text-white p-0.5 rounded-sm">Afternoon</span></h3>
                    {afternoonSlots.map((timeSlot, index) => (
                        <button
                            key={index}
                            onClick={() => handleTimeSlotClick(timeSlot)}
                            disabled={isTimeSlotDisabled(timeSlot)}
                            className={`mr-2 ${isTimeSlotDisabled(timeSlot) ? 'bg-white text-gray-500' : 'bg-gray-500 text-white'} rounded-sm`}
                        >
                            {timeSlot}
                        </button>
                    ))}
                </div>
                <div className="mt-2">
                    <h3><span className="bg-violet-600 text-white p-0.5 rounded-sm">Evening</span></h3>
                    {eveningSlots.map((timeSlot, index) => (
                        <button
                            key={index}
                            onClick={() => handleTimeSlotClick(timeSlot)}
                            disabled={isTimeSlotDisabled(timeSlot)}
                            className={`mr-2 ${isTimeSlotDisabled(timeSlot) ? 'bg-white text-gray-500' : 'bg-gray-500 text-white'} rounded-sm`}
                        >
                            {timeSlot}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimeSlotPicker;
