import React, { useState } from 'react';

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="flex items-center justify-center  w-full">
      <div className="relative w-full">
        <input
          type="date"
          value={selectedDate}
          onChange={handleChange}
          className="w-full bg-gray-50 border border-gray-300   bg-white rounded-md p-2.5 pr-10 focus:outline-1"
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;
