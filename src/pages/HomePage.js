import React from 'react';
import { Header } from '../components/Header';
import { MainLayout } from '../components/layout/MainLayout';
import { informationCard } from '../dummyData';
import { InformationCard } from '../components/InformationCard';

export const HomePage = () => {
  return (
    <MainLayout>
      <Header />
      {informationCard.map((card) => (
        <InformationCard
          key={card.id}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </MainLayout>
  );
};
