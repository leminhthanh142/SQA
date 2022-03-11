import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      maxWidth: 1320,
      margin: '0 auto'
    }
  })
);

export const MainLayout = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.container}>{children}</Box>;
};

MainLayout.propTypes = {
  children: PropTypes.node
};
