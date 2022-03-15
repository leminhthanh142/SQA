import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { CustomButton } from './CustomButton';
import { styled } from '@mui/system';

export const Header = () => {
  const [isShrink, setIsShrink] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      onScroll(window.pageYOffset);
    });
    return () => {
      window.removeEventListener('scroll', () => onScroll(window.pageYOffset));
    };
  }, []);

  const onScroll = (height) => {
    if (height >= 250) {
      setIsShrink(true);
      return;
    }
    setIsShrink(false);
  };

  return (
    <Container isShrink={isShrink}>
      <Stack direction={'row'} spacing={4}>
        <Box mr={3}>
          <img src="/images/sqa-logo.webp" alt="logo" />
        </Box>
        <Link to={'/'}>Home</Link>
        <Link to={'/menu'}>Menu</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/booking'}>Book a Table</Link>
      </Stack>
      <CustomButton variant={'contained'} width={130}>
        <ShoppingCartIcon />
      </CustomButton>
    </Container>
  );
};

const Container = styled(Box)(({ isShrink }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 9999,
  margin: '0 auto',
  transition: 'all 0.4s',
  background: isShrink ? 'rgb(255,244,242)' : 'transparent',
  boxShadow: isShrink ? '0 0 10px 8px rgba(0,0,0,0.1)' : 'none',
  position: isShrink ? 'fixed' : 'relative',
  top: 0,
  height: 80,
  width: '100%',
  padding: '0 120px',
  '& a': {
    position: 'relative',
    padding: '28px 5px',
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
}));
