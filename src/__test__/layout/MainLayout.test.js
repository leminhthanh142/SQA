/*eslint-disable*/
import { render } from '@testing-library/react';
import { MainLayout } from '../../components/layout/MainLayout';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

it('MainLayout renders correctly', () => {
  const props = {
    children: <div>Children</div>,
    isHideBookTable: false
  }
  const tree = render(<MainLayout {...props}/>, {wrapper: BrowserRouter});
  expect(tree).toMatchSnapshot();
});
