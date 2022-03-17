import React from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { informationCard } from '../dummyData';
import { InformationCard } from '../components/InformationCard';
import { Stack, Typography, Box, styled } from '@mui/material';
import { BookTable } from '../components/bookTable/BookTable';
import { PopularDishes } from '../components/PopularDishes';
import { HeroBackground } from '../components/HeroBackground';
import PropTypes from 'prop-types';

export const HomePage = () => {
  return (
    <MainLayout>
      <HeroBackground
        title="Meet, Eat & Enjoy the true test"
        des="Making a reservation at Délicious restaurant is easy and takes just a couple of minutes."
        button="Our Menu"
      />
      <Wrapper mt={15}>
        <Box mb={3}>
          <Typography variant={'h2'} align={'center'}>
            Best way to eat healthy food
          </Typography>
        </Box>
        <Box mb={7}>
          <Typography variant={'body2'} align={'center'}>
            Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.
          </Typography>
        </Box>
        <Stack direction={'row'} spacing={3} mb={10}>
          {informationCard.map((card) => (
            <InformationCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </Stack>
      </Wrapper>
      <PopularDishes />
      <Wrapper mt={15}>
        <BookTable />
      </Wrapper>
    </MainLayout>
  );
};

export const Wrapper = styled(Box)({
  maxWidth: 1320,
  marginLeft: 'auto',
  marginRight: 'auto'
});
