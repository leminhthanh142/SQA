import React from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { informationCard } from '../dummyData';
import { InformationCard } from '../components/InformationCard';
import { Stack, Typography, Box } from '@mui/material';
import { BookTable } from '../components/bookTable/BookTable';

export const HomePage = () => {
  return (
    <>
      <MainLayout>
        <Box mt={10}>
          <Box mb={3}>
            <Typography variant={'h2'} align={'center'}>
              Best way to eat healthy food
            </Typography>
          </Box>
          <Box mb={7}>
            <Typography variant={'body2'} align={'center'}>
              Making a reservation at Délicious restaurant is easy and takes just a couple of
              minutes.
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
        </Box>
        <BookTable />
      </MainLayout>
    </>
  );
};
