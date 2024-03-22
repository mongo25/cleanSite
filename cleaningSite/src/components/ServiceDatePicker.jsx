import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ServiceDatePicker = () => {
    const [value, onChange] = useState(new Date());

    return (
        <Calendar
            onChange={onChange}
            value={value}
            minDate={new Date()}
            tileClassName="calender-custom-tile"
            tileDisabled={() => false}
        />
    );
}

export default ServiceDatePicker