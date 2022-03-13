import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

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
    <Stack direction={'row'}>
      <div>
        <img src="/images/bookTable.png" />
      </div>
      <Stack>
        <h2>Book a table</h2>
        <p>
          Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.
        </p>
        <Stack direction={'row'}>
          <input type="text" name="guestNo" value={guestNo} onChange={handleChangeGuestNo} />
          <input type="text" name="tableNo" value={tableNo} onChange={handleChangeTableNo} />
        </Stack>
        <Stack direction={'row'}>
          <input type="date" name="date" value={date} onChange={handleChangeDate} />
          <input
            type="number"
            name="tableType"
            value={tableType}
            onChange={handleChangeTableType}
          />
        </Stack>
        <input type="text" name="phoneNo" value={phoneNo} onChange={handleChangePhoneNo} />
        <button>Send Request</button>
      </Stack>
    </Stack>
  );
};
