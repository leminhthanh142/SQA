import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Box, styled, Typography, Stack, IconButton } from '@mui/material';
import { customAxios } from '../../customAxios';
import { FoodCard } from '../FoodCard';
import Slider from 'react-slick';
import { Wrapper } from '../../pages/HomePage';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const arrowStyle = {
  color: 'rgba(255,255,255,0.53)',
  '&:hover': { color: '#ffffff' }
};

const options = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  nextArrow: <ArrowForwardIosIcon fontSize={'large'} sx={arrowStyle} />,
  prevArrow: <ArrowBackIosNewIcon fontSize={'large'} sx={arrowStyle} />
};

export const PopularDishes = () => {
  const [popularDishes, setPopularDishes] = useState([]);
  const [dishesType] = useState([
    {
      type: 'breakFast',
      name: 'Breakfast'
    },
    {
      type: 'lunches',
      name: 'Lunches'
    },
    {
      type: 'dinner',
      name: 'Dinner'
    },
    {
      type: 'drink',
      name: 'Drink'
    },
    {
      type: 'fastFood',
      name: 'Fastfood'
    }
  ]);

  const [selectedType, setSelectedType] = useState('breakFast');
  const sliderRef = useRef();
  const handleChangeDishesType = (type) => {
    setSelectedType(type);
  };

  useEffect(() => {
    fetchFood();
  }, []);

  const fetchFood = useCallback(async () => {
    try {
      const res = await customAxios.get('/popular-dishes');
      setPopularDishes(res.data);
    } catch (err) {
      throw new Error(err);
    }
  }, []);

  return (
    <Container mt={15}>
      <Wrapper>
        <Box mb={4}>
          <Typography variant={'h2'} sx={{ color: '#ffffff', mb: 3 }}>
            Most Popular Dishes
          </Typography>
          <Typography variant={'body2'}>
            Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.
          </Typography>
        </Box>
        <Stack direction={'row'} spacing={6} mb={4}>
          {dishesType.map((dishType) => (
            <Box key={dishType.type} onClick={() => handleChangeDishesType(dishType.type)}>
              <StyledTypography isSelected={selectedType === dishType.type} variant={'subtitle1'}>
                {dishType.name}
              </StyledTypography>
            </Box>
          ))}
        </Stack>
        <Slider {...options} ref={sliderRef}>
          {popularDishes.map((dish) => (
            <FoodCard
              key={dish.id}
              name={dish.name}
              description={dish.description}
              image={dish.image}
              price={dish.price}
            />
          ))}
        </Slider>
      </Wrapper>
    </Container>
  );
};

const Container = styled(Box)({
  background: 'rgb(76, 50, 46)',
  padding: '120px 0'
});

const StyledTypography = styled(Typography)(({ isSelected }) => ({
  cursor: 'pointer',
  position: 'relative',
  paddingBottom: '12px',
  color: isSelected ? '#FE5F41' : '#ffffff',
  fontWeight: 900,
  transition: 'all 0.4s ease-out',
  overflow: 'hidden',
  '&:after': {
    content: '""',
    transition: 'all 0.4s ease-out',
    height: '3px',
    position: 'absolute',
    background: '#FE5F41',
    transformOrigin: 'left',
    bottom: 0,
    left: 0,
    width: isSelected ? '100%' : 0
  },
  '&:hover': {
    color: '#FE5F41',
    '&:after': {
      width: '100%'
    }
  }
}));
