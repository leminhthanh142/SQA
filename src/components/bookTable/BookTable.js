import React, { useMemo, useState } from 'react';
import {
  Stack,
  Box,
  Typography,
  Select,
  OutlinedInput,
  MenuItem,
  FormControl,
  FormLabel
} from '@mui/material';
import { CustomDatePicker } from '../CustomDatePicker';
import { CustomButton } from '../CustomButton';

export const BookTable = () => {
  const [formValues, setFormValues] = useState({
    guestNo: null,
    tableNo: null,
    date: new Date(),
    tableType: null,
    phoneNo: '',
    message: ''
  });

  const tableTypeSelect = useMemo(() => {
    return ['2', '4', '6', '8'].map((item) => (
      <MenuItem key={item} value={item}>
        {item} people
      </MenuItem>
    ));
  }, []);

  const handleFormValuesChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box maxWidth={'70%'} margin={'0 auto'}>
      <Box mb={3}>
        <Typography variant="h2" sx={{ fontWeight: 'bold' }} align={'center'}>
          Book a table
        </Typography>
      </Box>
      <Box mb={5}>
        <Typography variant={'subtitle1'} align={'center'}>
          Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.
        </Typography>
      </Box>
      <Stack spacing={3}>
        <Stack direction={'row'} spacing={2}>
          <FormControl fullWidth>
            <FormLabel>
              <Typography>Number Of Guest</Typography>
            </FormLabel>
            <OutlinedInput value={formValues.guestNo} onChange={handleFormValuesChange} />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>
              <Typography>Number Of Table</Typography>
            </FormLabel>
            <OutlinedInput
              name="tableNo"
              value={formValues.tableNo}
              onChange={handleFormValuesChange}
            />
          </FormControl>
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <FormControl fullWidth>
            <FormLabel>
              <Typography>Booking Time</Typography>
            </FormLabel>
            <CustomDatePicker value={formValues.date} onChange={handleFormValuesChange} />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>
              <Typography>Table Type</Typography>
            </FormLabel>
            <Select value={formValues.tableType} onChange={handleFormValuesChange}>
              {tableTypeSelect}
            </Select>
          </FormControl>
        </Stack>
        <FormControl fullWidth>
          <FormLabel>
            <Typography>Phone No.</Typography>
          </FormLabel>
          <OutlinedInput value={formValues.phoneNo} onChange={handleFormValuesChange} />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>
            <Typography>Note</Typography>
          </FormLabel>
          <OutlinedInput
            multiline
            rows={3}
            value={formValues.message}
            onChange={handleFormValuesChange}
          />
        </FormControl>
        <CustomButton padding={'16px 24px'}>Send Request</CustomButton>
      </Stack>
    </Box>
  );
};
