import React, { useCallback, useEffect, useState } from 'react';
import { Box, Stack, styled, Typography, Grid } from '@mui/material';

import { dishesType } from '../type/index';
import { customAxios } from '../customAxios';

import { FoodMenuCard } from '../components/FoodMenuCard';
import { MainLayout } from '../components/layout/MainLayout';
import { HeroBackground } from '../components/HeroBackground';
import { BookTable } from '../components/bookTable/BookTable';

import { useOrders } from '../context/orders';
import { useFlash } from '../context/flash';

export const MenuPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedType, setSelectedType] = useState('breakFast');
  const { orders, onAddOrder } = useOrders();
  const { setFlash } = useFlash();

  useEffect(() => {
    fetchFood();
  }, []);

  const fetchFood = useCallback(async () => {
    try {
      const res = await customAxios.get('/popular-dishes');
      setProducts(res.data);
    } catch (err) {
      throw new Error(err);
    }
  }, []);

  const handleChangeDishesType = useCallback((type) => {
    setSelectedType(type);
    fetchFood();
  }, []);

  const handleAddOrder = useCallback(
    (product) => {
      onAddOrder(product);
      setFlash({ type: 'success', message: 'Add food to carts successfully!' });
    },
    [orders]
  );

  return (
    <MainLayout>
      <HeroBackground
        title="Food Menu"
        des="Making a reservation at Délicious restaurant is easy and takes just a couple of minutes."
        maxHeight={500}
      />
      <Wrapper mb={4}>
        <Typography variant={'h2'} sx={{ mb: 3 }}>
          Most Popular Dishes
        </Typography>
        <Typography variant={'body2'}>
          Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.
        </Typography>
        <Stack direction={'row'} spacing={6} mb={4} mt={3}>
          {dishesType.map((dishType) => (
            <Box key={dishType.type} onClick={() => handleChangeDishesType(dishType.type)}>
              <StyledTypography isSelected={selectedType === dishType.type} variant={'subtitle1'}>
                {dishType.name}
              </StyledTypography>
            </Box>
          ))}
        </Stack>
        <Grid spacing={3} container>
          {products.map((product) => (
            <Grid item key={product.id} xs={4}>
              <FoodMenuCard
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
                onOrder={() => handleAddOrder(product)}
              />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
      <Wrapper>
        <BookTable />
      </Wrapper>
    </MainLayout>
  );
};

export const Wrapper = styled(Box)({
  maxWidth: 1320,
  margin: '0 auto',
  paddingTop: '120px'
});

const StyledTypography = styled(Typography)(({ isSelected }) => ({
  cursor: 'pointer',
  position: 'relative',
  paddingBottom: '12px',
  color: isSelected ? '#FE5F41' : '#6e6575',
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
