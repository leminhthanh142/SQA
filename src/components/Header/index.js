import React, { useEffect, useState } from 'react';
import { Box, Stack, Chip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { CustomButton } from '../CustomButton';
import { styled } from '@mui/system';
import { useOrders } from '../../context/orders';

export const Header = () => {
  const [isShrink, setIsShrink] = useState(false);
  const navigate = useNavigate();
  const { orders } = useOrders();

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
          <img src={isShrink ? '/images/sqa-logo.webp' : '/images/logo.png'} alt="logo" />
        </Box>
        <Link to={'/'}>Home</Link>
        <Link to={'/menu'}>Menu</Link>
        <Link to={'/contact'}>Contact</Link>
      </Stack>
      <Box position={'relative'}>
        <a id={'booking-btn'} href={'#booking'}>
          Book a Table
        </a>
        <CustomButton variant={'contained'} width={130} onClick={() => navigate('/orders')}>
          <ShoppingCartIcon />
        </CustomButton>
        {!!orders.length && <StyledTag label={orders.length} />}
      </Box>
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
  position: isShrink ? 'fixed' : 'absolute',
  top: 0,
  height: 80,
  width: '100%',
  padding: '0 120px',
  '& a': {
    position: 'relative',
    padding: '28px 5px',
    color: isShrink ? '#4d312c' : '#ffffff',
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
  },
  '& #booking-btn': {
    marginRight: 24
  }
}));

const StyledTag = styled(Chip)({
  position: 'absolute',
  right: 0,
  top: -10,
  background: '#fc2b2b',
  '& span': {
    color: '#ffffff'
  }
});
