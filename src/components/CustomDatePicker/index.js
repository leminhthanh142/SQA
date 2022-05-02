import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DateTimePicker } from '@mui/lab';
import PropTypes from 'prop-types';

export const CustomDatePicker = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        value={value}
        onChange={(newValue) => {
          onChange(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

CustomDatePicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func
};
