import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <Box
      style={{
        height: '250px',
        marginTop: '40px',
        padding: '0px',
        backgroundColor: 'rgb(255,244,242)'
      }}>
      <Container sx={{ pt: 3 }}>
        <Stack direction={'row'}>
          <Stack direction={'column'} width={'33%'}>
            <Box sx={{ pb: 4 }}>
              <img src="/images/sqa-logo.webp" />
            </Box>
            <Typography varient={'subtitle1'}>
              Land behold it created good saw after she had Our set living. Signs midst dominion
              creepeth morning laboris nisi ufsit aliquip.
            </Typography>
          </Stack>
          <Stack direction={'column'} spacing={4} textAlign={'center'} width={'25%'}>
            <Typography variant={'h6'} color={'black'} sx={{ pb: 2 }}>
              Quick Links
            </Typography>
            <Link to={'/'}>Home</Link>
            <Link to={'/menu'}>Menu</Link>
            <Link to={'/contact'}>Contact</Link>
          </Stack>
          <Stack direction={'column'} sx={{ pl: 8 }}>
            <Typography variant={'h6'} color={'black'} sx={{ pb: 2 }}>
              Contact Us
            </Typography>
            <Typography>76/A, Green Lane, Dhanmondi, NYC</Typography>
            <Typography sx={{ pt: 4, color: '#fe5f41', fontSize: 20 }}>
              +10 (78) 738-9083
            </Typography>
            <Typography sx={{ pt: 4, color: '#fe5f41', fontWeight: 'light' }} variant={'subtitle2'}>
              restaurco89@gmail.com
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
