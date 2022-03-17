import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { Header } from '../Header';
import { HeroBackground } from '../HeroBackground';

export const MainLayout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};
