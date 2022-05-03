/*eslint-disable*/
import { render } from '@testing-library/react';
import { Header } from '../../components/Header';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

it('Header renders correctly', () => {
  const tree = render(<Header />, {wrapper: BrowserRouter});
  expect(tree).toMatchSnapshot();
});
