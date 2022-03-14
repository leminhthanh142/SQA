import React, { useState } from 'react';
import { Stack, Box, Typography, Button, TextField, Select } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { fontFamily, height, styled } from '@mui/system';

export const BookTable = () => {
  const [guestNo, setGuestNo] = useState('');
  const [tableNo, setTableNo] = useState('');
  const [date, setDate] = useState(new Date());
  const [tableType, setTableType] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeGuestNo = (event) => {
    const guestNo = event.target.value;
    setGuestNo(guestNo);
  };
  const handleChangeTableNo = (event) => {
    const tableNo = event.target.value;
    setTableNo(tableNo);
  };
  const handleChangeDate = (event) => {
    const date = event.target.value;
    setDate(date);
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

  // may cai div cac thu h2, p thi c dung cuar thu vien het di Box + Typography
  return (
    <Stack direction={'row'} mt={15}>
      <div>
        <img src="/images/bookTable.png" />
      </div>
      <Box
        ml={19}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '49.5'
        }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"Mitr",sans-serif',
            fontSize: '5.5',
            display: 'block',
            marginBottom: '2.75',
            color: '#4d312c',
            fontWeight: 'bold'
          }}>
          Book a table
        </Typography>
        <Box sx={{ typography: 'subtitle1' }}>
          Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.
        </Box>
        <Stack direction={'row'} mb={3} mt={3}>
          <TextField
            sx={{
              mr: 2.5
            }}
            size={'small'}
            placeholder="Number Of Guest"
            name="guestNo"
            value={guestNo}
            onChange={handleChangeGuestNo}
          />
          <TextField
            size={'small'}
            placeholder={'Number Of Table'}
            type="text"
            name="tableNo"
            value={tableNo}
            onChange={handleChangeTableNo}
          />
        </Stack>
        <Stack direction={'row'} mb={3}>
          <TextField
            sx={{ width: 222, mr: 2.5 }}
            size={'small'}
            type="date"
            name="date"
            value={date}
            onChange={handleChangeDate}
          />
          <TextField
            sx={{ width: 222 }}
            size={'small'}
            name="tableType"
            placeholder={'Table Type'}
            value={tableType}
            onChange={handleChangeTableType}
          />
        </Stack>
        <TextField
          sx={{ width: 462, mb: 3 }}
          placeholder={'Phone No.'}
          name="phoneNo"
          value={phoneNo}
          onChange={handleChangePhoneNo}
        />
        <TextField
          sx={{ width: 462, mb: 3 }}
          multiline
          rows={3}
          placeholder={'Message'}
          name="message"
          value={message}
          onChange={handleChangeMessage}
        />
        <Button
          sx={{
            width: 462,
            background: '#FE5F41'
          }}
          variant="contained">
          Send Request
        </Button>
      </Box>
    </Stack>
  );
};
