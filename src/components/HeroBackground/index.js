import React from 'react';
import { Box, Stack, styled, Typography, CardMedia } from '@mui/material';
import { CustomButton } from '../CustomButton';

export const HeroBackground = () => {
  return (
    <Wrapper direction={'row'} spacing={10}>
      <ContentContainer>
        <Typography variant={'h1'}>Meet, Eat & Enjoy the true test</Typography>
        <Typography variant={'subtitle1'} sx={{ mt: 3, mb: 4 }}>
          Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.
        </Typography>
        <CustomButton padding={'20px 65px'}>Our Menu</CustomButton>
      </ContentContainer>
      <Box>
        <CardMedia component={'img'} image="/images/hero_background.webp" alt="hero background" />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)({
  background: 'rgb(255,244,242)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
});

const ContentContainer = styled(Box)({
  maxWidth: 672,
  marginRight: 50
});
