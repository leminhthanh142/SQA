import React, { useState } from 'react';
import { Box, Stack, styled, Typography, Paper } from '@mui/material';
import { useOrders } from '../context/orders';
import { MainLayout } from '../components/layout/MainLayout';
import { HeroBackground } from '../components/HeroBackground';
import { NumberStepper } from '../components/NumberStepper';
import { OrderCard } from '../components/OrderCard';

const labels = ['Contacts', 'Shipping', 'Payment'];

export const OrdersPage = () => {
  const { orders, onAddOrder, onRemoveOrder } = useOrders();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <MainLayout>
      <HeroBackground
        title="Orders"
        des="Making a reservation at Délicious restaurant is easy and takes just a couple of minutes."
      />
      <Wrapper>
        <Typography variant={'h2'}>Checkout</Typography>
        <Stack spacing={4} direction={'row'} mt={4} justifyContent={'space-between'}>
          <Box width={500}>
            <NumberStepper activeStep={activeStep} labels={labels} />
          </Box>
          <StyledPaper elevation={0}>
            <Typography variant={'body2'}>Order total ({orders.length})</Typography>
            <Box maxHeight={800} overflow={'auto'}>
              <Stack spacing={2} mt={3}>
                {orders.map((order) => (
                  <OrderCard
                    key={order.id}
                    image={order.image}
                    name={order.name}
                    price={order.price}
                    quantity={order.quantity}
                    onAddOrder={() => onAddOrder(order)}
                    onRemoveOrder={() => onRemoveOrder(order)}
                    totalPrice={order.totalPrice}
                  />
                ))}
              </Stack>
            </Box>
          </StyledPaper>
        </Stack>
      </Wrapper>
    </MainLayout>
  );
};

const Wrapper = styled(Box)({
  maxWidth: 1320,
  margin: '0 auto',
  paddingTop: '120px'
});

const StyledPaper = styled(Paper)(() => ({
  border: '1px solid #f0f0f5',
  padding: 24,
  width: 520
}));
