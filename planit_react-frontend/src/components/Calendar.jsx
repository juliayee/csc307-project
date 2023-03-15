import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Calender = (props) => {
  //console.log("Calender" + JSON.stringify(props));
    return(
     <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker label="MM/DD/YYYY" onAccept={props.onAccept} /> 
        </DemoContainer>
      </LocalizationProvider>
    );
}

export default Calender;