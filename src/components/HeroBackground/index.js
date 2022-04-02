import React from 'react';
import { Box, Stack, styled, Typography, CardMedia } from '@mui/material';
import { CustomButton } from '../CustomButton';
import PropTypes from 'prop-types';

export const HeroBackground = ({ title, des, button, maxHeight }) => {
  return (
    <HeroWrapper>
      <OverLay />
      <img
        src="/images/hero_background.webp"
        alt="hero background"
        height={maxHeight}
        width={960}
      />
      <Wrapper>
        <StyledHeading variant={'h1'}>{title}</StyledHeading>
        <StyledHeading variant={'subtitle1'} sx={{ mt: 3, mb: 4 }}>
          {des}
        </StyledHeading>
        {button && <CustomButton padding={'20px 65px'}>{button}</CustomButton>}
      </Wrapper>
    </HeroWrapper>
  );
};

const HeroWrapper = styled(Box)(() => ({
  position: 'relative',
  height: '680px',
  width: '100%',
  '& img': {
    position: 'absolute',
    zIndex: 9,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
}));

export const OverLay = styled(Box)(() => ({
  position: 'absolute',
  zIndex: 10,
  width: '100%',
  height: '100%',
  background: '#212529',
  opacity: 0.8
}));

const Wrapper = styled(Stack)({
  display: 'inline-block',
  position: 'absolute',
  zIndex: 11,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  width: '100%'
});

const StyledHeading = styled(Typography)({
  color: '#ffffff'
});

HeroBackground.propTypes = {
  title: PropTypes.string,
  des: PropTypes.string,
  button: PropTypes.string,
  maxHeight: PropTypes.number
};
