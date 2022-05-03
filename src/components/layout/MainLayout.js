import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { Header } from '../Header';
import { Footer } from '../footer';

export const MainLayout = ({ children, isHideBookTable }) => {
  return (
    <Box>
      <Header isHideBookTable={isHideBookTable} />
      {children}
      <Footer />
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  isHideBookTable: PropTypes.bool
};
