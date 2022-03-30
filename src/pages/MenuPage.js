import React, { useState } from 'react';
import { Box } from '@mui/material';

export const MenuPage = () => {
  const [products, setProducts] = useState([
    {
      productId: 1,
      categoryId: 1,
      name: 'test',
      price: 2,
      description: 'dddd',
      quantity: 2,
      image: ''
    },
    {
      productId: 12,
      categoryId: 2,
      name: 'tesasdast',
      price: 2,
      description: 'ddasdadd',
      quantity: 2,
      image: ''
    },
    {
      productId: 13,
      categoryId: 3,
      name: 'teaaaasdasdst',
      price: 222,
      description: 'ddasdasdd',
      quantity: 3,
      image: ''
    },
    {
      productId: 1,
      categoryId: 4,
      name: 'tefasfasfst',
      price: 233,
      description: 'dddd',
      quantity: 32,
      image: ''
    },
    {
      productId: 1,
      categoryId: 5,
      name: 'teasdasdst',
      price: 2,
      description: 'dddqeqwed',
      quantity: 2,
      image: ''
    }
  ]);


  return <Box>{products}</Box>;
};
