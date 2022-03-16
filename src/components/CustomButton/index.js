import React from 'react';
import { Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

export const CustomButton = ({ width, children, variant = 'contained', padding }) => {
  return (
    <StyledButton sx={{ width, padding }} variant={variant}>
      <Typography sx={{ color: '#ffffff' }}>{children}</Typography>
    </StyledButton>
  );
};

// gio c se style nhu nay
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
  variant: PropTypes.oneOf(['text', 'outlined', 'contained'])
};
