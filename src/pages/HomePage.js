import React, { useCallback } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { informationCard } from '../dummyData';
import { InformationCard } from '../components/InformationCard';
import { Stack, Typography, Box, styled } from '@mui/material';
import { BookTable } from '../components/bookTable/BookTable';
import { PopularDishes } from '../components/PopularDishes';
import { HeroBackground } from '../components/HeroBackground';
import { customAxios } from '../customAxios';
import { useFlash } from '../context/flash';
import moment from 'moment';

export const HomePage = () => {
  const { setFlash } = useFlash();

  const handleSubmitBooking = useCallback(async (values) => {
    const appointmentTime = moment(values.date).format('YYYY-MM-DD');
    const appointmentHour = moment(values.date).format('hh:mm');

    const params = {
      table: [{ tableType: values.tableType, numberOfTable: values.tableNo }],
      clientName: values.clientName,
      phoneNumber: values.phoneNumber,
      note: values.note,
      appointmentHour,
      appointmentTime,
      address: values.address,
      date: new Date()
    };
    try {
      await customAxios.post('/reservation/new-reservation', {
        ...params
      });
      setFlash({ type: 'success', message: 'Book table successfully' });
    } catch (err) {
      setFlash({ type: 'error', message: 'Something wrong, please try again later!' });
    }
  }, []);

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
      <Wrapper>
        <BookTable onSubmit={handleSubmitBooking} />
      </Wrapper>
    </MainLayout>
  );
};

export const Wrapper = styled(Box)({
  maxWidth: 1320,
  margin: '0 auto',
  paddingTop: '120px'
});
