import React from 'react';
import { Card, CardMedia, styled, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const FoodMenuCard = ({ name, description, price, image, onOrder }) => {
  return (
    <Container>
      <Box position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <StyledCardMedia component={'img'} image={image} />
        <PriceTag>${price}</PriceTag>
      </Box>
      <Typography align={'center'} sx={{ mb: 2 }} variant={'h5'}>
        {name}
      </Typography>
      <Typography align={'center'} sx={{ mb: 4 }}>
        {description}
      </Typography>
      <StyledTypography align={'center'} sx={{ mb: 4 }} onClick={onOrder}>
        Add to carts
      </StyledTypography>
    </Container>
  );
};

const Container = styled(Card)({
  padding: '35px 40px 20px 40px',
  minHeight: 515,
  maxWidth: 416,
  width: '100%',
  transition: 'all 0.6s',
  border: '1px solid',
  borderColor: '#e6dad8',
  borderRadius: '10px',
  boxShadow: 'none',
  '&:hover': {
    borderColor: '#ffffff',
    boxShadow: '-5px 15px 25px 12px rgba(255,146,146,0.1)'
  }
});

const StyledCardMedia = styled(CardMedia)({
  maxWidth: 200,
  height: 200,
  borderRadius: '50%',
  marginBottom: 26
});

const PriceTag = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  right: 40,
  bottom: 50,
  color: '#ffffff',
  width: 60,
  height: 60,
  fontWeight: 700,
  borderRadius: '50%',
  background: '#fe5f41'
});

const StyledTypography = styled(Typography)(() => ({
  color: '#fe5f41',
  paddingBottom: 12,
  borderBottom: '2px solid #fe5f41',
  letterSpacing: '1px',
  cursor: 'pointer',
  width: 'fit-content',
  marginRight: 'auto',
  marginLeft: 'auto',
  fontWeight: 700
}));

FoodMenuCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  onOrder: PropTypes.func
};
