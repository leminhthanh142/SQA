import React from 'react';
import { Header } from '../components/Header';
import { MainLayout } from '../components/layout/MainLayout';
import { informationCard } from '../dummyData';
import { InformationCard } from '../components/InformationCard';
import { Stack } from '@mui/material';

export const HomePage = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <Stack direction={'row'} spacing={3}>
          {informationCard.map((card) => (
            <InformationCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </Stack>
      </MainLayout>
    </>
  );
};
