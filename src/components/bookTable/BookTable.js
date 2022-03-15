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
  const [guestNo, setGuestNo] = useState('');
  const [tableNo, setTableNo] = useState('');
  const [date, setDate] = useState(new Date());
  const [tableType, setTableType] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [message, setMessage] = useState('');

  const tableTypeSelect = useMemo(() => {
    return ['2', '4', '6', '8'].map((item) => (
      <MenuItem key={item} value={item}>
        {item} people
      </MenuItem>
    ));
  }, []);

  const handleChangeGuestNo = (event) => {
    const guestNo = event.target.value;
    setGuestNo(guestNo);
  };
  const handleChangeTableNo = (event) => {
    const tableNo = event.target.value;
    setTableNo(tableNo);
  };
  const handleChangeDate = (newDate) => {
    setDate(newDate);
  };
  const handleChangeTableType = (event) => {
    const tableType = event.target.value;
    setTableType(tableType);
  };

  const handleChangePhoneNo = (event) => {
    const phoneNo = event.target.value;
    setPhoneNo(phoneNo);
  };
  const handleChangeMessage = (event) => {
    const message = event.target.value;
    setMessage(message);
  };

  return (
    <Box maxWidth={'70%'} margin={'0 auto'}>
      <Box mb={3}>
        <Typography variant="h3" sx={{ color: '#4d312c', fontWeight: 'bold' }} align={'center'}>
          Book a table
        </Typography>
      </Box>
      <Box typography={'subtitle1'} mb={5}>
        <Typography align={'center'}>
          Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.
        </Typography>
      </Box>
      <Stack spacing={3}>
        <Stack direction={'row'} spacing={2}>
          <FormControl fullWidth>
            <FormLabel>
              <Typography>Number Of Guest</Typography>
            </FormLabel>
            <OutlinedInput value={guestNo} onChange={handleChangeGuestNo} />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>
              <Typography>Number Of Table</Typography>
            </FormLabel>
            <OutlinedInput name="tableNo" value={tableNo} onChange={handleChangeTableNo} />
          </FormControl>
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <FormControl fullWidth>
            <FormLabel>
              <Typography>Booking Time</Typography>
            </FormLabel>
            <CustomDatePicker value={date} onChange={handleChangeDate} />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>
              <Typography>Table Type</Typography>
            </FormLabel>
            <Select value={tableType} onChange={handleChangeTableType}>
              {tableTypeSelect}
            </Select>
          </FormControl>
        </Stack>
        <FormControl fullWidth>
          <FormLabel>
            <Typography>Phone No.</Typography>
          </FormLabel>
          <OutlinedInput value={phoneNo} onChange={handleChangePhoneNo} />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>
            <Typography>Note</Typography>
          </FormLabel>
          <OutlinedInput multiline rows={3} value={message} onChange={handleChangeMessage} />
        </FormControl>
        <CustomButton padding={'16px 24px'}>Send Request</CustomButton>
      </Stack>
    </Box>
  );
};
