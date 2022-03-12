import React, { useState } from 'react';
import { Box } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { CustomButton } from './CustomButton';
import { styled } from '@mui/system';

export const Header = () => {
  const [isShrink, setIsShrink] = useState(false);
  return (
    <header>
      <Container>
        <Box display={'flex'} alignItems={'center'}>
          <Box mr={3}>
            <img src="/images/sqa-logo.webp" alt="logo" />
          </Box>
          <Link to={'/'}>Home</Link>
          <Link to={'/menu'}>Menu</Link>
          <Link to={'/contact'}>Contact</Link>
          <Link to={'/booking'}>Book a Table</Link>
        </Box>
        <CustomButton variant={'contained'} width={130}>
          <ShoppingCartIcon />
        </CustomButton>
      </Container>
    </header>
  );
};

const Container = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 80,
  '& a': {
    position: 'relative',
    padding: '28px 5px',
    margin: '0 5px',
    color: '#4d312c',
    fontWeight: 700,
    transition: 'all 0.4s ease-out',
    overflow: 'hidden',
    '&:after': {
      content: '""',
      transition: 'all 0.4s ease-out',
      height: '3px',
      position: 'absolute',
      background: '#FE5F41',
      transformOrigin: 'left',
      bottom: 0,
      left: 0,
      width: 0
    },
    '&:hover': {
      color: '#FE5F41',
      '&:after': {
        width: '100%',
        left: 4
      }
    }
  }
});
