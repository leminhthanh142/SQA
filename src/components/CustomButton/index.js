import React from 'react';
import { Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

export const CustomButton = ({ width, children, variant = 'contained', padding, onClick }) => {
  return (
    <StyledButton sx={{ width, padding }} variant={variant} onClick={onClick}>
      <Typography sx={{ color: '#ffffff' }}>{children}</Typography>
    </StyledButton>
  );
};

const StyledButton = styled(Button)({
  borderRadius: '40px',
  backgroundColor: '#fe5f41',
  '&:hover': {
    backgroundColor: '#fd4e2d'
  }
});

CustomButton.propTypes = {
  width: PropTypes.number,
  padding: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained'])
};
