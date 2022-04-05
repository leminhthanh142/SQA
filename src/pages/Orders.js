import React, { useState } from 'react';
import { Box, Stack, styled, Typography } from '@mui/material';
import { useOrders } from '../context/orders';
import { MainLayout } from '../components/layout/MainLayout';
import { HeroBackground } from '../components/HeroBackground';
import { NumberStepper } from '../components/NumberStepper';

const labels = ['Contacts', 'Shipping', 'Payment'];

export const OrdersPage = () => {
  const { orders, handleAddOrder } = useOrders();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <MainLayout>
      <HeroBackground
        title="Orders"
        des="Making a reservation at Délicious restaurant is easy and takes just a couple of minutes."
      />
      <Wrapper>
        <Typography variant={'h2'}>Checkout</Typography>
        <Stack spacing={4} direction={'row'} mt={4}>
          <Box flex={1}>
            <NumberStepper activeStep={activeStep} labels={labels} />
          </Box>
        </Stack>
      </Wrapper>
    </MainLayout>
  );
};

export const Wrapper = styled(Box)({
  maxWidth: 1320,
  margin: '0 auto',
  paddingTop: '120px'
});
