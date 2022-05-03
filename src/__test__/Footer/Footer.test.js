/*eslint-disable*/
import { render } from '@testing-library/react';
import { Footer } from '../../components/Footer';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

it('Footer renders correctly', () => {
  const tree = render(<Footer />, {wrapper: BrowserRouter});
  expect(tree).toMatchSnapshot();
});
