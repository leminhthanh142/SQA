import React, { useState } from 'react';
import {
  Stack,
  Box,
  Typography,
  OutlinedInput,
  FormControl,
  FormLabel
} from '@mui/material';
import { CustomButton } from '../CustomButton';
import PropTypes from 'prop-types';
import { Home, LocalPhone, EmailOutlined } from '@mui/icons-material';

export const ContactForm = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleFormValuesChange = (name, newValue) => {
    setFormValues({
      ...formValues,
      [name]: newValue
    });
  };

  return (
    <Box>
      <Box mb={3}>
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          Get in Touch
        </Typography>
      </Box>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box flex={0.8}>
          <Stack spacing={3}>
            <Stack direction={'row'} spacing={2}>
              <FormControl fullWidth>
                <FormLabel>
                  <Typography>Name</Typography>
                </FormLabel>
                <OutlinedInput
                  value={formValues.name}
                  onChange={(e) => handleFormValuesChange('name', e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel>
                  <Typography>Email</Typography>
                </FormLabel>
                <OutlinedInput
                  value={formValues.email}
                  onChange={(e) => handleFormValuesChange('email', e.target.value)}
                />
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
                <Typography>Message</Typography>
              </FormLabel>
              <OutlinedInput
                multiline
                rows={3}
                value={formValues.message}
                onChange={(e) => handleFormValuesChange('message', e.target.value)}
              />
            </FormControl>
            <CustomButton padding={'16px 24px'} onClick={() => onSubmit(formValues)}>
              Send Request
            </CustomButton>
          </Stack>
        </Box>
        <Box>
          <Box display={'flex'} alignItems={'center'} mb={2}>
            <Home fontSize={'large'} sx={{ mr: 2 }} />
            <Typography> Example Address</Typography>
          </Box>
          <Box display={'flex'} alignItems={'center'} mb={2}>
            <LocalPhone fontSize={'large'} sx={{ mr: 2 }} />
            <Typography> 0123456789</Typography>
          </Box>
          <Box display={'flex'} alignItems={'center'} mb={2}>
            <EmailOutlined fontSize={'large'} sx={{ mr: 2 }} />
            <Typography> example@gmail.com</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func
};
