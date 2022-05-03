/*eslint-disable*/
import { render } from '@testing-library/react';
import { BookTable } from '../../components/bookTable/BookTable';
import React from 'react';
import { noop } from '../../utils/test';

it('BookTable renders correctly', () => {
  const props = {
    onSubmit: noop
  };
  const tree = render(<BookTable {...props} />);
  expect(tree).toMatchSnapshot();
});
