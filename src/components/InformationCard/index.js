import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      transition: 'all 0.6s',
      padding: '47px 46px 36px',
      border: '1px solid',
      borderColor: '#e6dad8',
      '&:hover': {
        borderColor: '#ffffff',
        boxShadow: '-5px 15px 25px 12px rgba(255,146,146,0.1)'
      }
    }
  })
);

export const InformationCard = ({ icon, title, description }) => {
  const classes = useStyles();
  return (
    <Card elevation={0} className={classes.container} sx={{ borderRadius: '10px' }}>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        {icon}
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align={'center'}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align={'center'}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

InformationCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string
};
