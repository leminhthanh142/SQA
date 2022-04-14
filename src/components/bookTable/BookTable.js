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
import PropTypes from 'prop-types';

const tableTypes = [null, '2', '4', '6', '8'];
const numberPattern = '[0-9]';

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
  const [erros, setErros] = useState();

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
        <FormControl fullWidth>
          <FormLabel>
            <Typography>Address</Typography>
          </FormLabel>
          <OutlinedInput
            value={formValues.address}
            onChange={(e) => handleFormValuesChange('address', e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>
            <Typography>Name</Typography>
          </FormLabel>
          <OutlinedInput
            value={formValues.clientName}
            onChange={(e) => handleFormValuesChange('clientName', e.target.value)}
          />
        </FormControl>
        <Stack direction={'row'} spacing={2}>
          <FormControl fullWidth>
            <FormLabel>
              <Typography>Number Of Guest</Typography>
            </FormLabel>
            <OutlinedInput
              value={formValues.guestNo}
              onChange={(e) => handleFormValuesChange('guestNo', e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>
              <Typography>Number Of Table</Typography>
            </FormLabel>
            <OutlinedInput
              value={formValues.tableNo}
              onChange={(e) => handleFormValuesChange('tableNo', e.target.value)}
            />
          </FormControl>
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <FormControl fullWidth>
            <FormLabel>
              <Typography>Booking Time</Typography>
            </FormLabel>
            <CustomDatePicker
              value={formValues.date}
              onChange={(value) => handleFormValuesChange('date', value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>
              <Typography>Table Type</Typography>
            </FormLabel>
            <Select
              value={formValues.tableType}
              onChange={(e) => handleFormValuesChange('tableType', e.target.value)}>
              {tableTypeSelect}
            </Select>
          </FormControl>
        </Stack>
        <FormControl fullWidth>
          <FormLabel>
            <Typography>Phone No.</Typography>
          </FormLabel>
          <OutlinedInput
            value={formValues.phoneNumber}
            onChange={(e) => handleFormValuesChange('phoneNumber', e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>
            <Typography>Note</Typography>
          </FormLabel>
          <OutlinedInput
            multiline
            rows={3}
            value={formValues.note}
            onChange={(e) => handleFormValuesChange('note', e.target.value)}
          />
        </FormControl>
        <CustomButton padding={'16px 24px'} onClick={() => onSubmit(formValues)}>
          Send Request
        </CustomButton>
      </Stack>
    </Box>
  );
};

BookTable.propTypes = {
  onSubmit: PropTypes.func
};
