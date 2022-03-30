import React from 'react';
import { Card, CardContent, Typography, Box, styled } from '@mui/material';
import PropTypes from 'prop-types';

export const InformationCard = ({ icon, title, description }) => {
  return (
    <Container elevation={0}>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        {icon}
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" align={'center'}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" align={'center'}>
          {description}
        </Typography>
      </CardContent>
    </Container>
  );
};

const Container = styled(Card)(() => ({
  transition: 'all 0.6s',
  padding: '47px 46px 36px',
  border: '1px solid',
  borderColor: '#e6dad8',
  borderRadius: '10px',
  '&:hover': {
    borderColor: '#ffffff',
    boxShadow: '-5px 15px 25px 12px rgba(255,146,146,0.1)'
  }
}));

InformationCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string
};
