import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { Header } from '../Header';
import { Footer } from '../footer';

export const MainLayout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};
