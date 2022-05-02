import React from 'react';
import { Box, Typography, Stack, IconButton, styled } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import PropTypes from 'prop-types';

export const OrderCard = ({
  image,
  name,
  price,
  quantity,
  onAddOrder,
  onRemoveOrder,
  totalPrice
}) => {
  return (
    <Stack spacing={2.5} direction={'row'}>
      <img src={image} alt="" width={100} height={100} />
      <Box flex={1}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
          <Typography variant={'body1'}>{name}</Typography>
          <Typography variant={'body1'} sx={{ color: '#fe5f41' }}>
            ${price}
          </Typography>
        </Box>
        <Stack direction={'row'} alignItems={'center'} spacing={1.5}>
          <Typography variant={'body1'}>Quantity: </Typography>
          <IconButton onClick={onRemoveOrder}>
            <Remove fontSize={'small'} />
          </IconButton>
          <Typography variant={'body1'}>{quantity}</Typography>
          <IconButton onClick={onAddOrder}>
            <Add fontSize={'small'} />
          </IconButton>
        </Stack>
        <Typography variant={'body1'}>
          Total Price: <TotalPrice>${totalPrice}</TotalPrice>
        </Typography>
      </Box>
    </Stack>
  );
};

const TotalPrice = styled('span')({
  marginLeft: 8,
  color: '#fe5f41'
});

OrderCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  onAddOrder: PropTypes.func,
  onRemoveOrder: PropTypes.func,
  totalPrice: PropTypes.number
};
