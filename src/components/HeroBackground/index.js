import React from 'react';
import { Box, Stack, styled, Typography, CardMedia } from '@mui/material';
import { CustomButton } from '../CustomButton';
import PropTypes from 'prop-types';

export const HeroBackground = (props) => {
  return (
    <Wrapper direction={'row'} spacing={10}>
      <ContentContainer>
        <Typography variant={'h1'}>{props.title}</Typography>
        <Typography variant={'subtitle1'} sx={{ mt: 3, mb: 4 }}>
          {props.des}
        </Typography>
        <CustomButton padding={'20px 65px'}>{props.button}</CustomButton>
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
  maxWidth: 633.55,
  marginLeft: 50
});
HeroBackground.propTypes = {
  title: PropTypes.string,
  des: PropTypes.string,
  button: PropTypes.string
};
