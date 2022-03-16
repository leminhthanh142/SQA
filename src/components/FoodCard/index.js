import React from 'react';
import { Card, CardMedia, styled, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const FoodCard = ({ name, description, price, image }) => {
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
    </Container>
  );
};

const Container = styled(Card)({
  padding: '35px 40px 60px 40px',
  margin: '0 12px',
  borderRadius: '10px',
  minHeight: 480
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

FoodCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
};
