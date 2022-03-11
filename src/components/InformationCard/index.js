import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

export const InformationCard = ({ icon, title, description }) => {
  return (
    <Card>
      <Box>{icon}</Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
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
