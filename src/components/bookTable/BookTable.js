import React, { useMemo, useState } from 'react';
import {
  Stack,
  Box,
  Typography,
  Select,
  OutlinedInput,
  MenuItem,
  FormControl,
  FormLabel,
  FormHelperText
} from '@mui/material';
import { CustomDatePicker } from '../CustomDatePicker';
import { CustomButton } from '../CustomButton';
import PropTypes from 'prop-types';
import { digits } from '../../type';

const tableTypes = [null, '2', '4', '6', '8'];

export const BookTable = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    clientName: '',
    address: '',
    guestNo: null,
    tableNo: null,
    date: new Date(),
    tableType: null,
    phoneNumber: '',
    note: ''
  });

  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [numberOfTableError, setNumberOfTableError] = useState('');
  const [numberOfGuestError, setNumberOfGuestError] = useState('');
  const isValid =
    !phoneNumberError &&
    !numberOfGuestError &&
    !numberOfTableError &&
    !!formValues.address &&
    !!formValues.phoneNumber &&
    !!formValues.date &&
    !!formValues.clientName &&
    !!formValues.tableNo &&
    !!formValues.tableType &&
    !!formValues.tableNo;

  const validateFormValues = (type, e) => {
    const value = e.target.value;
    if (type === 'phoneNumber' && !digits.test(value) && value.length) {
      setPhoneNumberError('Invalid phone number!');
      return;
    }
    if (type === 'numberOfGuests' && !digits.test(value) && value.length) {
      setNumberOfGuestError('Invalid number of guests!');
      return;
    }
    if (type === 'numberOfTables' && !digits.test(value) && value.length) {
      setNumberOfTableError('Invalid number of tables!');
      return;
    }
    setPhoneNumberError('');
    setNumberOfGuestError('');
    setNumberOfTableError('');
  };

  const tableTypeSelect = useMemo(() => {
    return tableTypes.map((item) => {
      if (!item) {
        return (
          <MenuItem key={item} value={null}>
            None
          </MenuItem>
        );
      }
      return (
        <MenuItem key={item} value={item}>
          {item} people
        </MenuItem>
      );
    });
  }, []);

  const handleFormValuesChange = (name, newValue) => {
    setFormValues({
      ...formValues,
      [name]: newValue
    });
  };

  return (
    <Box maxWidth={'70%'} margin={'0 auto'} id={'booking'}>
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
        <FormControl fullWidth required>
          <FormLabel>
            <Typography component={'span'}>Address</Typography>
          </FormLabel>
          <OutlinedInput
            value={formValues.address}
            onChange={(e) => handleFormValuesChange('address', e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth required>
          <FormLabel>
            <Typography component={'span'}>Name</Typography>
          </FormLabel>
          <OutlinedInput
            value={formValues.clientName}
            onChange={(e) => handleFormValuesChange('clientName', e.target.value)}
          />
        </FormControl>
        <Stack direction={'row'} spacing={2}>
          <FormControl fullWidth error={!!numberOfGuestError} required>
            <FormLabel>
              <Typography component={'span'}>Number Of Guest</Typography>
            </FormLabel>
            <OutlinedInput
              value={formValues.guestNo}
              onChange={(e) => {
                handleFormValuesChange('guestNo', e.target.value);
                validateFormValues('numberOfGuests', e);
              }}
            />
            <FormHelperText sx={{ ml: 0 }}>{numberOfGuestError}</FormHelperText>
          </FormControl>
          <FormControl fullWidth error={!!numberOfTableError} required>
            <FormLabel>
              <Typography component={'span'}>Number Of Table</Typography>
            </FormLabel>
            <OutlinedInput
              value={formValues.tableNo}
              onChange={(e) => {
                handleFormValuesChange('tableNo', e.target.value);
                validateFormValues('numberOfTables', e);
              }}
            />
            <FormHelperText sx={{ ml: 0 }}>{numberOfTableError}</FormHelperText>
          </FormControl>
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <FormControl fullWidth required>
            <FormLabel>
              <Typography component={'span'}>Booking Time</Typography>
            </FormLabel>
            <CustomDatePicker
              value={formValues.date}
              onChange={(value) => handleFormValuesChange('date', value)}
            />
          </FormControl>
          <FormControl fullWidth required>
            <FormLabel>
              <Typography component={'span'}>Table Type</Typography>
            </FormLabel>
            <Select
              value={formValues.tableType}
              onChange={(e) => handleFormValuesChange('tableType', e.target.value)}>
              {tableTypeSelect}
            </Select>
          </FormControl>
        </Stack>
        <FormControl fullWidth error={!!phoneNumberError} required>
          <FormLabel>
            <Typography component={'span'}>Phone No.</Typography>
          </FormLabel>
          <OutlinedInput
            value={formValues.phoneNumber}
            onChange={(e) => {
              handleFormValuesChange('phoneNumber', e.target.value);
              validateFormValues('phoneNumber', e);
            }}
          />
          <FormHelperText sx={{ ml: 0 }}>{phoneNumberError}</FormHelperText>
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>Note</FormLabel>
          <OutlinedInput
            multiline
            rows={3}
            value={formValues.note}
            onChange={(e) => handleFormValuesChange('note', e.target.value)}
          />
        </FormControl>
        <CustomButton
          disabled={!isValid}
          padding={'16px 24px'}
          onClick={() => onSubmit(formValues)}>
          Send Request
        </CustomButton>
      </Stack>
    </Box>
  );
};

BookTable.propTypes = {
  onSubmit: PropTypes.func
};
